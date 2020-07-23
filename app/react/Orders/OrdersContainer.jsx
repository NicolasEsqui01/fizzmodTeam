import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';
import { fetchSessions } from '../../action/inicio';
import { SessionId } from '../../action/session'

const OrdersContainer = ({
  findingSessions,
  listSessions,
  status,
  SessionId
}) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    findingSessions();
  }, [status]);

  const handleClick = (id) => {
    setValue(id)
    SessionId(id)
  };


  return <Orders sessions={listSessions} status={status} handleClick={handleClick} valor={value} />;
};

const mapStateToProps = function (state, ownProps) {
  return {
    listSessions: state.inicioReducer.sessions,
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
