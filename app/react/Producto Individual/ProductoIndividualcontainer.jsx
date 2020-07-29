import React, { useEffect, useState, useRef } from 'react';
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
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState(0);
  const [wheights, setWheights] = useState([]);

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

  const inputRef = useRef(null);

  useEffect(() => {
    if(showInput == true)
    inputRef.current.focus();
  }, [showInput]);

  useEffect(() => {
    if(input!=0) inputRef.current.value="";
  }, [wheights]);

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

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event, id, name, ean, image) => {
    event.preventDefault();
    const itemPesable={
      id: id,
      name: name,
      ean: ean,
      img: image,
      qty: input
    }
    setWheights([...wheights,itemPesable])
  };

  const handleRemoveItem = (idx) => {
    if (idx > -1) {
    wheights.splice(idx,1)
    setWheights([...wheights]);
    console.log("wheights OK", wheights)
  }};

  console.log("CHEQUEANDO ", wheights)

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
          showInput={showInput}
          setShowInput={setShowInput}
          inputRef={inputRef}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          wheights={wheights}
          handleRemoveItem={handleRemoveItem}
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
