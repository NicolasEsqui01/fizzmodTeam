import React, { useEffect , useState} from 'react';
import Session from './Session';
import { connect } from 'react-redux';
import { getSessionPicking , setBooleano} from '../../action/session';

const SessionConteiner = ({getSessionPicking , idSession , setBooleano}) => {

  const [id ,setId] = useState(localStorage.getItem('sessionid'))

  useEffect(() =>{
    getSessionPicking(id)
    setBooleano(true)
  }, [])


  return <Session Idsession={idSession}/>;
};

const mapStateToProps = (state) => {
  return {
    idSession:state.sessionReducer.sessionPicking
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSessionPicking: (id) => dispatch(getSessionPicking(id)),
    setBooleano : (booleano ) => dispatch(setBooleano(booleano))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionConteiner);

