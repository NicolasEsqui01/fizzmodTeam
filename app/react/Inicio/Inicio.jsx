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
  Icos24,
} from './style';
import box from '../../images/24x24/box.svg';
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
      <Indicadores>
        <Icos24>
          <img src={box} alt="Caja" />
          <p>7</p>
          <p>X PICKER</p>
        </Icos24>
      </Indicadores>
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
