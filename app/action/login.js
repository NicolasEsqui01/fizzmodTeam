import axios from 'axios';
import { headers } from '../headers'


const Login = (token) => {
  return {
    type: 'USER_LOGING',
    token,
  };
};

const DatosUser = (datos) =>{
  return{
    type:'DATA_USER',
    datos
  }
};

export const setDatosUser = () =>{
  return dispatch =>{
    return axios.get('https://id.janis.in/api/account' , headers())
      .then(res => {
        dispatch(DatosUser(res.data))
      })
  }
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
  };
};
