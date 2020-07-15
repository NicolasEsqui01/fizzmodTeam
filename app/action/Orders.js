import axios from 'axios'

const findSessions = (sessions)=>{
  return{
      type: 'TRAEME_LAS_SESSIONES',
      sessions
  }

}

const headers = {
  headers:{
      'Content-Type': 'application/json',
      'janis-api-key' : 'Bearer',
      'janis-api-secret' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDEwOTYsImlhdCI6MTU5NDgyODI5Nn0.iMIiWM0axLUrZbnhcrbnbHhX_lBLO-gocavequcZw7Y',
      'janis-client': 'plataforma5-2020'
  }
}

export const FindingSessions = ()=> dispatch =>{
   axios.get('/https://picking.janis.in/api/session', headers)
   .then((sessionsList)=> {
    console.log(sessionsList)   
    dispatch(findSessions(sessionsList))})

}