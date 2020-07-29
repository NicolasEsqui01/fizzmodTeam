import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from './ConfirmacionCanasto';
import { setBooleano } from '../../action/session';
import history from '../../utils/history'


const ConfirmacionContainer = ({setBooleano}) => {

  const handleClick = () =>{
    setBooleano(false);
    localStorage.removeItem('token');
    localStorage.removeItem('sessionid');
    return history.push('/inicio')
  };

  return <ConfirmacionCanasto handleClick={handleClick}/>;
};

const MapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
    return {
        setBooleano: (booleano) => dispatch(setBooleano(booleano))
    }
};

export default connect(null, mapDispatchToProps)(ConfirmacionContainer);
