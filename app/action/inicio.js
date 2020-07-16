import axios from "axios";

const getSessions = (sessions) => ({
  type: "GET_SESSIONS",
  sessions,
});

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
    .get(`https://picking.janis.in/api/session`, headers)
    .then((list) => {
      dispatch(getSessions(list.data))}
      );
};

// export const buscarPeliculas = function (nombre) {
//     return function (dispatch, getState) {
//       axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${nombre}`)
  

// Sebas ID 5f0ca78b6cda968edcf7b5e5