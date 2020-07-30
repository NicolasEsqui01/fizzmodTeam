import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from './ConfirmacionCanasto';
import { setBooleano } from '../../action/session';
import { itemPicked } from '../../action/picking';
import history from '../../utils/history'


const ConfirmacionContainer = (props) => {
  const handleClick = () =>{
    props.setBooleano(false);
    props.sendItemPicked(props.location.state.idSession,props.location.state.data)
    .then(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('sessionid');
      return history.push('/inicio')
    })
  };

  return <ConfirmacionCanasto handleClick={handleClick}/>;
};

const MapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => {
    return {
        sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
        setBooleano: (booleano) => dispatch(setBooleano(booleano))
    }
};

export default connect(null, mapDispatchToProps)(ConfirmacionContainer);
