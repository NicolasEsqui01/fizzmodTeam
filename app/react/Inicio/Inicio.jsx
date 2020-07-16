import React from 'react';
import Carousel from 'react-elastic-carousel';
import {
  Container,
  InicioA,
  InicioB,
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
  Icos24Hor,
  PNames,
  PNumbers,
  Logos,
  LogoStad,
  LogoUser,
  ContUser,
  SubTitle,
  Item,
  Time,
  Percentage,
  EstadTiempo,
  Line,
  ContNumGreen,
  ContNumRed
} from './style';
import box from '../../images/box.svg';
import slashBox from '../../images/box_slash.svg';
import OrdersContainer from '../Orders/OrdersContainer';
import boxGreen from '../../images/boxGreen.svg';
import down from '../../images/chevron_downWhite.svg';
import up from '../../images/chevron_upWhite.svg';
import clockWhite from '../../images/clockWhite.svg';
import squareWhite from '../../images/square_chart_line.svg';
import user from '../../images/user_closed.svg';
import clockRed from '../../images/clock-red.svg';
import triangleWhite from '../../images/triangle_circle_white.svg';
import '../common/styles/main.scss';

export default ({session, cambio, getSessionPending, getSessionPicked  , status}) => {

  return (
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
            <Logos src={boxGreen} alt="box"/>
            <PNumbers>7</PNumbers>
            <PNames>X PICKER</PNames>
          </Icos24>
          <Icos24>
            <Logos src={clockRed} alt="clock"/>
            <PNumbers>7</PNumbers>
            <PNames>X ORDEN</PNames>
          </Icos24>
          <Icos24>
            <Logos src={triangleWhite} alt="triangle"/>
            <PNumbers>7</PNumbers>
            <PNames>X ORDEN</PNames>
          </Icos24>
        </Indicadores>
      </InicioA>
      <InicioB>
        <SubTitle>MIS ESTADÍSTICAS</SubTitle>
        <ContUser>
          <LogoUser src={user} alt="user"/>
        </ContUser>
        <EstadTiempo>
          <Icos24Hor>
            <Logos src={clockWhite} alt="clock" />
            <Item>TIEMPO POR PRODUCTO</Item>
            <Time>"1,6</Time>
            <ContNumGreen><Percentage>7%</Percentage><LogoStad src={down} alt="clock" /></ContNumGreen>
          </Icos24Hor>
        </EstadTiempo>
        <Line></Line>
        <EstadTiempo>
          <Icos24Hor>
            <Logos src={squareWhite} alt="clock" />
            <Item>TIEMPO POR ORDEN</Item>
            <Time>"1,6</Time>
            <ContNumRed><Percentage>7%</Percentage><LogoStad src={up} alt="clock" /></ContNumRed>
          </Icos24Hor>
        </EstadTiempo>
      </InicioB>
    </Carousel>
    <hr></hr>
    <LDerecho>
    <OrdenHeader>
        <DivJ>
        <ONuevas onClick={getSessionPending}  ><ImgH src={box} />ORDENES NUEVAS</ONuevas>
        </DivJ>
        <DivP>
        <PrePickeadas onClick={getSessionPicked}  > <ImgH src={slashBox} />PRE-PRICKEADAS</PrePickeadas>
        </DivP>
      </OrdenHeader>

      <OrdersContainer status = {status}/>

      <OrdenFooter>
        <Button onClick = {cambio}>Comenzar</Button>
      </OrdenFooter>
    </LDerecho>
  </Container>
)};
