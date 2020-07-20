import axios from 'axios';

const Login = (token) => {
  return {
    type: 'USER_LOGING',
    token,
  };
};

export const setLogin = (obj) => {
  return (dispatch) => {
    return axios
      .post('https://id.janis.in/api/login', obj)
      .then((res) => {
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
