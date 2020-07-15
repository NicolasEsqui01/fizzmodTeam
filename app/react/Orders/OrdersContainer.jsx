import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import {fetchSessions} from '../../action/inicio'

const OrdersContainer = ({/* findingSessions , */listSessions}) =>{

/* useEffect(()=>{
  
    findingSessions()
  
},[]) */


return(
<Orders 
  
  sessions = {listSessions}

/>)

};

const mapStateToProps = function (state, ownProps){

    return({

    listSessions: state.inicioReducer.sessions

    })

};

const mapDispatchToProps = function (dispatch, ownProps){
  
    return({

  /*   findingSessions: ()=> {dispatch(fetchSessions())} */

    })
    
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
