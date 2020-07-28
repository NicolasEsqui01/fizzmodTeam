import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductoIndividual from './ProductoIndividual';
import { itemPicked } from '../../action/picking';
import { getSessionPicking } from '../../action/session';
import { Desactivacion, Activacion } from '../../action/popup'
import history from '../../utils/history';


const ProductoIndividualcontainer = ({
  items,
  idSession,
  getSessionPicking,
  sendItemPicked,
  sendToNavItemsPicked,
  token,
  Activar,
  active,
  handleCloseClick,
}) => {
  const [indice, setIndice] = useState(0);
  const [status, setStatus] = useState(0);
  const [count, setCount] = useState(0);
 

  const handleBtnClick = (n) => {
    Activar(n)
  };

  useEffect(() => {
    getSessionPicking(idSession);
  }, []);

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
    sendItemPicked(idSession, data).then(() => {
      if (indice + 1 < items.length) {
        return setIndice(indice + 1);
      } else {
        stop();
        return history.push('/inicio');
      }
    });
  };

  return (
    <>
      <ProductoIndividual
        Activar={handleBtnClick}
        active={active}
        onCloseClick={handleCloseClick}
        session={items}
        pickeado={ItemPicked}
        indice={indice}
        count={count}
        setCount={setCount}
      />
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
    handleCloseClick:()=>(dispatch(Desactivacion()))   }
  };


export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(ProductoIndividualcontainer);
