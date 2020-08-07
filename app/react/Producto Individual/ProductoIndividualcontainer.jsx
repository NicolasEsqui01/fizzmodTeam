import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import ProductoIndividual from './ProductoIndividual';
import { itemPicked, itemPending } from '../../action/picking';
import { Desactivacion, Activacion } from '../../action/popup';
import { getSessionPicking, setBooleano, setIdItems, setItems, setDespickear } from '../../action/session';
import history from '../../utils/history';
import { Redirect } from 'react-router-dom';

const ProductoIndividualcontainer = ({
  items = [],
  idSession,
  getSessionPicking,
  sendItemPicked,
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
  location
}) => {
  const [indice, setIndice] = useState(match.params.indice);
  const [count, setCount] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState(0);
  const [pesoTotal, setPesoTotal] = useState(0);
  const [wheights, setWheights] = useState([]);
  const [arrayOmitidos, setArrayOmitidos] = useState([]);
  const inputRef = useRef(null);
  const date = JSON.parse(localStorage.getItem('canasto'))
  
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
    if (showInput) inputRef.current.focus();
  }, [showInput]);

  useEffect(() => {
    
  }, [arrayOmitidos]);

  useEffect(() => {
    if (inputRef.current && input != 0) inputRef.current.value = "";
  }, [wheights]);

  const handleBtnClick = (n) => {
    Activar(n);
  };

  const itemPending = (id) => { //FALTA ATAJAR SI ES EL ULTIMO
    const newSession = items.filter(element => {
      return element.id !== id
    })
    const productId = items.filter(element => element.id === id)
    var newArray = [...newSession, ...productId]
    var newIndice = Number(indice);
    setArrayOmitidos(newArray)
    handleCloseClick()
    setItems(newArray)
    setWheights([]);
    setPesoTotal(0);
    setCount(0)
    if (bolleanDespickear === true && booleanReiniciar === false)
      {
        despickear(false)
      }
    if (localStorage.getItem('substitutes'))localStorage.removeItem('substitutes');
    if (localStorage.getItem('withSubstitute')== true )localStorage.setItem('withSubstitute', false);
    return history.push(`/productoindividual/${idSession}/${newIndice}`)
  };

  const itemFaltante = (id) => {
    let data = {
        token: token,
        items: [
          {
            id: id,
            pickedQuantity: 0,
          },
        ],
    }
    //CHEQUEA SI ES EL ULTIMO ITEM DE LA LISTA, PARA PASAR A LA PAGINA DE CONFIRMACION FINAL
    if (Number(indice) === items.length) {
      localStorage.setItem('final', true);
      history.push({ //UTILIZA HISTORY PARA ENVIARLE A LA PAG DE CONFIRMACION LOS DATOS CONTRUIDOS Y TERMINAR EL PICKEO DESDE ALLI
        pathname: '/confirmacion',
        state: { idSession: idSession, data: data, datosCanasto: date },
      });
      if (bolleanDespickear==true)despickear(false);
    } else { //SI NO ES EL ULTIMO, DISPARA EL ACTION CREATOR PARA PICKEAR EL ITEM
      sendItemPicked(idSession, data)
        .then(() => {
          let newIndice = Number(indice) + 1;
          setWheights([]);
          setPesoTotal(0);
          if (bolleanDespickear === true && booleanReiniciar === false){
            despickear(false)
          }
          getSessionPicking(idSession);
          if (localStorage.getItem('substitutes'))localStorage.removeItem('substitutes');
          if (localStorage.getItem('withSubstitute')== true )localStorage.setItem('withSubstitute', false);
          return history.push(`/productoindividual/${idSession}/${newIndice}`);
        })
        .then(() => setCount(0));
    }
    handleCloseClick()
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
      history.push(`/productoindividual/${idSession}/${newIndice}`)
    };
  }

  const ItemPicked = (iditems, qty, pesable) => {
    let data = {};
    // CHEQUEA SI SE ACTIVO EN LOCALSTORAGE LA ALARMA DE ITEM SUSTITUIDO
    let objSubs = JSON.parse(localStorage.getItem('withSubstitute'))
    //CONSTRUCCION DEL OBJETO PESABLE SIN SUSTITUTO, PARA ENVIAR AL BACKEND
    if (pesable == true && objSubs == false) {
      let dataPesable = {
        token: token,
        items: [
          {
            id: iditems,
            pickedQuantity: pesoTotal,
            basket: date.nameCanasto[data.value + 1]
          },
        ],
      };
      data = dataPesable;
    }
    //CONSTRUCCION DEL OBJETO PESABLE CON SUSTITUTO, PARA ENVIAR AL BACKEND
    if (pesable == true && objSubs == true) {
      let objSubs = localStorage.getItem('substitutes')
      let dataNoPesable = {
        token: token,
        items: [
          {
            id: iditems,
            pickedQuantity: pesoTotal,
            basket:date.nameCanasto[data.value + 1],
            substitutes: objSubs,
          },
        ],
      };
      data = dataNoPesable;
    }
    //CONSTRUCCION DEL OBJETO SUELTO CON SUSTITUTO, PARA ENVIAR AL BACKEND
    if (pesable == false && objSubs == true) {
      let objSubs = localStorage.getItem('substitutes')
      let dataWithSubs = {
        token: token,
        items: [
          {
            id: iditems,
            pickedQuantity: qty,
            basket:date.nameCanasto[data.value + 1],
            substitutes: objSubs
          },
        ],
      };
      data = dataWithSubs;
    }
    //CONSTRUCCION DEL OBJETO SUELTO CON SUSTITUTO, PARA ENVIAR AL BACKEND
    if (pesable == false && objSubs == false) {
      let dataNoPesable = {
        token: token,
        items: [
          {
            id: iditems,
            pickedQuantity: qty,
            basket: date.nameCanasto[data.value + 1]
          },
        ],
      };
      data = dataNoPesable;
    }

    //CHEQUEA SI ES EL ULTIMO ITEM DE LA LISTA, PARA PASAR A LA PAGINA DE CONFIRMACION FINAL
    if (Number(indice) === items.length) {
      localStorage.setItem('final', true);
      history.push({ //UTILIZA HISTORY PARA ENVIARLE A LA PAG DE CONFIRMACION LOS DATOS CONTRUIDOS Y TERMINAR EL PICKEO DESDE ALLI
        pathname: '/confirmacion',
        state: { idSession: idSession, data: data, datosCanasto: date },
      });
      if (bolleanDespickear==true)despickear(false);
    } else { //SI NO ES EL ULTIMO, DISPARA EL ACTION CREATOR PARA PICKEAR EL ITEM
      sendItemPicked(idSession, data)
        .then(() => {
          getSessionPicking(idSession)
          .then((res)=>{
            if (arrayOmitidos.length) {
              for (let i=0; i<arrayOmitidos.length ; i++){
                for (let j=0; j<res.session.items.length ; j++){
                  if (arrayOmitidos[i].id === res.session.items[j].id) {
                    arrayOmitidos[i].pickedQuantity = res.session.items[j].pickedQuantity
                    arrayOmitidos[i].status = res.session.items[j].status
                  }
                }
              }
            setItems(arrayOmitidos)
            }
          });
        })
        .then(() => {
          setCount(0)
          let newIndice = Number(indice) + 1;
          setWheights([]);
          setPesoTotal(0);
          if (bolleanDespickear === true && booleanReiniciar === false){
            despickear(false)
          }
          if (localStorage.getItem('substitutes'))localStorage.removeItem('substitutes');
          if (localStorage.getItem('withSubstitute')== true )localStorage.setItem('withSubstitute', false);
          return history.push(`/productoindividual/${idSession}/${newIndice}`);
        });
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
    setPesoTotal(pesoTotal + input)
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
          Faltente={itemFaltante}
          active={active}
          onCloseClick={handleCloseClick}
          session={items}
          pickeado={ItemPicked}
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
          location={location}
        />
      ) : null}
    </>
  );
};

const MapStateToProps = (state, ownProps) => {
  console.log("state", state)
  return {
    idSession: ownProps.match.params.id, // id de la sesssion
    token: localStorage.getItem('token'), // token de la session cuando inicia el picking
    items: state.sessionReducer.sessionPicking.items, // los items de la session
    active: state.popupReducer.numero,
    auth: JSON.stringify(localStorage.getItem('auth')),
    idItems: state.sessionReducer.idItems,
    bolleanDespickear: state.sessionReducer.despickear,
    booleanReiniciar: state.sessionReducer.reiniciar,

  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
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
)(ProductoIndividualcontainer);
