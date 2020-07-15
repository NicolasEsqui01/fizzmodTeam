import React from 'react';
import Carousel from 'react-elastic-carousel';
import {
  Container,
  InicioA,
  LDerecho,
  Oval,
  Indicadores,
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
  PNames,
  PNumbers,
  Logos,
} from './style';
import box from '../../images/box.svg';
import slashBox from '../../images/box_slash.svg';
import OrdersContainer from '../Orders/OrdersContainer';
import boxGreen from '../../images/boxGreen.svg';
import clockRed from '../../images/clock-red.svg';
import triangleWhite from '../../images/triangle_circle_white.svg';
import '../common/styles/main.scss';

export default () => (
  <Container>
    <Carousel
      className="sliderInicio"
      isRTL
      itemsToShow={1}
      transitionMs={500}
      showArrows={false}
      focusOnSelect
    >
      <InicioA>
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
      </InicioA>
      <InicioA>
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
      </InicioA>
    </Carousel>
    <hr></hr>
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
