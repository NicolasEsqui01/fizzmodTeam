import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import { ChangePending, ChangePickedAndPicking } from '../../action/inicio';
import { SessionId } from '../../action/session'

const OrdersContainer = ({
  ChangePending,
  pickedAndPickingSessions,
  pendingSessions,
  status,
  SessionId
}) => {
  const [value, setValue] = useState('')

  const handleClick = (id) => {
    setValue(id)
    SessionId(id)
  };

  return <Orders pendSessions={pendingSessions} pickedAndPikcingSessions={pickedAndPickingSessions} handleClick={handleClick} valor={value} status={status} />;
};

const mapStateToProps = function (state, ownProps) {
  return {
    pendingSessions: state.inicioReducer.sessionsPending,
    pickedAndPickingSessions:state.inicioReducer.sessionsPickedAndPicking,
    status: state.inicioReducer.status,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    findingSessions: () => {
      dispatch(fetchSessions());
    },
    SessionId: (id) => dispatch(SessionId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
