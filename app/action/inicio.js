import axios from "axios";

const getSessions = (sessions) => ({
  type: "GET_SESSIONS",
  sessions,
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
        'janis-api-secret' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDEwOTYsImlhdCI6MTU5NDgyODI5Nn0.iMIiWM0axLUrZbnhcrbnbHhX_lBLO-gocavequcZw7Y',

      }
}

export const fetchSessions = () => (dispatch) => {
  return axios
    .get('https://picking.janis.in/api/session', headers)
    .then((list) => {
      dispatch(getSessions(list.data))}
      );
};

export const DamePermiso = () => dispatch =>{
  return dispatch(setPermiso())
}

export const ChangePending = () => dispatch =>{
  console.log('PENDING')
  return dispatch(StatusPending())
}

export const ChangePicked = () => dispatch =>{
  console.log('PICKED')
  return dispatch(StatusPicked())
}