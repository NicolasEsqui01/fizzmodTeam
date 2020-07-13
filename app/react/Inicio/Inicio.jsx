import React from 'react';
import {
  Container,
  LIzquierdo,
  LDerecho,
  Oval,
  Indicadores,
  OvalInt,
  Pickers,
  Qty,
  Orders,
  Icos24,
  PNames,
  PNumbers,
  Logos,
} from './style';
import boxGreen from '../../images/boxGreen.svg';
import clockRed from '../../images/clock-red.svg';
import triangleWhite from '../../images/triangle_circle_white.svg';

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
          <Logos src={boxGreen} />
          <PNumbers>7</PNumbers>
          <PNames>X PICKER</PNames>
        </Icos24>
        <Icos24>
          <Logos src={clockRed} />
          <PNumbers>7</PNumbers>
          <PNames>X ORDEN</PNames>
        </Icos24>
        <Icos24>
          <Logos src={triangleWhite} />
          <PNumbers>7</PNumbers>
          <PNames>X ORDEN</PNames>
        </Icos24>
      </Indicadores>
    </LIzquierdo>

    <LDerecho>Derecho</LDerecho>
  </Container>
);
