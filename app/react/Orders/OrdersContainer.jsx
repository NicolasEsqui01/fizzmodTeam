import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import {fetchSessions} from '../../action/inicio'

const OrdersContainer = ({ findingSessions , listSessions, permiso, status}) =>{

 useEffect(()=>{
  
    findingSessions()
  
},[status]) 


return(
<Orders 
  sessions = {listSessions}
  permiso = {permiso}
  status= {status}

/>)

};

const mapStateToProps = function (state, ownProps){
    console.log(state.inicioReducer.status)
    return({
    listSessions: state.inicioReducer.sessions,
    permiso : state.inicioReducer.permiso,
    status: state.inicioReducer.status
    })

};

const mapDispatchToProps = function (dispatch, ownProps){
  
    return({

     findingSessions: ()=> {dispatch(fetchSessions())} 

    })
    
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
