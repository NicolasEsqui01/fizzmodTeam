import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSessions, DamePermiso ,fetchPickers, ChangePending, ChangePicked } from "../../action/inicio";

	t mapStateToProps = (state, ownProps) => {
	
  return {
    sessionId: state.loginReducer.user,  //VERIFICAR NOMBRE DEL ESTADO
    session: state.inicioReducer.sessions,
    pickers: state.inicioReducer.pickers,
	status: state.inicioReducer.status
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 	return {
		 getSessions: () => dispatch(fetchSessions()),
		 getPickers: () => dispatch(fetchPickers()),
		 getPermiso: () => dispatch(DamePermiso()),
	     sessionsPending: ()=> dispatch(ChangePending()),
		 sessionsPicked: ()=>dispatch(ChangePicked()), 
 	}
};

const InicioContainer = ({sessionId, session, getPickers, pickers, getSessions, getPermiso, sessionsPending, sessionsPicked, status }) => {

	useEffect(()=>{
		getSessions();
		getPickers();
	},[])

	const setPermiso = ()=>{
	  getPermiso()
	}

	const setPending = ()=>{
		sessionsPending()
	}

	const setPicked = ()=>{
		sessionsPicked()
	}

	return (
		<Inicio
		 pickers={pickers}
		 sessions={session}
		 cambio={setPermiso}
		 status={status}
		 getSessionPicked ={setPicked}
		 getSessionPending ={setPending}  
		 ></Inicio>
		)
};

export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

