import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSessions } from "../../action/inicio";
import { fetchPickers } from "../../action/inicio";

const mapStateToProps = (state, ownProps) => {
  return {
    sessionId: state.loginReducer.user,  //VERIFICAR NOMBRE DEL ESTADO
    session: state.inicioReducer.sessions,
    pickers: state.inicioReducer.pickers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 	return {
 		getSessions: () => dispatch(fetchSessions()),
 		getPickers: () => dispatch(fetchPickers()),
 	}
};

const InicioContainer = ({getPickers, pickers, session, getSessions}) => {

	useEffect(()=>{
		getSessions();
		getPickers();
	},[])

	return (
		<Inicio sessions={session} pickers={pickers}></Inicio>
		)
};


export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

