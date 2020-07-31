import React, { useState, useEffect } from 'react';
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
import { getSessionPicking } from '../../action/session';
import history from '../../utils/history';

const PopUpContainer = ({
  active,
  handleCloseClick,
  Activar,
  sendItemPicked,
  idSession,
  idItems,
  getSessionPicking
}) => {
  const [battery, setBattery] = useState(null);
  const [cerrar, setCerrar] = useState(true);
  const handleBtnClick = (n) => {
    Activar(n);
  };
  const [id ,setId] = useState(localStorage.getItem('sessionid'))

  useEffect(() =>{
    getSessionPicking(id)
  }, [idSession])

  const closeAlerts = () => {
    setCerrar(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth', 'sessionid');
    return history.push('/');
  };

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
      <PopUpInfoPicker active={active} onCloseClick={handleCloseClick} />
      <PopUpObservacion
        active={active}
        onCloseClick={handleCloseClick}
        idSession={idSession}
        idItems={idItems}
      />
      <PopUpSustitucion active={active} onCloseClick={handleCloseClick} />
      <PopUpServiciosExtras active={active} onCloseClick={handleCloseClick} />
      <PopUpOpciones
        active={active}
        Activar={handleBtnClick}
        onCloseClick={handleCloseClick}
        handleLogout={handleLogout}
      />
      <PopUpControlDePeso
        pickeado={ItemPicked}
        onCloseClick={handleCloseClick}
      />
    </>
  );
};

const mapStateToProps = (state, ownProp) => {
  return {
    active: state.popupReducer.numero,
    idSession: state.sessionReducer.sessionPicking,
    idItems: state.sessionReducer.idItems,
  };
};

const mapDispatchToProps = (dispatch, ownProp) => {
  return {
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUpContainer);
