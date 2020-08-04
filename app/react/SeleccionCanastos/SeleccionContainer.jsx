import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SeleccionCanastos from './SeleccionCanastos';
import { getStartSession } from '../../action/session';
import history from '../../utils/history';

const SeleccionContainer = ({ getStartSession }) => {
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

  const handleClick = (id) => {
    setValue(id);
    setBoolean(!boolean);
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
    setCuadros(nuevoCuadrado)
  };

  const handleStartSession = () => {
    let idSession = localStorage.getItem('sessionid');
    localStorage.setItem('canasto' , JSON.stringify({nameCanasto , value}))
    getStartSession(idSession).then(() => {
      return history.push({
        pathname: `/productoindividual/${idSession}/1`, 
      });
    });
  };

  return (
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
    />
  );
};

const MapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStartSession: (id) => dispatch(getStartSession(id)),
  };
};

export default connect(MapStateToProps, mapDispatchToProps)(SeleccionContainer);
