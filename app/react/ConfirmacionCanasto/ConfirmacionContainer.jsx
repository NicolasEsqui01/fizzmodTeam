import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from './ConfirmacionCanasto';
import { setBooleano } from '../../action/session';
import { itemPicked } from '../../action/picking';
import history from '../../utils/history'


const ConfirmacionContainer = ({idSession, setBooleano, sendItemPicked, location}) => {
  const handleClick = () =>{
    setBooleano(false);
    sendItemPicked(location.state.idSession, location.state.data)
    .then(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('sessionid');
      return history.push('/inicio')
    })
  };

  return <ConfirmacionCanasto handleClick={handleClick} idSession={idSession}/>;
};

const mapStateToProps = (state) => {
 
  return{

    idSession: state.sessionReducer.sessionPicking,
  }

};

const mapDispatchToProps = (dispatch) => {
    return {
        sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
        setBooleano: (booleano) => dispatch(setBooleano(booleano))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmacionContainer);
