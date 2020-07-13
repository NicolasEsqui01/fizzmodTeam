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
  OrdeneHeader,
  ONuevas,
  PrePickeadas,
} from './style';
import OrdersContainer from '../Orders/OrdersContainer';

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
    <LDerecho>
      <OrdeneHeader>
        <ONuevas>ORDENES NUEVAS</ONuevas>
        <PrePickeadas>PRE-PRICKEADAS</PrePickeadas>
      </OrdeneHeader>

      <OrdersContainer />
    </LDerecho>
  </Container>
);
