import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import { Redirect } from 'react-router-dom';

import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.sessionReducer.sessionPicking.items,
    itemsPicking: state.pickingReducer.ItemsPicked,
    booleano: state.sessionReducer.booleano,
    sessionId: localStorage.getItem('sessionid'),
    final: localStorage.getItem('final'),
  };
};

const NavbarContainer = ({ time, status, booleano, items, itemsPicking, sessionId, location, final }) => {

  const [pickeados, setPickeados] = useState(0);

  const volverDelFinal = () => {
    if(final) localStorage.removeItem('final');
    history.goBack();
  }

  useEffect(() => {
    if (itemsPicking != undefined) {
      setPickeados(itemsPicking.length);
    }
  }, [itemsPicking]);

  return (
    <Navbar
      qtyPicked={pickeados}
      items={items}
      time={time}
      status={status}
      booleano={booleano}
      sessionId={sessionId}
      final={final}
      volverDelFinal={volverDelFinal}
    />
  );
};

export default connect(mapStateToProps, null)(NavbarContainer);
