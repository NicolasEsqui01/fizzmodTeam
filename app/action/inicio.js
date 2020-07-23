import axios from "axios";
import { headers, headersToPickers } from '../headers'


const getSessions = (sessions) => ({
  type: "GET_SESSIONS",
  sessions,
});

const getPickers = (pickers) => ({
  type: "GET_PICKERS",
  pickers,
});

const setPermiso = ()=>({
  type: "GET_PERMISO",
  permiso : true
})

const StatusPending = ()=>({
  type: "SET_STATUS",
  status: 'pending'
})

const StatusPicked = ()=>({
  type: "SET_STATUS2",
  status: 'picked'
})

export const fetchSessions = () => (dispatch) => {
  return axios
    .get('https://picking.janis.in/api/session', headers())
    .then((list) => {
      dispatch(getSessions(list.data))}
    );
};

export const fetchPickers = () => (dispatch) => {
  return axios
    .get(`https://picking.janis.in/api/picker`, headersToPickers())
    .then((list) => {
      console.log("LISTA DE PICKERS: ", list)
      dispatch(getPickers(list.data))}
      );
};

export const DamePermiso = () => dispatch =>{
  return dispatch(setPermiso())
}

export const ChangePending = () => dispatch =>{
  return dispatch(StatusPending())
};

export const ChangePicked = () => dispatch =>{
  return dispatch(StatusPicked())
};

