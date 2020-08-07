import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import { Redirect } from 'react-router-dom';

import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => {
  console.log("state.sessionReducer.sessionPicking.items NAVBAR", state.sessionReducer.sessionPicking.items)
  return {
    items: state.sessionReducer.sessionPicking.items,
    booleano: state.sessionReducer.booleano,
    sessionId: localStorage.getItem('sessionid'),
    final: localStorage.getItem('final'),
  };
};

const NavbarContainer = ({ time, status, booleano, items, sessionId, location, final }) => {

  const [pickeados, setPickeados] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const volverDelFinal = () => {
    if(final) localStorage.removeItem('final');
    history.goBack();
  }

  useEffect(() => {
    let pickeds=0;
    if(items && items.length > 0){
        console.log("estoy dentro del MAP de navbar con", items)
        setTotalItems(items.length);
        items.map((item)=>item.status === "picked" ? (pickeds=pickeds+1) : (null))
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
    />
  );
};

export default connect(mapStateToProps)(NavbarContainer);
