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
        'janis-api-secret' :  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTU0NDM2NzEsImlhdCI6MTU5NTI3MDg3MX0.4Lva4JTtq-g2cAzuQSyg_bTwANs7SWYyAbvellg_Pfw',

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