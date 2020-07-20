import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import {fetchSessions, DamePermiso} from '../../action/inicio'

const OrdersContainer = ({ findingSessions , listSessions, permiso, status,  getPermiso}) =>{

 useEffect(()=>{
  
    findingSessions()
  
},[status]) 

const setPermiso = ()=>{
      
    getPermiso()
    
  }


return(
<Orders 
  sessions = {listSessions}
  permiso = {permiso}
  status= {status}
  cambio={setPermiso}
/>)

};

const mapStateToProps = function (state, ownProps){
    console.log(state.inicioReducer.permiso)
    return({
    listSessions: state.inicioReducer.sessions,
    permiso : state.inicioReducer.permiso,
    status: state.inicioReducer.status,
   
    })

};

const mapDispatchToProps = function (dispatch, ownProps){
  
    return({

     findingSessions: ()=> dispatch(fetchSessions()), 
     getPermiso: () => dispatch(DamePermiso()),

    })
    
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
