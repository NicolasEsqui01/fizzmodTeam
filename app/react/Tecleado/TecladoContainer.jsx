/* import React from 'react'
import { connect } from 'react-redux';
import { InfoInput } from '../../action/tecleado'
import Teclado from './Teclado'


const TecladoContainer = ({contenido, Informacion})=>{

const Info = (event)=>{
let texto = event.target.value
  Informacion(texto)
  this.keyboard.setInput(texto);
}
 return(
 <Teclado
  input={contenido}
  onChangeInfo={Info}
 />
 )
}
const mapStateToProps = (state, ownProps) => {

   return{
       contenido: state.tecladoReducer.input
   }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    Informacion: (info)=> dispatch(InfoInput(info))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TecladoContainer) */