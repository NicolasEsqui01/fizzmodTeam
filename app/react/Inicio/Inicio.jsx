import React from 'react';
import {
  Container,
  LIzquierdo,
  LDerecho,
  Oval,
  Indicadores,
  Puntos,
  OvalInt,
  Pickers,
  Qty,
  Orders,
} from './style';

export default () => (
  <Container>
    <LIzquierdo>
      <Oval>
        <OvalInt>
          <Pickers>4 PICKERS</Pickers>
          <Qty>28</Qty>
          <Orders>ORDENES</Orders>
        </OvalInt>
      </Oval>
      <Indicadores></Indicadores>
      <Puntos></Puntos>
    </LIzquierdo>
    <LDerecho>Derecho</LDerecho>
  </Container>
);
