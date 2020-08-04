import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../utils/history';
import { Redirect } from 'react-router-dom';
import { getSessionPicking } from '../../action/session';

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

const MapDispatchToProps = (dispatch) => {
  return {
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
  };
};

const NavbarContainer = ({ time, status, booleano, items, itemsPicking, sessionId, location, final }) => {

  const [pickeados, setPickeados] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const volverDelFinal = () => {
    if(final) localStorage.removeItem('final');
    history.goBack();
  }

  useEffect(() => {
    let pickeds=0;
    if(items && items.length > 0){
        setTotalItems(items.length);
        items.map((item)=>item.status === "picked" ? (pickeds=pickeds+1) : (null))
        setPickeados(pickeds);
    }
  }, [items]);


  // useEffect(() => {
  //   // if (itemsPicking != undefined) {
  //   //   setPickeados(itemsPicking.length);
  //   // }
  //   // if(items && items.length > 0){
  //   //   let pickeds=0;
  //   //   items.map((item)=>item.satuts === "picked" ? pickeds+1 : null)
  //   //   setPickeados(pickeds);
  //   // }
  //   getSessionPicking(sessionId)
  // }, [itemsPicking]);

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

export default connect(mapStateToProps, MapDispatchToProps)(NavbarContainer);
