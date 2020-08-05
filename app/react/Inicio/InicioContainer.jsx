import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import {
  fetchSessions,
  fetchPickers,
  ChangePending,
  ChangePicking,
} from '../../action/inicio';
import { Redirect } from 'react-router-dom';
import { setDatosUser as DatosUser } from '../../action/login';
import { getStartSession, setBooleano } from '../../action/session';
import history from '../../utils/history';

const mapStateToProps = (state) => {
  return {
    sessionId: state.sessionReducer.sessionId, 
    totalSessions: state.inicioReducer.totalSessions,
    totalPendings: state.inicioReducer.totalSessionsPending,
    totalPickings: state.inicioReducer.totalSessionsPicking,
    datosPicker: state.loginReducer.datos,
    status: state.inicioReducer.status,
    statusOrderSelected: state.sessionReducer.statusOrderSelected,
    auth: JSON.stringify(localStorage.getItem('auth')),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSessions: () => dispatch(fetchSessions()),
    sessionsPending: () => dispatch(ChangePending()),
    sessionsPicking: () => dispatch(ChangePicking()),
    setDatosUser: () => dispatch(DatosUser()),
    setBooleano: (booleano) => dispatch(setBooleano(booleano)),
  };
};

const InicioContainer = ({
  sessionId,
  session,
  totalSessions,
  totalPendings,
  totalPickings,
  statusOrderSelected,
  datosPicker,
  pickers,
  getSessions,
  sessionsPending,
  sessionsPicking,
  status,
  auth,
  setDatosUser,
  setBooleano,
}) => {
  useEffect(() => {
    if (auth !== 'null') {
      getSessions();
      setDatosUser();
    }
  }, []);

  const handleClickSession = () => {
    localStorage.setItem('sessionid', sessionId);
    setBooleano(true)
    return history.push('/seleccion')
  };

  const setPending = () => {
    sessionsPending();
  };

  const setPicking = () => {
    sessionsPicking();
  };

  return (
    <>
      {auth === 'null' ? (
        <Redirect to="/" />
      ) : (
        <>
          <Inicio
            picker={datosPicker}
            sessions={totalSessions}
            totalPending={totalPendings}
            totalPicking={totalPickings}
            handleClickSession={handleClickSession}
            status={status}
            statusOrderSelected={statusOrderSelected}
            getSessionPicking={setPicking}
            getSessionPending={setPending}
          ></Inicio>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);
