import React from 'react'
import {connect} from 'react-redux'
import { Desactivacion, Activacion } from '../../action/popup'
import PopUpObservacion from './PopUpObservacion'
import PopUpSustitucion from './PopUpSustitucion'
import PopUpOpciones from './PopUpOpciones'
import PopUpPesables from './PopUpPesables'
import PopUpOrden from './PopUpOrden'


const PopUpContainer = ({active, handleCloseClick, Activar})=>{

      const handleBtnClick = (n) => {
            Activar(n)
          };
        
 
return(
    

      <>
  <PopUpOrden
          active={active}
          Activar={handleBtnClick}
          onCloseClick={handleCloseClick}
    />
    <PopUpObservacion
          active={active}
          onCloseClick={handleCloseClick}
    />
     <PopUpSustitucion
          active={active}
          onCloseClick={handleCloseClick}
    />
    <PopUpOpciones
          active={active}
          Activar={handleBtnClick}
          onCloseClick={handleCloseClick}
    />
 </> 

)

}

const mapStateToProps = (state, ownProp)=>{
  return{
      active: state.popupReducer.numero
  }

}

const mapDispatchToProps = (dispatch, ownProp)=>{
   return { 
   Activar: (n) => dispatch(Activacion(n)),
   handleCloseClick:()=>(dispatch(Desactivacion()))   }
}

export default connect(mapStateToProps,mapDispatchToProps)(PopUpContainer)