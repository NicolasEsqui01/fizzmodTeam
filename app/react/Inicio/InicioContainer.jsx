import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSession } from "../../action/inicio";

const mapStateToProps = (state, ownProps) => {
  return {
    sessionId: state.login.id,  //VERIFICAR NOMBRE DEL ESTADO
    session: state.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
 	getSessionById: (id) => dispatch(fetchSession(id)),
});


const InicioContainer = ({sessionId, session, getSessionById}) => {

	useEffect(()=>{
		getSessionById(sessionId)
	},[])

	return (
		<Inicio session={session}></Inicio>
		)
};






export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

