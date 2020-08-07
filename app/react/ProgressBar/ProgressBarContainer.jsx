import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import ProgressBar from './ProgressBar'
import ProgressBarFinal from './ProgressBarFinal'
import { getSessionPicking } from '../../action/session';

const ProgressBarContainer = ({idSession, location, idItems})=>{
    let total
    let largo
   const [id ,setId] = useState(localStorage.getItem('sessionid')) 
   
    let porcentaje
    if(idSession.items){
     total = idSession.items.length
     largo = idSession.items.filter(Element => Element.status === 'picked' ).length
    }
    if(largo !== 0){
      porcentaje = (largo/total)*100 -5
    }
      
    useEffect(()=>{
        getSessionPicking(id)
    },[idItems])

    return(
    <>
    {location === '/confirmacion'?
    <ProgressBarFinal idSession={idSession}  Done={largo} Total ={total}/>
    :
    <ProgressBar idSession={idSession} Done={largo} Total ={total}/>
    }
    </>
    )
}

const mapStateToProps = (state) => {
    return {
      location: state.router.location.pathname,
      idSession: state.sessionReducer.sessionPicking,
      idItems: state.sessionReducer.idItems,
    
    }
}
const mapDispatchToProps =(dispatch)=>{

    return{
        getSessionPicking: (id) => dispatch(getSessionPicking(id)),
        sendItemPicked: (id, obj) => dispatch(itemPicked(id, obj)),
    }
}

export default connect(mapStateToProps ,mapDispatchToProps )(ProgressBarContainer)