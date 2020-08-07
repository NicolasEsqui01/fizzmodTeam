import React from 'react';
import {
  Container,
  LIzquierdo,
  LDerecho,
  ContainerIzquierdo,
  ParteSuperior,
  IconoCanasta,
  DivA,
  Div1,
  IconoOrden,
  TitleOrden,
  NumeroOrden,
  ParteInferior,
  Pedidos,
  ImageBox,
  ImageTriangle,
  TitlePedidos,
  BorderNumeroPedido,
  NumeroPedidos,
  HeaderDiv,
  Text,
  DivScroll,
  Productos,
  Img,
  Icono,
  Icono2,
  Icono3,
  Icono4,
  DivR,
  DivP,
  DivX,
  DivZ,
  DivB,
  Descripcion,
  Num,
  Num2,
  Ean,
  Cantidad,
  SectorCongelado,
  DivK,
} from './style';

import box from '../../images/box.svg';
import triangleCircle from '../../images/triangle_circle.svg';
import Navbar from '../Navbar/Navbar';
import basket from '../../images/basket.svg';
import scanner from '../../images/scanner.svg';
import substitute from '../../images/substitute.svg';
import location from '../../images/location_marker.svg';
import waves from '../../images/wavesCelest.svg';
import balance from '../../images/balance.svg';
import snow from '../../images/snowflakeCelest.svg';

export default ({ Idsession }) => {
  return (
    <>
      <Container>
        <LIzquierdo>
          <ContainerIzquierdo>
            <ParteSuperior>
              <IconoCanasta>
                <DivA>
                  <Div1></Div1>
                  <Div1></Div1>
                </DivA>
                <DivA>
                  <Div1></Div1>
                  <Div1></Div1>
                </DivA>
              </IconoCanasta>
              <IconoOrden>
                <TitleOrden>Ronda</TitleOrden>
                <NumeroOrden>{`NRO.${Idsession.id}`}</NumeroOrden>
              </IconoOrden>
            </ParteSuperior>
          </ContainerIzquierdo>
          <ParteInferior>
            <Pedidos>
              <ImageBox src={box} />
              <TitlePedidos>Pedidos</TitlePedidos>
              <BorderNumeroPedido>
                <NumeroPedidos>6</NumeroPedidos>
              </BorderNumeroPedido>
            </Pedidos>
            <Pedidos>
              <ImageTriangle src={triangleCircle} />
              <TitlePedidos>Productos</TitlePedidos>
              <BorderNumeroPedido>
                <NumeroPedidos>{ Idsession.items && Idsession.items.length}</NumeroPedidos>
              </BorderNumeroPedido>
            </Pedidos>
            <Pedidos>
              <ImageBox src={location} />
              <SectorCongelado>Sector Congelados</SectorCongelado>
            </Pedidos>
          </ParteInferior>
        </LIzquierdo>
        <LDerecho>
          <HeaderDiv>
            <Text>PRODUCTOS</Text>
            <Text>CANTIDAD</Text>
          </HeaderDiv>

          <DivScroll>
            { Idsession.items && Idsession.items.map((elem) => {
              return (
                <Productos key={elem.id} estado={elem.status}>
                  <DivR>
                    <Img src={elem.imageUrl} />
                    <DivX>
                      <Descripcion>{elem.name}</Descripcion>

                      <DivZ>
                        <Icono2 src={scanner} />
                        <Ean>{elem.ean}</Ean>
                        <Cantidad>30 / 30</Cantidad>
                      </DivZ>
                    </DivX>
                  </DivR>
                  <DivK></DivK>
                  <DivP>
                    <Icono src={basket} />
                    <Num> 1. </Num>
                    <Icono3 src={box} />
                    <Num2>{Idsession.id}</Num2>
                    <DivB>
                      <Icono4 src={balance} />
                      <Icono4 src={substitute} />
                    </DivB>
                  </DivP>
                </Productos>
              );
            })}
          </DivScroll>
        </LDerecho>
      </Container>
    </>
  );
};
