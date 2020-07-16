import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import Inicio from './Inicio';
import { fetchSessions, DamePermiso ,ChangePending, ChangePicked  /* fetchSessionsPicked */} from "../../action/inicio";


const mapStateToProps = (state, ownProps) => {
	
  return {
    sessionId: state.loginReducer.user,  //VERIFICAR NOMBRE DEL ESTADO
	session: state.inicioReducer.sessions,
	
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
 	return {
		 getSessions: () => dispatch(fetchSessions()),
		 getPermiso: () => dispatch(DamePermiso()),
	     sessionsPending: ()=> dispatch(ChangePending()),
		 sessionsPicked: ()=>dispatch(ChangePicked()), 
 	}
};

const InicioContainer = ({sessionId, session, getSessions, getPermiso, sessionsPending, sessionsPicked }) => {


	const [status, setStatus] = useState('pending')

	useEffect(()=>{
		getSessions()
	},[])

	const setPermiso = ()=>{
      
	  getPermiso()
	  
	}
	 const setPending = ()=>{
      console.log('estamos aqui')
		sessionsPending()
	}

	const setPicked = ()=>{
		console.log('ESTAMOS AQUI')
		sessionsPicked()
		
	}
	 

	return (
		<Inicio
		 session={session}
		 cambio={setPermiso}
		 status={status}
		 getSessionPicked ={setPicked}
		 getSessionPending ={setPending}  
		 ></Inicio>
		)
};


export default connect(mapStateToProps, mapDispatchToProps)(InicioContainer);

