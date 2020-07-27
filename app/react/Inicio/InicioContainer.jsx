import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import {
  fetchSessions,
  DamePermiso,
  fetchPickers,
  ChangePending,
  ChangePicked,
} from '../../action/inicio';
import { Redirect } from 'react-router-dom';
import { setDatosUser as DatosUser } from '../../action/login'
import { getStartSession , setBooleano } from '../../action/session'
import history from '../../utils/history'

const mapStateToProps = (state) => {
  return {
    sessionId: state.sessionReducer.sessionId, // Me trae el id de la session
    session: state.inicioReducer.sessions,
    pickers: state.inicioReducer.pickers,
    status: state.inicioReducer.status,
    auth: JSON.stringify(localStorage.getItem('auth')),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSessions: () => dispatch(fetchSessions()),
    getPickers: () => dispatch(fetchPickers()),
    getPermiso: () => dispatch(DamePermiso()),
    sessionsPending: () => dispatch(ChangePending()),
    sessionsPicked: () => dispatch(ChangePicked()),
    setDatosUser: () => dispatch(DatosUser()),
    getStartSession : (id) => dispatch(getStartSession(id)),
    setBooleano: (booleano) => dispatch(setBooleano(booleano))
  };
};

const InicioContainer = ({
  sessionId,
  session,
  getPickers,
  pickers,
  getSessions,
  sessionsPending,
  sessionsPicked,
  status,
  auth,
  setDatosUser,
  getStartSession,
  setBooleano
}) => {
  useEffect(() => {
    if(auth !== 'null'){
      getSessions();
      getPickers();
      setDatosUser();
    }
  }, []);

  const handleClickSession = () => {
    getStartSession(sessionId).then(() =>{
      setBooleano(true)
      return history.push(`/productoindividual/${sessionId}/1`)
    });
  };

  const setPending = () => {
    sessionsPending();
  };

  const setPicked = () => {
    sessionsPicked();
  };

  return (
    <>
      {auth === 'null' ? (
        <Redirect to="/" />
      ) : (
        <>
        <Inicio
          pickers={pickers}
          sessions={session}
          handleClickSession={handleClickSession}
          status={status}
          getSessionPicked={setPicked}
          getSessionPending={setPending}
        ></Inicio>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);
