import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSessions } from "../../action/inicio";

const mapStateToProps = (state, ownProps) => {
  return {
    sessionId: state.loginReducer.user,  //VERIFICAR NOMBRE DEL ESTADO
    session: state.inicioReducer.sessions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 	return {
 		getSessions: () => dispatch(fetchSessions()),
 	}
};

const InicioContainer = ({sessionId, session, getSessions}) => {

	useEffect(()=>{
		getSessions()
	},[])

	return (
		<Inicio session={session}></Inicio>
		)
};


export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

