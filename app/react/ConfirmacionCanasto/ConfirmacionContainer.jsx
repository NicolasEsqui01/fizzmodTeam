import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from './ConfirmacionCanasto';
import { setBooleano , setReiniciar} from '../../action/session';
import { itemPicked } from '../../action/picking';
import { itemFinalPick } from '../../action/picking';
import history from '../../utils/history'


<<<<<<< HEAD
const ConfirmacionContainer = ({idSession, setBooleano, sendItemPicked, location, sendFinal, reiniciar}) => {

=======
const ConfirmacionContainer = ({idSession, setBooleano, sendItemPicked, location, sendFinal, reiniciar}) => {
  let datos = JSON.parse(localStorage.getItem('canasto'))
>>>>>>> 0b8bf13a9e63e4f6a4da5e859d3f2e43c8fb926f
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
