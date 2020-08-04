import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from './ConfirmacionCanasto';
import { setBooleano , setReiniciar} from '../../action/session';
import { itemPicked } from '../../action/picking';
import { itemFinalPick } from '../../action/picking';
import history from '../../utils/history'


const ConfirmacionContainer = ({idSession, setBooleano, sendItemPicked, location, sendFinal, reiniciar}) => {
  let datos = JSON.parse(localStorage.getItem('canasto'))
  const handleClick = () =>{
    setBooleano(false);
    sendItemPicked(location.state.idSession, location.state.data)
    .then(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('sessionid');
      localStorage.removeItem('final');
      localStorage.removeItem('canasto')
      sendFinal();
      reiniciar(false)

      return history.push('/inicio')
    })
  };
  return <ConfirmacionCanasto handleClick={handleClick} idSession={idSession} datosCanasto={datos}/>;
};

const mapStateToProps = (state) => {

  return{
    idSession: state.sessionReducer.sessionPicking,
  }

};

const mapDispatchToProps = (dispatch) => {

    return {
        sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
        setBooleano: (booleano) => dispatch(setBooleano(booleano)),
        sendFinal: () => dispatch(itemFinalPick()),
        reiniciar: (boolean) => dispatch(setReiniciar(boolean))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmacionContainer);
