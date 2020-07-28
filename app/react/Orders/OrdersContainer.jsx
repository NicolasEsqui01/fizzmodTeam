import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import { SessionId, estadoOrdenSelected } from '../../action/session'

const OrdersContainer = ({
  pendingSessions,
  pickedAndPickingSessiones,
  status,
  SessionId,
  typeOrder
}) => {
  const [value, setValue] = useState('')

  const handleClick = (id, estado) => {
    setValue(id)
    SessionId(id)
    typeOrder(estado)
  };

  return <Orders pendSessions={pendingSessions} pickedAndPikcingSessions={pickedAndPickingSessiones} handleClick={handleClick} valor={value} status={status}/>;
};

const mapStateToProps = function (state, ownProps) {
  return {
    pendingSessions: state.inicioReducer.sessionsPending,
    pickedAndPickingSessiones:state.inicioReducer.sessionsPickedAndPicking,
    status: state.inicioReducer.status,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    findingSessions: () => {
      dispatch(fetchSessions());
    },
    SessionId: (id) => dispatch(SessionId(id)),
    typeOrder: (type)=>dispatch(estadoOrdenSelected(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
