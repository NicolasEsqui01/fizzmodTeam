import axios from "axios";
import { headers, headersToPickers, headers2 } from '../headers'

const getSessions = (totalSessions) => ({
  type: "GET_SESSIONS",
  totalSessions,
});

const totalPending = (totalSessionsPending) => ({
  type: "TOTAL_PENDING",
  totalSessionsPending,
});

const totalPicked = (totalSessionsPicked) => ({
  type: "TOTAL_PICKED",
  totalSessionsPicked,
});

const totalPicking = (totalSessionsPicking) => ({
  type: "TOTAL_PICKING",
  totalSessionsPicking,
});

const getPickers = (pickers) => ({
  type: "GET_PICKERS",
  pickers,
});

const setPermiso = ()=>({
  type: "GET_PERMISO",
  permiso : true
})

const StatusPending = (sessions)=>({
  type: "GET_SESSIONS_PENDING",
  sessions,
})

const StatusPickedAndPicking = (sessions)=>({
  type: "GET_SESSIONS_PICKED_&_PICKING",
  sessions,
})



export const fetchSessions = () => (dispatch) => {
  return axios
    .get('https://picking.janis.in/api/session?sortBy=dateCreated&sortDirection=desc', headersToPickers())
    .then((allSessions) => {
      console.log("TOTALES : ",allSessions.headers['x-janis-total'])
      return dispatch(getSessions(allSessions.headers['x-janis-total']))})
    .then(()=>{
     return axios.get('https://picking.janis.in/api/session?filters[status][0]=pending', headersToPickers())
      .then((allSessionsPending) => {
        console.log("TOTAL PENDING: ",allSessionsPending.headers['x-janis-total'])
        return dispatch(totalPending(allSessionsPending.headers['x-janis-total']))})
    })
    .then(()=>{
      return axios.get('https://picking.janis.in/api/session?filters[status][0]=picking', headersToPickers())
      .then((allSessionsPicking) => {
        console.log("TOTALES PICKING : ",allSessionsPicking.headers['x-janis-total'])
         return dispatch(totalPicking(allSessionsPicking.headers['x-janis-total']))})
    })
    .then(()=>{
      return axios.get('https://picking.janis.in/api/session?filters[status][0]=picked', headersToPickers())
      .then((allSessionsPicked) => {
        console.log("TOTALES PICKED : ",allSessionsPicked.headers['x-janis-total'])
        return dispatch(totalPicked(allSessionsPicked.headers['x-janis-total']))})
    })
    ;
};

export const fetchPickers = () => (dispatch) => {
  return axios
    .get(`https://picking.janis.in/api/picker`, headersToPickers())
    .then((list) => {
      console.log("ESTOY EN PICKERS")
      dispatch(getPickers(list.data))}
      );
};

export const DamePermiso = () => dispatch =>{
  return dispatch(setPermiso())
}

export const ChangePending = (totalPending) => dispatch =>{
  return axios
  .get(`https://picking.janis.in/api/session?filters[status][0]=pending`, headers2(totalPending))
  .then((list) => {
      console.log("list.headers PENDING:  ",list.headers)
      dispatch(StatusPending(list.data))}
      );
};

export const ChangePickedAndPicking = (totalPickedAndPicking) => dispatch =>{
  return axios
  .get(`https://picking.janis.in/api/session?filters[status][0]=picking&filters[status][1]=picked`, headers2(totalPickedAndPicking))
  .then((list) => {
      console.log("list.headers PICKED AND PICKING:  ",list.headers)
      dispatch(StatusPickedAndPicking(list.data))}
      );
};
