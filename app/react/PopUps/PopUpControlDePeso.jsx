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

export default ({ pickeado, onClickClose }) => {
  return (
    <DIV8>
      <Color></Color>
      <Advertencia>
        <DivCC>
          <PPPP>Superaste el umbral de Peso</PPPP>
          <Peso>5 kg</Peso>
        </DivCC>
        <DivCC>
          <Siguiente
            onClick={() => {
              pickeado(session[indice].id, session[indice].purchasedQuantity);
            }}
          >
            {' '}
            CONTINUAR
          </Siguiente>{' '}
          <VolverAPesar onClick={() => onClickClose}>
            Volver a pesar
          </VolverAPesar>
        </DivCC>
      </Advertencia>
    </DIV8>
  );
};
