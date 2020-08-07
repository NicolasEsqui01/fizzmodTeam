import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import ProductoIndividual from '../Producto Individual/ProductoIndividual';
import { itemPending, itemParaSustituir } from '../../action/picking';
import { Desactivacion, Activacion } from '../../action/popup';
import {
  getSessionPicking,
  setBooleano,
  setIdItems,
  setItems,
  setDespickear,
} from '../../action/session';
import history from '../../utils/history';
import { Redirect } from 'react-router-dom';

const SustitucionContainer = ({
  idSession,
  getSessionPicking,
  token,
  Activar,
  active,
  handleCloseClick,
  setBooleano,
  match,
  auth,
  setIdItems,
  idItems,
  setItems,
  bolleanDespickear,
  booleanReiniciar,
  despickear,
  items,
  sustitutionQty,
}) => {
  const [indice, setIndice] = useState(match.params.indice);
  const [count, setCount] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState(0);
  const [pesoTotal, setPesoTotal] = useState(0);
  const [wheights, setWheights] = useState([]);
  const inputRef = useRef(null);
  const [sustituyendo, setSustituyendo] = useState(false);
  const date = JSON.parse(localStorage.getItem('canasto'));

  useEffect(() => {
    if (auth !== 'null') {
      getSessionPicking(idSession);
      setBooleano(true);
    }
  }, []);

  useEffect(() => {
    setIndice(match.params.indice);
    if (items.length) {
      setIdItems(items[match.params.indice - 1].id);
    }
  }, [match.params.indice, items.length]);

  useEffect(() => {
    setSustituyendo(JSON.parse(localStorage.getItem('withSubstitute')));
  }, [localStorage.getItem('withSubstitute')]);

  useEffect(() => {
    if (showInput) inputRef.current.focus();
  }, [showInput]);

  useEffect(() => {
    if (inputRef.current && input != 0) inputRef.current.value = '';
  }, [wheights]);

  const handleBtnClick = (n) => {
    Activar(n);
  };

  const itemPending = (id) => {
    const newSession = items.filter((element) => {
      return element.id !== id;
    });
    const productId = items.filter((element) => element.id === id);
    let newArray = [...newSession, ...productId];
    let newIndice = Number(indice) + 1;
    handleCloseClick();
    setItems(newArray);
    return history.push(`/sustitutos/${idSession}/${newIndice}`);
  };

  const next = () => {
    if (Number(indice) === items.length) {
      localStorage.setItem('final', true);
      history.push({
        pathname: '/confirmacion',
        state: { idSession: idSession, data: null },
      });
    } else {
      let newIndice = Number(indice) + 1;
      history.push(`/sustitutos/${idSession}/${newIndice}`);
    }
  };

  const ItemPrePicked = (iditems, qty, pesable) => {
    let data = {};
    if (pesable == true) {
      let dataPesable = {
        items: {
          id: iditems,
          pickedQuantity: pesoTotal,
          basket: date.nameCanasto[data.value + 1],
        },
      };
      data = dataPesable;

      let itemsConfirmed = [
        ...items.map((item) => {
          if (item.id === iditems) {
            const field = { ...item };
            field.pickedQuantity = pesoTotal;
            return field;
          } else return item;
        }),
      ];
      sustitutionQty(itemsConfirmed);
    } else {
      let dataNoPesable = {
        items: {
          id: iditems,
          pickedQuantity: qty,
          basket: date.nameCanasto[data.value + 1],
        },
      };
      data = dataNoPesable;
      let itemsConfirmed = [
        ...items.map((item) => {
          if (item.id === iditems) {
            const field = { ...item };
            field.pickedQuantity = qty;
            return field;
          } else return item;
        }),
      ];
      sustitutionQty(itemsConfirmed);
    }
    setWheights([]);
    setPesoTotal(0);
    setCount(0);
    if (localStorage.getItem('substitutes')){
      localStorage.removeItem('substitutes');
    }
    if (localStorage.getItem('withSubstitute') == true){
      localStorage.setItem('withSubstitute', false);
    }
    if(Number(indice) === items.length){
      let url = localStorage.getItem('pikingLibre')
      return history.push(url)
    }else{
      let newIndice = Number(indice) + 1;
      return history.push(`/sustitutos/${idSession}/${newIndice}`);
    }
  };

  const handleChange = (event) => {
    setInput(Number(event.target.value));
  };

  const handleSubmit = (event, id, name, ean, image) => {
    event.preventDefault();
    const itemPesable = {
      id: id,
      name: name,
      ean: ean,
      img: image,
      qty: input,
    };
    setPesoTotal(pesoTotal + input);
    setWheights([...wheights, itemPesable]);
  };

  const handleRemoveItem = (idx) => {
    if (idx > -1) {
      let restarPeso = wheights[idx].qty;
      wheights.splice(idx, 1);
      setWheights([...wheights]);
      let nuevoPeso = pesoTotal - restarPeso;
      setPesoTotal(nuevoPeso);
    }
    if (wheights.length == 0) handleCloseClick();
  };

  return (
    <>
      {auth === 'null' ? (
        <Redirect to="/" />
      ) : items ? (
        <ProductoIndividual
          Activar={handleBtnClick}
          Pending={itemPending}
          active={active}
          onCloseClick={handleCloseClick}
          session={items}
          prepickear={ItemPrePicked}
          next={next}
          indice={indice - 1}
          count={count}
          setCount={setCount}
          showInput={showInput}
          setShowInput={setShowInput}
          inputRef={inputRef}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          wheights={wheights}
          pesoTotal={pesoTotal}
          handleRemoveItem={handleRemoveItem}
          date={date}
          pesoTotal={pesoTotal}
          despickear={bolleanDespickear}
          sustituyendo={sustituyendo}
        />
      ) : null}
    </>
  );
};

const MapStateToProps = (state, ownProps) => {
  return {
    idSession: localStorage.getItem('sessionid'),
    token: localStorage.getItem('token'), // token de la session cuando inicia el picking
    active: state.popupReducer.numero,
    auth: JSON.stringify(localStorage.getItem('auth')),
    idItems: state.sessionReducer.idItems,
    bolleanDespickear: state.sessionReducer.despickear,
    booleanReiniciar: state.sessionReducer.reiniciar,
    items: state.pickingReducer.ItemsParaSustituir,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    sustitutionQty: (obj) => dispatch(itemParaSustituir(obj)),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
    setBooleano: (boolean) => dispatch(setBooleano(boolean)),
    setIdItems: (id) => dispatch(setIdItems(id)),
    setItems: (arrayProducts) => dispatch(setItems(arrayProducts)),
    despickear: (boolean) => dispatch(setDespickear(boolean)),
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps,
)(SustitucionContainer);
