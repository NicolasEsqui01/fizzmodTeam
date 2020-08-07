import axios from 'axios';
import { headers } from '../headers';

const startSession = (token) => {
  return {
    type: 'START_SESSION',
    token,
  };
};

export const SessionId = (sessionId) => {
  return {
    type: 'GET_SESSIONID',
    sessionId,
  };
};

const sessionPicking = (session) => {
  return {
    type: 'GET_SESSIONPICKING',
    session,
  };
};

export const setBooleano = (booleano) => {
  return {
    type: 'SET_BOOLEANO',
    booleano,
  };
};

export const setFinalSession = () => {
  return {
    type: 'FINAL_SESSION'
  };
};

export const setDespickear = (booleano) => {
  return {
    type: 'DESPICKEAR_ITEM',
    booleano,
  };
};

export const setReiniciar = (booleano)=>{

  return{
    type: 'REINICIAR',
    booleano,
  }
}

export const estadoOrdenSelected = (string) => {
  return {
    type: 'SET_TYPE_OF_ORDER_SELECTED',
    string,
  };
};

export const setIdItems = (id) => {
  return {
    type: 'IDITEMS',
    id
  }
};

export const setItems = (productos) => {
  return {
    type: 'PRODUCTOS',
    productos
  }
}

export const getStartSession = (id) => {
  return (dispatch) => {
    return axios
      .post(`https://picking.janis.in/api/session/${id}/start`, {}, headers())
      .then((res) => {
        localStorage.setItem('withSubstitute', false);
        return dispatch(startSession(res.data));
      });
  };
};


export const getSessionPicking = (id) => {
  return (dispatch) => {
    return axios
      .get(`https://picking.janis.in/api/session/${id}`, headers())
      .then((res) => {
        return dispatch(sessionPicking(res.data));
      });
  };
};
