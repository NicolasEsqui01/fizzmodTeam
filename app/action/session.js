import axios from 'axios';
import { headers } from '../headers';

const startSession = (token) =>{
    return {
        type:"START_SESSION",
        token
    };
};

const getSessionsId = (sessionId) =>{
    return {
      type:"GET_SESSIONID",
      sessionId
    };
};



export const getStartSession = (id) => { 
    return dispatch =>{
        return axios.post(`https://picking.janis.in/api/session/${id}/start`, {} , headers())
        .then(res => {
            return dispatch(startSession(res.data))
        })  
    };
};


export const SessionId = (id) => {
    return dispatch => {
        return axios.get(`https://picking.janis.in/api/session/${id}` , headers())
        .then(res => {
            return dispatch(getSessionsId(res.data))
        })
    }
};


