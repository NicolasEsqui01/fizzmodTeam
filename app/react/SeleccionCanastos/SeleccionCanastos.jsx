import React from 'react';
import { Link } from 'react-router-dom';
import {
   
  Header,
  DivIconoHeader,
  IconoCanasta,
  Div1,
  DivA,
  IconoHeader,
  H1Header,
  DivGeneral,
  ColuIzquierda,
  IconoDosCuadrados,
  DivMedio,
  DivFilaUno,
  DivUno,
  DivFilaDos,
  FilaArriba,
  DivLineaUno,
  LineaVerde,
  Uno,
  Lapiz,
  SegundaParteCaja,
  CodigoBarrasDiv,
  CodBarras,
  H1Cod,
  H1Caja,
  DivDos,
  NumCanasto,
  NumCanastoGris,
  EstructuraCaja,
  DivIconoBarritas,
  BarritasArribaizq,
  ImagengrandeDiv,
  ImagenGrande,
  H1PickearCanasto,
  Footer,
  Comenzar,
} from './Style';

import barCode from '../../images/bar_code.svg';
import barCodeGris from '../../images/bar_code_gris.svg';
import barCodeAzul from '../../images/bar_code_azul.svg';
import IconoHeaderImg from '../../images/icono_Header.png';
import IconoIzq from '../../images/Icono_izq.png';
import BoxGris from '../../images/box_gris.svg';
import lapiz from '../../images/edit.svg';
import BasketDashed from '../../images/basket_dashed.svg';
import BasketFull from '../../images/basket_full.svg';
import BasketFullAzul from '../../images/basket_full_azul.svg';

export default () => {
  return (
    
    <div>
      <Header>
        <DivIconoHeader>
          <IconoHeader src={IconoHeaderImg} />
          {/* <IconoCanasta>
                <DivA>
                  <Div1></Div1>
                  <Div1></Div1>
                </DivA>
                <DivA>
                  <Div1></Div1>
                  <Div1></Div1>
                </DivA>
              </IconoCanasta> */}
          <H1Header>Pickee los canastos</H1Header>
        </DivIconoHeader>
      </Header>
      <DivGeneral>
        <ColuIzquierda>
          <IconoDosCuadrados src={IconoIzq} />
        </ColuIzquierda>
        <DivMedio>
          <DivFilaUno>
            <DivUno>
              <FilaArriba>
                <DivLineaUno>
                  <LineaVerde />
                  <Uno>1.</Uno>
                </DivLineaUno>
                <Lapiz src={lapiz} />
              </FilaArriba>
              <SegundaParteCaja>
                <CodigoBarrasDiv>
                  <CodBarras src={barCode} />
                  <H1Cod>676543528893009</H1Cod>
                </CodigoBarrasDiv>
                <CodigoBarrasDiv>
                  <CodBarras src={BoxGris} />
                  <H1Caja>676543528893009</H1Caja>
                </CodigoBarrasDiv>
              </SegundaParteCaja>
            </DivUno>
            <DivDos>
              <DivIconoBarritas>
                <BarritasArribaizq src={barCodeAzul} />
              </DivIconoBarritas>
              <EstructuraCaja>
                <ImagenGrande src={BasketFullAzul} />

                <H1PickearCanasto>PICKEAR CANASTO</H1PickearCanasto>
              </EstructuraCaja>
              <NumCanasto>2</NumCanasto>
            </DivDos>
            <DivUno>
              <DivIconoBarritas>
                <BarritasArribaizq src={barCodeGris} />
              </DivIconoBarritas>
              <EstructuraCaja>
                <ImagenGrande src={BasketFull} />
              </EstructuraCaja>
              <NumCanastoGris>3</NumCanastoGris>
            </DivUno>
          </DivFilaUno>
          <DivFilaDos>
            <DivUno>
              <DivIconoBarritas>
                <BarritasArribaizq src={barCodeGris} />
              </DivIconoBarritas>
              <EstructuraCaja>
                <ImagenGrande src={BasketFull} />
              </EstructuraCaja>
              <NumCanastoGris>4</NumCanastoGris>
            </DivUno>
            <DivUno>
              <EstructuraCaja>
                <ImagengrandeDiv>
                  <ImagenGrande src={BasketDashed} />
                </ImagengrandeDiv>
              </EstructuraCaja>
            </DivUno>
            <DivUno>
              <EstructuraCaja>
                <ImagengrandeDiv>
                  <ImagenGrande src={BasketDashed} />
                </ImagengrandeDiv>
              </EstructuraCaja>
            </DivUno>
          </DivFilaDos>

          <Footer>
            <Comenzar>COMENZAR</Comenzar>
          </Footer>
        </DivMedio>
      </DivGeneral>
    </div>
  );
};
