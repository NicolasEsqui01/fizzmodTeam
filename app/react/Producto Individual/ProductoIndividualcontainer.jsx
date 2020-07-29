import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductoIndividual from './ProductoIndividual';
import { itemPicked } from '../../action/picking';
import { Desactivacion, Activacion } from '../../action/popup';
import { getSessionPicking, setBooleano } from '../../action/session';
import history from '../../utils/history';

const ProductoIndividualcontainer = ({
  items,
  idSession,
  getSessionPicking,
  sendItemPicked,
  token,
  Activar,
  active,
  handleCloseClick,
  setBooleano,
  match,
}) => {
  const [indice, setIndice] = useState(match.params.indice);
  const [count, setCount] = useState(0);

  const handleBtnClick = (n) => {
    Activar(n);
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
      return history.push('/confirmacion');
    } else {
      sendItemPicked(idSession, data)
        .then(() => {
          let newIndice = Number(indice) + 1;
          return history.push(`/productoindividual/${idSession}/${newIndice}`);
        })
        .then(() => setCount(0));
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
    active: state.popupReducer.numero,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
    setBooleano: (boolean) => dispatch(setBooleano(boolean)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(ProductoIndividualcontainer);
