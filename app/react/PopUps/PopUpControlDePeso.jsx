import React from 'react';
import {
  DIV8,
  DivCC,
  Color,
  Advertencia,
  PPPP,
  Peso,
  Siguiente,
  VolverAPesar,
} from './style';

export default ({ pickeado, onClickClose, acum, principal, active }) => {
let numero = acum - principal
   return(
    acum > principal ? (
    <DIV8 active={active} >
      <Color></Color>
      <Advertencia>
        <DivCC>
          <PPPP>Superaste el umbral de Peso</PPPP>
          <Peso>{numero} kg</Peso>
        </DivCC>
        <DivCC>
          <VolverAPesar onClick={() => onClickClose()}>
            Volver a pesar
          </VolverAPesar>
          <Siguiente
            /* onClick={() => {
              pickeado(session[indice].id, session[indice].purchasedQuantity);
            }} */
          >
            {' '}
            CONTINUAR
          </Siguiente>{' '}
        </DivCC>
      </Advertencia>
    </DIV8>) :
    acum === principal?(
     <DIV8>
     <Color></Color>
     <Advertencia>
       <DivCC>
         <PPPP>Te faltan</PPPP>
         <Peso>{numero} kg</Peso>
         <PPPP>para llegar al peso indicado</PPPP>
       </DivCC>
       <DivCC>
         <VolverAPesar onClick={() => onClickClose()}>
           Volver a pesar
         </VolverAPesar>
         <Siguiente
           /* onClick={() => {
             pickeado(session[indice].id, session[indice].purchasedQuantity);
           }} */
         >
           {' '}
           CONTINUAR
         </Siguiente>{' '}
       </DivCC>
     </Advertencia>
   </DIV8>):null)
 
};
