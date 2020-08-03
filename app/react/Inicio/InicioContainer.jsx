import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import {
  fetchSessions,
  fetchPickers,
  ChangePending,
  ChangePickedAndPicking,
} from '../../action/inicio';
import { Redirect } from 'react-router-dom';
import { setDatosUser as DatosUser } from '../../action/login';
import { getStartSession, setBooleano } from '../../action/session';
import history from '../../utils/history';

const mapStateToProps = (state) => {
  return {
    sessionId: state.sessionReducer.sessionId, // Me trae el id de la session
    totalSessions: state.inicioReducer.totalSessions,
    totalPendings: state.inicioReducer.totalSessionsPending,
    totalPickeds: state.inicioReducer.totalSessionsPicked,
    totalPickings: state.inicioReducer.totalSessionsPicking,
    pickers: state.inicioReducer.pickers,
    status: state.inicioReducer.status,
    statusOrderSelected: state.sessionReducer.statusOrderSelected,
    auth: JSON.stringify(localStorage.getItem('auth')),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSessions: () => dispatch(fetchSessions()),
    getPickers: () => dispatch(fetchPickers()),
    sessionsPending: (totalSessions) => dispatch(ChangePending(totalSessions)),
    sessionsPickedAndPicking: (totalSessions) =>
      dispatch(ChangePickedAndPicking(totalSessions)),
    setDatosUser: () => dispatch(DatosUser()),
    getStartSession: (id) => dispatch(getStartSession(id)),
    setBooleano: (booleano) => dispatch(setBooleano(booleano)),
  };
};

const InicioContainer = ({
  sessionId,
  session,
  totalSessions,
  totalPendings,
  totalPickeds,
  totalPickings,
  statusOrderSelected,
  getPickers,
  pickers,
  getSessions,
  sessionsPending,
  sessionsPickedAndPicking,
  status,
  auth,
  setDatosUser,
  getStartSession,
  setBooleano,
}) => {
  useEffect(() => {
    if (auth !== 'null') {
      getSessions();
      getPickers();
      setDatosUser();
    }
  }, []);

  useEffect(() => {
    if (totalSessions !== 0) {
      setPending(totalSessions);
    }
  }, [totalSessions]);

  useEffect(() => {
    if (statusOrderSelected == 'picking') setOkBoton('picking');
    if (statusOrderSelected == 'pending') setOkBoton('pending');
    if (statusOrderSelected == 'picked') setOkBoton('picked');
  }, [statusOrderSelected]);

  const [okBoton, setOkBoton] = useState('');

  const handleClickSession = () => {
    getStartSession(sessionId).then(() => {
      localStorage.setItem('sessionid', sessionId);
      setBooleano(true);
      return history.push(`/productoindividual/${sessionId}/1`);
    });
  };

  const setPending = () => {
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
            statusOrderSelected={statusOrderSelected}
            okBoton={okBoton}
            getSessionPicked={setPicked}
            getSessionPending={setPending}
          ></Inicio>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);
