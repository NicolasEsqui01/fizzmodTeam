import React from 'react';
import { Link } from 'react-router-dom';
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
  ButtonRetomar,
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
import box from '../../images/icn_new-order.svg';
import slashBox from '../../images/icn_pre-picking.svg';
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


export default ({
  sessions,
  picker,
  handleClickSession,
  getSessionPending,
  getSessionPicking,
  totalPicking,
  totalPending,
  status,
  statusOrderSelected,
  okBoton
}) => (
    <>
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
                <Pickers>
                  <div> PICKER </div>
                  <div> {picker.firstname} </div>
                </Pickers>
                <Qty>{sessions}</Qty>{' '}
                {sessions == 0 ? (
                  <Orders>NOTHING YET...</Orders>
                ) : sessions === 1 ? (
                  <Orders>ORDEN</Orders>
                ) : (
                      <Orders>ORDENES</Orders>
                    )}
              </OvalInt>
            </Oval>
            <Indicadores>
              <Icos24>
                <Logos src={triangleWhite} alt="triangle" />
                <PNumbers>{totalPending}</PNumbers>
                <PNames>PENDING</PNames>
              </Icos24>
              <Icos24>
                <Logos src={clockRed} alt="clock" />
                <PNumbers>{totalPicking}</PNumbers>
                <PNames>PICKING</PNames>
              </Icos24>
              {/*<Icos24>
                <Logos src={boxGreen} alt="box" />
                <PNumbers>{totalPicked}</PNumbers>
                <PNames>PICKED</PNames>
              </Icos24>*/}
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
                <Item> ' 3  TIEMPO POR PRODUCTO  </Item>
                {/*tiempoPromedioPorProducto !== 0 ? (
                  <Time>''{tiempoPromedioPorProducto}</Time>
                ) : (
                  <Time>0</Time>
                )*/}

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
                <Item> ' 14  TIEMPO POR ORDEN  </Item>
                {/*tiempoPromedioOrden !== 0 ? (
                  <Time>''{tiempoPromedioOrden}</Time>
                ) : (
                  <Time>0</Time>
                )*/}

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
              <PrePickeadas onClick={getSessionPicking} status={status}>
                {' '}
                <ImgH src={slashBox} />
                PRE-PRICKEADAS
              </PrePickeadas>
            </DivP>
          </OrdenHeader>

          <OrdersContainer />

          <OrdenFooter>
            {status == 'picking' ?
              (<ButtonRetomar onClick={handleClickSession}>Retomar</ButtonRetomar>)
              :
              (<Button onClick={handleClickSession}>Comenzar</Button>)
            }
          </OrdenFooter>
        </LDerecho>
      </Container>
    </>
  );


{/*   //ESPERANDO DATOS DE ESTADISTICA DEL BACKEND
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
  */}