import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import {
  fetchSessions,
  DamePermiso,
  fetchPickers,
  ChangePending,
  ChangePickedAndPicking,
} from '../../action/inicio';
import { Redirect } from 'react-router-dom';
import { setDatosUser as DatosUser } from '../../action/login'
import { getStartSession } from '../../action/session'
import history from '../../utils/history'
import Navbar from '../Navbar/NavbarContainer';

const mapStateToProps = (state, ownProps) => {
  console.log("ESTADO: ", state)
  return {
    sessionId: state.sessionReducer.sessionId, // Me trae el id de la session
    totalSessions: state.inicioReducer.totalSessions,
    totalPendings: state.inicioReducer.totalSessionsPending,
    totalPickeds: state.inicioReducer.totalSessionsPicked,
    totalPickings: state.inicioReducer.totalSessionsPicking,
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
    sessionsPending: (totalSessions) => dispatch(ChangePending(totalSessions)),
    sessionsPickedAndPicking: (totalSessions) => dispatch(ChangePickedAndPicking(totalSessions)),
    setDatosUser: () => dispatch(DatosUser()),
    getStartSession : (id) => dispatch(getStartSession(id)),
  };
};

const InicioContainer = ({
  sessionId,
  session,
  totalSessions,
  totalPendings,
  totalPickeds,
  totalPickings,
  getPickers,
  pickers,
  getSessions,
  sessionsPending,
  sessionsPickedAndPicking,
  status,
  auth,
  setDatosUser,
  getStartSession,
}) => {
  useEffect(() => {
    if(auth !== 'null'){
      getSessions()
      getPickers();
      setDatosUser();
    }
  }, []);

  useEffect(() => {
      setPending()  
  }, [totalSessions]);

  const handleClickSession = () => {
    getStartSession(sessionId).then(() =>{
      history.push(`/productoindividual/${sessionId}`)
    });
  };

  const setPending = () => {
    console.log("TOTAL SESSIONES DENTRO DEL SET PENDING : ", totalSessions)
    sessionsPending(totalSessions);
  };

  const setPicked = () => {
    sessionsPickedAndPicking(totalSessions);
  };

  return (
    <>
      {auth === 'null' ? (
        <Redirect to="/" />
      ) : (
        <>
        <Inicio
          pickers={pickers}
          sessions={totalSessions}
          totalPending={totalPendings}
          totalPicked={totalPickeds}
          totalPicking={totalPickings}
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
