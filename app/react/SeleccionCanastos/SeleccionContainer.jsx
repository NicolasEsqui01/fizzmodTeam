import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SeleccionCanastos from './SeleccionCanastos';
import { getStartSession, getSessionPicking } from '../../action/session';
import history from '../../utils/history';

const SeleccionContainer = ({
  getStartSession,
  getSessionPicking,
  session,
  auth,
}) => {
  const [value, setValue] = useState('');
  const [nameCanasto, setNameCanasto] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
  });
  const [activar, setActivar] = useState(0);
  const [canasto, setCanasto] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [cuadros, setCuadros] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [boolean, setBoolean] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  let idSession = localStorage.getItem('sessionid');

  useEffect(() => {
    let objLocal = JSON.parse(localStorage.getItem('canasto'));
    if (
      localStorage.getItem('cuadradoChico') &&
      localStorage.getItem('cuadradoGrande') &&
      localStorage.getItem('canasto')
    ) {
      setCuadros(
        localStorage
          .getItem('cuadradoChico')
          .split(',')
          .map((Element) => (Element === 'true' ? true : false)),
      );
      setCanasto(
        localStorage
          .getItem('cuadradoGrande')
          .split(',')
          .map((Element) => (Element === 'true' ? true : false)),
      );
      setNameCanasto(objLocal.nameCanasto);
    }
  }, []);

  useEffect(() => {
    if (auth !== 'null') {
      getSessionPicking(idSession);
    }
  }, []);

  const handleClick = (id) => {
    setValue(id);
    setCantidad(cantidad);
    setTimeout(() => {
      setActivar(1);
    }, 2000);
  };

  const handleClickSalir = () => {
    setActivar(0);
  };

  const handleChange = (event) => {
    switch (Number(event.target.name)) {
      case 1:
        return setNameCanasto({ ...nameCanasto, 1: event.target.value });
      case 2:
        return setNameCanasto({ ...nameCanasto, 2: event.target.value });
      case 3:
        return setNameCanasto({ ...nameCanasto, 3: event.target.value });
      case 4:
        return setNameCanasto({ ...nameCanasto, 4: event.target.value });
      case 5:
        return setNameCanasto({ ...nameCanasto, 5: event.target.value });
      case 6:
        return setNameCanasto({ ...nameCanasto, 6: event.target.value });
    }
  };

  const handleSubmit = (event, indice) => {
    event.preventDefault();
    if (event.target[0].value !== '') {
      setActivar(0);
      event.target[0].value = '';
    }
    const nuevoCuadrado = cuadros.map((Element, i) =>
      i === indice ? true : Element,
    );
    const nuevoCanasto = canasto.map((Element, i) =>
      i === indice ? true : Element,
    );
    setCanasto(nuevoCanasto);
    setCuadros(nuevoCuadrado);
    setBoolean(true);
  };

  const handleStartSession = () => {
    localStorage.setItem('canasto', JSON.stringify({ nameCanasto, value }));
    localStorage.setItem('cuadradoGrande', canasto);
    localStorage.setItem('cuadradoChico', cuadros);
    getStartSession(idSession).then(() => {
      return history.push({
        pathname: `/productoindividual/${idSession}/1`,
      });
    });
  };

  return (
    <>
      {auth === 'null' ? (
        <Redirect to="/" />
      ) : (
        <SeleccionCanastos
          handleClick={handleClick}
          valor={value}
          handleSubmit={handleSubmit}
          activar={activar}
          handleClickSalir={handleClickSalir}
          handleStartSession={handleStartSession}
          datosCanasto={nameCanasto}
          canastos={canasto}
          cuadrados={cuadros}
          handleChange={handleChange}
          ordenSession={session}
          booleano={boolean}
          cantidadOrders={cantidad}
        />
      )}
    </>
  );
};
const MapStateToProps = (state) => {
  return {
    session: state.sessionReducer.sessionPicking.orderIds,
    auth: JSON.stringify(localStorage.getItem('auth')),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getStartSession: (id) => dispatch(getStartSession(id)),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
  };
};
export default connect(MapStateToProps, mapDispatchToProps)(SeleccionContainer);