import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  return {
    items: state.sessionReducer.sessionPicking.items,
    booleano: state.sessionReducer.booleano,
  };
};

const NavbarContainer = ({ time, status, booleano, items }) => {
  const [itemsPicked, setItemsPicked] = useState(0);

  useEffect(() => {
    if (items) {
      let contador = 0;
      items.find((item) => {
        if (item.status == 'picked') {
          contador++;
        }
      });
      setItemsPicked(contador);
    }
  }, [items]);

  return (
    <Navbar
      qty={itemsPicked}
      time={time}
      status={status}
      booleano={booleano}
      items={items}
    />
  );
};

export default connect(mapStateToProps, null)(NavbarContainer);
