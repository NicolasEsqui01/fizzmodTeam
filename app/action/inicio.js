import axios from "axios";

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


const headers = {
    headers:{
        'Content-Type': 'application/json',
        'janis-api-key' : 'Bearer',
        'janis-client': 'plataforma5-2020',
        'janis-api-secret' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDg0OTYsImlhdCI6MTU5NDgzNTY5Nn0.pSu8Cl75O8B4pxwh0dGzC_PAzOp-_WiAyIobSiXHxOc',

      }
}

export const fetchSessions = () => (dispatch) => {
  return axios
    .get('https://picking.janis.in/api/session', headers)
    .then((list) => {
      dispatch(getSessions(list.data))}
      );
};

export const fetchPickers = () => (dispatch) => {
  return axios
    .get(`https://picking.janis.in/api/picker`, headers)
    .then((list) => {
      dispatch(getPickers(list.data))}
      );
};

export const DamePermiso = () => dispatch =>{
  return dispatch(setPermiso())
}

export const ChangePending = () => dispatch =>{
  return dispatch(StatusPending())
}

export const ChangePicked = () => dispatch =>{
  return dispatch(StatusPicked())
}

