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
      dispatch(getSessions(allSessions.headers['x-janis-total']))
      const total = allSessions.headers['x-janis-total'];
      return total;
      })
    .then(()=>{
     axios.get('https://picking.janis.in/api/session?filters[status][0]=pending', headersToPickers())
      .then((allSessionsPending) => {
        dispatch(totalPending(allSessionsPending.headers['x-janis-total']))})
    })
    .then(()=>{
      axios.get('https://picking.janis.in/api/session?filters[status][0]=picking', headersToPickers())
      .then((allSessionsPicking) => {
         dispatch(totalPicking(allSessionsPicking.headers['x-janis-total']))})
    })
    .then(()=>{
      axios.get('https://picking.janis.in/api/session?filters[status][0]=picked', headersToPickers())
      .then((allSessionsPicked) => {
        dispatch(totalPicked(allSessionsPicked.headers['x-janis-total']))})
    })
    ;
};

export const fetchPickers = () => (dispatch) => {
  return axios
    .get(`https://picking.janis.in/api/picker`, headersToPickers())
    .then((list) => {
      dispatch(getPickers(list.data))}
      );
};

export const ChangePending = (qtyTotalSessions) => dispatch =>{
  return axios
  .get(`https://picking.janis.in/api/session?filters[status][0]=pending`, headers2(qtyTotalSessions))
  .then((list) => {
      dispatch(StatusPending(list.data))}
      );
};

export const ChangePickedAndPicking = (qtyTotalSessions) => dispatch =>{
  return axios
  .get(`https://picking.janis.in/api/session?filters[status][0]=picking&filters[status][1]=picked`, headers2(qtyTotalSessions))
  .then((list) => {
      dispatch(StatusPickedAndPicking(list.data))}
      );
};
