import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSessions } from "../../action/inicio";

const mapStateToProps = (state, ownProps) => {
console.log("ESTADO: ", state)
  return {
    sessionId: state.loginReducer.auth,  //VERIFICAR NOMBRE DEL ESTADO
    session: state.inicioReducer.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 	return {
 		getSessionById: (id) => dispatch(fetchSessions(id)),
 	}
};

const InicioContainer = ({sessionId, session, getSessionById}) => {

	// useEffect(()=>{
	// 	getSessionById(sessionId)
	// },[])

	return (
		<Inicio session={session}></Inicio>
		)
};


export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

