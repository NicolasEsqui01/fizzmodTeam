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
  OrdenHeader,
  OrdenFooter,
  ONuevas,
  PrePickeadas,
  Icos24,
  ImgH,
  DivJ,
  DivP,
  Button,
} from './style';
import box from '../../images/24x24/box.svg';
import slashBox from '../../images/24x24/box_slash.svg';
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
      <OrdenHeader>
        <DivJ>
          <ImgH src={box} />
          <ONuevas>ORDENES NUEVAS</ONuevas>
        </DivJ>
        <DivP>
          <ImgH src={slashBox} />
          <PrePickeadas>PRE-PRICKEADAS</PrePickeadas>
        </DivP>
      </OrdenHeader>

      <OrdersContainer />

      <OrdenFooter>
        <Button>Comenzar</Button>
      </OrdenFooter>
    </LDerecho>
  </Container>
);
