import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  console.log("items",state.sessionReducer.sessionPicking.items)
  console.log("itemsPicking",state.pickingReducer.ItemsPicked)
  return {
    items: state.sessionReducer.sessionPicking.items,
    itemsPicking: state.pickingReducer.ItemsPicked,
    booleano: state.sessionReducer.booleano,
    sessionId: localStorage.getItem('sessionid'),
  };
};

const NavbarContainer = ({ time, status, booleano, items, itemsPicking, sessionId }) => {

  const [pickeados, setPickeados] = useState(0);

  useEffect(() => {
    if (items != undefined) {
      items.find((item) => {
        if (item.status == 'picked') {
          setPickeados(pickeados+1);
        }
      });
    }
  }, [itemsPicking]);

  useEffect(() => {
    return () => {
      console.log("pickeados", pickeados);
    };
  }, []);

  return (
    <Navbar
      qtyPicked={pickeados}
      items={items}
      time={time}
      status={status}
      booleano={booleano}
      sessionId={sessionId}
    />
  );
};

export default connect(mapStateToProps, null)(NavbarContainer);
