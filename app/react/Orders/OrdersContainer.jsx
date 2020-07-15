import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import FindingSessions from '../../action/Orders'

const OrdersContainer = ({FindingSessions, listSessions}) =>{

useEffect(()=>{
  
    FindingSessions()
  
},[])

const

return(
<Orders 
  
  sessions = {listSessions}

/>)

};

const mapStateToProps = function (state, ownProps){

    return({

    listSessions: state.order.sessions

    })

};

const mapDispatchToProps = function (dispatch, ownProps){
  
    return({

    FindingSessions: ()=> {dispatch(FindingSessions())}

    })
    
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
