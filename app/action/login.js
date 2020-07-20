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
    'janis-api-secret':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDg0OTYsImlhdCI6MTU5NDgzNTY5Nn0.pSu8Cl75O8B4pxwh0dGzC_PAzOp-_WiAyIobSiXHxOc',
  },
};

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
