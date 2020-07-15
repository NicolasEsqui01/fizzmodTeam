import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import {FindingSessions} from '../../action/Orders'

const OrdersContainer = ({findingSessions, listSessions}) =>{

useEffect(()=>{
  
    findingSessions()
  
},[])


return(
<Orders 
  
  sessions = {listSessions}

/>)

};

const mapStateToProps = function (state, ownProps){

    return({

    listSessions: state.OrderReducer.sessions

    })

};

const mapDispatchToProps = function (dispatch, ownProps){
  
    return({

    findingSessions: ()=> {dispatch(FindingSessions())}

    })
    
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
