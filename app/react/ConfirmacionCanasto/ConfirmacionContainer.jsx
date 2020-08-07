import React from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from './ConfirmacionCanasto';
import { setBooleano , setReiniciar} from '../../action/session';
import { itemPicked } from '../../action/picking';
import { setFinalSession } from '../../action/session';
import { itemFinalPick } from '../../action/picking';
import history from '../../utils/history'

const ConfirmacionContainer = ({idSession, setBooleano, sendItemPicked, location, sendFinal, setFinalSession, reiniciar}) => {
  
  let datos = localStorage.getItem('canasto') &&JSON.parse(localStorage.getItem('canasto'))
  const handleClick = () =>{
    setBooleano(false);
    sendItemPicked(location.state.idSession, location.state.data)
    .then(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('sessionid');
      localStorage.removeItem('final');
      localStorage.removeItem('cronometro')
      localStorage.removeItem('canasto')
      localStorage.removeItem('cuadradoChico');
      localStorage.removeItem('cuadradoGrande');
      if (localStorage.getItem('substitutes'))localStorage.removeItem('substitutes');
      if (localStorage.getItem('withSubstitute'))localStorage.removeItem('withSubstitute');
      sendFinal();
      setFinalSession();
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
        setFinalSession: () => dispatch(setFinalSession()),
        reiniciar: (boolean) => dispatch(setReiniciar(boolean))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmacionContainer);