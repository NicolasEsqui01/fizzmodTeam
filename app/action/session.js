import axios from 'axios';
import { headers } from '../headers';

const startSession = (token) => {
  return {
    type: 'START_SESSION',
    token,
  };
};

const getSessionsId = (sessionId) => {
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

const boolean = (booleano) => {
  return {
    type: 'SET_BOOLEANO',
    booleano,
  };
};

const typeOrder = (string) => {
  return {
    type: 'SET_TYPE_OF_ORDER_SELECTED',
    string,
  };
};


export const setBooleano = (bool) => {
  return (dispatch) => {
    return dispatch(boolean(bool));
  };
};

export const estadoOrdenSelected = (string) => {
  return (dispatch) => {
    return dispatch(typeOrder(string));
  };
};

export const getStartSession = (id) => {
  return (dispatch) => {
    return axios
      .post(`https://picking.janis.in/api/session/${id}/start`, {}, headers())
      .then((res) => {
        return dispatch(startSession(res.data));
      });
  };
};

export const SessionId = (id) => {
  return (dispatch) => {
    return dispatch(getSessionsId(id));
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
