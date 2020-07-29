import React from 'react'

import {
  DIV7,
  Color,
  DivV,
  DivCXL,
  ImgM,
  ImgX,
  TituloOb,
  ButtonX,
  PPP,
  DivControl,
  DivExit,
  ImgP,
  Abajo,
  DivText,
  DivText2,
} from './style'
import X from '../../images/cross_light.svg'
import user from '../../images/user_opened.svg';
import totals from '../../images/totals.svg'
import catalogo from '../../images/catalogue.svg'
import exit from '../../images/arrow_alt_from_left.svg'
import store from '../../images/store.svg';

export default ({active, onCloseClick})=>{

  const Prueba = [1,2,3,4]

    return(
     <>
    <DIV7 active={active}>
        <Color></Color>
        <DivV>
          <DivCXL>
            <ImgM src={user} />
            <TituloOb> Nicolas Esquivel </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivCXL>
       <DivControl>
         <ImgP src={totals}/>
         <DivText>
         <PPP>ASDGSDFHSFHSGFHDFGH</PPP>
         <Abajo>Code 123</Abajo>
         </DivText>
       </DivControl>

       <DivControl>
       <ImgP src={catalogo}/>
       <DivText>
       <PPP>ASDGSDFHSFHSGFHDFGH</PPP>
       <Abajo>Legado</Abajo>
       </DivText>
        </DivControl>
      
        <DivControl>
        <ImgP src={store}/>
        <DivText2>
       <PPP>ASDGSDFHSFHSGFHDFGH</PPP>
       <Abajo>Tienda</Abajo>
       </DivText2>
        </DivControl>
        
        <DivExit>
          <ImgP src={exit}/>
          <PPP> Cerrar Sesion</PPP>
        </DivExit>

        </DivV>
      </DIV7>
      </>
    )
}