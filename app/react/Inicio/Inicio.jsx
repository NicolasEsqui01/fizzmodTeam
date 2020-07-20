import React from 'react';
import {Link} from 'react-router-dom'
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
  ContNumRed,
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
import moment from 'moment';
import NotFoundPage from '../NotFoundPage/Loadable';
import Navbar from '../Navbar/NavbarContainer';

export default ({
  sessions,
  pickers,
  cambio,
  getSessionPending,
  getSessionPicked,
  status,
  tokenUser,
  getToken
}) => {
  let picked = 0;
  let picking = 0;
  let pending = 0;
  let tiempoPorOrden = [];
  let countProdPorOrden = [];
  for (let i = 0; i < sessions.length; i++) {
    if (sessions[i].status === 'picked') {
      picked += 1;
      var start = moment(sessions[i].startPickingTime);
      var end = moment(sessions[i].endPickingTime);
      let duration = moment.duration(end.diff(start)).asMinutes();
      tiempoPorOrden.push(duration);
      countProdPorOrden.push(sessions[i].items.length);
    } else if (sessions[i].status === 'picking') picking += 1;
    else if (sessions[i].status === 'pending') pending += 1;
  }
  let tiempoPromedioOrden = 0;
  let tiempoPromedioPorProducto = 0;
  if (tiempoPorOrden.length > 0) {
    let length = tiempoPorOrden.length;
    tiempoPorOrden = tiempoPorOrden.reduce(
      (previous, current) => (current += previous),
    );
    tiempoPromedioOrden = parseInt((tiempoPorOrden /= length) * 10, 10) / 10;
    countProdPorOrden = countProdPorOrden.reduce(
      (previous, current) => (current += previous),
    );
    tiempoPromedioPorProducto =
      Math.round((countProdPorOrden /= tiempoPorOrden) * 10) / 10;
  }
  return (
    <>
      { getToken === null ?  (
        <NotFoundPage /> 
      ) : (
        <>
          <Navbar />  
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
                    <Pickers>{pickers.length} PICKERS</Pickers>
                    <Qty>{sessions.length}</Qty>{' '}
                    {sessions.length == 0 ? (
                      <Orders>NOTHING YET...</Orders>
                    ) : sessions.length === 1 ? (
                      <Orders>ORDEN</Orders>
                    ) : (
                      <Orders>ORDENES</Orders>
                    )}
                  </OvalInt>
                </Oval>
                <Indicadores>
                  <Icos24>
                    <Logos src={triangleWhite} alt="triangle" />
                    <PNumbers>{pending}</PNumbers>
                    <PNames>X ORDEN</PNames>
                  </Icos24>
                  <Icos24>
                    <Logos src={clockRed} alt="clock" />
                    <PNumbers>{picking}</PNumbers>
                    <PNames>X ORDEN</PNames>
                  </Icos24>
                  <Icos24>
                    <Logos src={boxGreen} alt="box" />
                    <PNumbers>{picked}</PNumbers>
                    <PNames>X PICKER</PNames>
                  </Icos24>
                </Indicadores>
              </InicioA>
              <InicioB>
                <SubTitle>MIS ESTADÍSTICAS</SubTitle>
                <ContUser>
                  <LogoUser src={user} alt="user" />
                </ContUser>
                <EstadTiempo>
                  <Icos24Hor>
                    <Logos src={clockWhite} alt="clock" />
                    <Item>TIEMPO POR PRODUCTO</Item>
                    {tiempoPromedioPorProducto !== 0 ? (
                      <Time>''{tiempoPromedioPorProducto}</Time>
                    ) : (
                      <Time>0</Time>
                    )}
                    <ContNumGreen>
                      <Percentage>7%</Percentage>
                      <LogoStad src={down} alt="clock" />
                    </ContNumGreen>
                  </Icos24Hor>
                </EstadTiempo>
                <Line></Line>
                <EstadTiempo>
                  <Icos24Hor>
                    <Logos src={squareWhite} alt="clock" />
                    <Item>TIEMPO POR ORDEN</Item>
                    {tiempoPromedioOrden !== 0 ? (
                      <Time>''{tiempoPromedioOrden}</Time>
                    ) : (
                      <Time>0</Time>
                    )}
                    <ContNumRed>
                      <Percentage>7%</Percentage>
                      <LogoStad src={up} alt="clock" />
                    </ContNumRed>
                  </Icos24Hor>
                </EstadTiempo>
              </InicioB>
            </Carousel>
            <hr></hr>
            <LDerecho>
              <OrdenHeader>
                <DivJ>
                  <ONuevas onClick={getSessionPending} status={status}>
                    <ImgH src={box} />
                    ORDENES NUEVAS
                  </ONuevas>
                </DivJ>
                <DivP>
                  <PrePickeadas onClick={getSessionPicked} status={status}>
                    {' '}
                    <ImgH src={slashBox} />
                    PRE-PRICKEADAS
                  </PrePickeadas>
                </DivP>
              </OrdenHeader>

              <OrdersContainer />

              <OrdenFooter>
              <Button> <Link to = './productoindividual'> Comenzar </Link></Button>
              </OrdenFooter>
            </LDerecho>
          </Container>
        </>
      )}
    </>
  );
};
