import axios from 'axios'

const findSessions = (sessions)=>{
  return{
      type: 'TRAEME_LAS_SESSIONES',
      sessions
  }

}

export const FindingSessions = ()=> dispatch =>{
   axios.get('/https://picking.janis.in/api/session')
   .then((sessionsList)=> {
    console.log(sessionsList)   
    dispatch(findSessions(sessionsList))})

}