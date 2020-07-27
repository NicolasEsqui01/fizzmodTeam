import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductoIndividual from './ProductoIndividual';
import { itemPicked } from '../../action/picking';
import { getSessionPicking, setBooleano } from '../../action/session';
import history from '../../utils/history';

const ProductoIndividualcontainer = ({
  items,
  idSession,
  getSessionPicking,
  sendItemPicked,
  token,
  setBooleano,
  match,
}) => {
  const [indice, setIndice] = useState(match.params.indice);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const handleBtnClick = (n) => {
    setActive(n);
  };

  const handleCloseClick = () => {
    setActive(0);
  };

  useEffect(() => {
    getSessionPicking(idSession);
    setBooleano(true);
  }, []);

  useEffect(() => {
    setIndice(match.params.indice);
  }, [match.params.indice]);

  const ItemPicked = (iditems, qty) => {
    const data = {
      token: token,
      items: [
        {
          id: iditems,
          pickedQuantity: qty,
        },
      ],
    };

    if (Number(indice) === items.length) {
      setBooleano(false);
      localStorage.removeItem('token');
      return history.push('/inicio');
    } else {
      sendItemPicked(idSession, data).then(() => {
        let newIndice = Number(indice) + 1;
        return history.push(`/productoindividual/${idSession}/${newIndice}`);
      });
    }
  };

  return (
    <>
      {items ? (
        <ProductoIndividual
          Activar={handleBtnClick}
          active={active}
          onCloseClick={handleCloseClick}
          session={items}
          pickeado={ItemPicked}
          indice={indice - 1}
          count={count}
          setCount={setCount}
        />
      ) : null}
    </>
  );
};

const MapStateToProps = (state, ownProps) => {
  return {
    idSession: ownProps.match.params.id, // id de la sesssion
    token: localStorage.getItem('token'), // token de la session cuando inicia el picking
    items: state.sessionReducer.sessionPicking.items, // los items de la session
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    setBooleano: (boolean) => dispatch(setBooleano(boolean)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(ProductoIndividualcontainer);
