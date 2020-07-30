import React , {useState , useEffect} from 'react';
import { connect } from 'react-redux';
import { Desactivacion, Activacion } from '../../action/popup';
import PopUpObservacion from './PopUpObservacion';
import PopUpSustitucion from './PopUpSustitucion';
import PopUpOpciones from './PopUpOpciones';
import PopUpOrden from './PopUpOrden';
import PopUpServiciosExtras from './PopUpServiciosExtras';
import PopUpInfoPicker from './PopUpInfoPicker';
import { getSessionPicking } from '../../action/session'
import history from '../../utils/history'

const PopUpContainer = ({ active, handleCloseClick, Activar , idSession , idItems}) => {

  const [idsession , setIdsession] = useState(localStorage.getItem('sessionid'))

  const handleBtnClick = (n) => {
    Activar(n);
  };

  useEffect(() =>{
      getSessionPicking(idsession);
  },[])

  const handleLogout = () =>{
      localStorage.removeItem('auth', 'sessionid')
      return history.push('/')
  };


  return (
    <>  
      <PopUpOrden
        active={active}
        Activar={handleBtnClick}
        onCloseClick={handleCloseClick}
        idSession={idSession}
      />
      <PopUpInfoPicker active={active} onCloseClick={handleCloseClick} />
      <PopUpObservacion active={active} onCloseClick={handleCloseClick} idSession={idSession} idItems={idItems}/>
      <PopUpSustitucion active={active} onCloseClick={handleCloseClick} />
      <PopUpServiciosExtras active={active} onCloseClick={handleCloseClick} />
      <PopUpOpciones
        active={active}
        Activar={handleBtnClick}
        onCloseClick={handleCloseClick}
        handleLogout={handleLogout}
      />
    </>
  );
};

const mapStateToProps = (state, ownProp) => {
  return {
    active: state.popupReducer.numero,
    idSession: state.sessionReducer.sessionPicking,
    idItems:state.sessionReducer.idItems
  };
};

const mapDispatchToProps = (dispatch, ownProp) => {
  return {
    Activar: (n) => dispatch(Activacion(n)),
    handleCloseClick: () => dispatch(Desactivacion()),
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUpContainer);
