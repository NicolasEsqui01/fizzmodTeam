import axios from 'axios';

const Login = (auth) => {
  return {
    type: 'USER_LOGING',
    auth,
  };
};

const headers = {
  headers: {
    'Content-Type': 'application/json',
    'janis-api-key': 'Bearer',
    'janis-api-secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGNhNzhiNmNkYTk2OGVkY2Y3YjVlNSIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMjEyODksImlhdCI6MTU5NDg0ODQ4OX0.Pl06DCoXx9N4b-heZZHnxnw15EQD9_rTw2mIfmvR1J0'
  }
}

export const setLogin = (obj) => {
  return (dispatch) => {
    return axios
      .post('https://id.janis.in/api/login', obj, headers)
      .then((res) => {
          console.log(res)
        dispatch(Login(res.data));
      })
      .catch(err =>{
        return err.response.data
      });
  };
};

export const setRecuperarPassword = (obj) => {
  return (dispatch) => {
    return axios
      .post('https://id.janis.in/api/password-recovery', obj)
      .then((res) => {
        console.log(res.data);
      });
  };
};
