import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Desactivacion, Activacion } from '../../action/popup';
import PopUpObservacion from './PopUpObservacion';
import PopUpSustitucion from './PopUpSustitucion';
import PopUpOpciones from './PopUpOpciones';
import PopUpOrden from './PopUpOrden';
import PopUpServiciosExtras from './PopUpServiciosExtras';
import PopUpInfoPicker from './PopUpInfoPicker';
import PopUpControlDePeso from './PopUpControlDePeso';
import PopUpBaterry from './PopUpBaterry';
import {
  getSessionPicking,
  setDespickear,
  setReiniciar,
} from '../../action/session';
import history from '../../utils/history';
import { itemPicked } from '../../action/picking';

const PopUpContainer = ({
  active,
  handleCloseClick,
  Activar,
  idSession,
  idItems,
  despickear,
  datosPicker,
}) => {
  const [battery, setBattery] = useState(null);
  const [cerrar, setCerrar] = useState(true);

  const handleBtnClick = (n) => {
    Activar(n);
  };
  const [id, setId] = useState(localStorage.getItem('sessionid'));

  const closeAlerts = () => {
    setCerrar(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth', 'sessionid');
    return history.push('/');
  };
  const handleCanastos = () => {
    return history.push('/seleccion');
  };

  const reinicio = () => {
    despickear(true);
    return history.push(`/productoindividual/${idSession.id}/1`);
  };

  async function getBattery() {
    let battery = await navigator.getBattery();
    let charge = battery.level;
    setBattery(charge);
  }
  setInterval(() => {
    getBattery();
  }, 300000);

  if (battery < 0.2 && battery > 0.18) {
    setCerrar(true);
  }

  return (
    <>
      <PopUpBaterry
        Bateria={battery}
        onCloseClick={handleCloseClick}
        closeAlert={closeAlerts}
        cerrar={cerrar}
      />

      <PopUpOrden
        active={active}
        Activar={handleBtnClick}
        onCloseClick={handleCloseClick}
        idSession={idSession}
        idItems={idItems}
      />
      <PopUpInfoPicker
        active={active}
        onCloseClick={handleCloseClick}
        datosPicker={datosPicker}
      />
      <PopUpObservacion
        active={active}
        onCloseClick={handleCloseClick}
        idSession={idSession}
        idItems={idItems}
      />
      <PopUpSustitucion active={active} onCloseClick={handleCloseClick} />
      <PopUpServiciosExtras active={active} onCloseClick={handleCloseClick} />
      <PopUpOpciones
        idSession={idSession}
        active={active}
        Activar={handleBtnClick}
        onCloseClick={handleCloseClick}
        handleLogout={handleLogout}
        handleCanastos={handleCanastos}
        despickear={despickear}
        reiniciar={reinicio}
      />
      <PopUpControlDePeso onCloseClick={handleCloseClick} />
    </>
  );
};

const mapStateToProps = (state, ownProp) => {
  return {
    token: localStorage.getItem('token'),
    active: state.popupReducer.numero,
    idSession: state.sessionReducer.sessionPicking,
    idItems: state.sessionReducer.idItems,
    datosPicker: state.loginReducer.datos,
  };
};

const mapDispatchToProps = (dispatch, ownProp) => {
  return {
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
    despickear: (boolean) => dispatch(setDespickear(boolean)),
    reiniciar: (boolean) => dispatch(setReiniciar(boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUpContainer);
