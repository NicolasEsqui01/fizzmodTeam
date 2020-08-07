import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import { Desactivacion, Activacion } from '../../action/popup';
import { getSessionPicking } from '../../action/session';
import { Redirect } from 'react-router-dom';

import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.sessionReducer.sessionPicking.items,
    booleano: state.sessionReducer.booleano,
    sessionId: localStorage.getItem('sessionid'),
    final: localStorage.getItem('final'),
    active: state.popupReducer.numero,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
  };
};

const NavbarContainer = ({
  time,
  status,
  booleano,
  items,
  itemsPicking,
  sessionId,
  location,
  final,
  active,
  handleCloseClick,
  Activar,
}) => {

  const [pickeados, setPickeados] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const volverDelFinal = () => {
    if (final) localStorage.removeItem('final');
    history.goBack();
  }

  useEffect(() => {
    let pickeds = 0;
    if (items && items.length > 0) {
      setTotalItems(items.length);
      items.map((item) => item.status === "picked" ? (pickeds = pickeds + 1) : (null))
      setPickeados(pickeds);
    }
  }, [items]);

  return (
    <Navbar
      qtyPicked={pickeados}
      totalItems={totalItems}
      time={time}
      status={status}
      booleano={booleano}
      sessionId={sessionId}
      final={final}
      volverDelFinal={volverDelFinal}
      active={active}
      Activar={Activar}
      handleCloseClick={handleCloseClick}
    />
  );
};

export default connect(mapStateToProps,MapDispatchToProps)(NavbarContainer);
