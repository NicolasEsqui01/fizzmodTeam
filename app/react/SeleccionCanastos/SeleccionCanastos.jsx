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
import X from '../../images/cross_light.svg';

export default ({ handleClick, valor, handleSubmit }) => {
  return (
    <>
      <Header>
        <DivIconoHeader>
          <IconoHeader src={IconoHeaderImg} />
          <H1Header>Pickee los canastos</H1Header>
        </DivIconoHeader>
      </Header>
      <DivGeneral>
        <ColuIzquierda>
          <IconoDosCuadrados src={IconoIzq} />
        </ColuIzquierda>
        <DivMedio>
          <DivFilaUno>
            {[{ id: 1 }, { id: 2 }, { id: 3 }].map((Element) => {
              return (
                <>
                  <DivUno
                    key={Element.id}
                    valor={valor}
                    elementos={Element.id}
                    onClick={() => handleClick(Element.id)}
                  >
                    <DivIconoBarritas>
                      {Element.id === valor ? (
                        <BarritasArribaizq src={barCodeAzul} />
                      ) : (
                        <BarritasArribaizq src={barCodeGris} />
                      )}
                    </DivIconoBarritas>
                    <EstructuraCaja>
                      {Element.id === valor ? (
                        <ImagenGrande src={BasketFullAzul} />
                      ) : (
                        <ImagenGrande src={BasketFull} />
                      )}
                      {Element.id === valor ? (
                        <NumCanasto>{Element.id}</NumCanasto>
                      ) : (
                        <NumCanastoGris>{Element.id}</NumCanastoGris>
                      )}
                      {Element.id === valor ? (
                        <H1PickearCanasto>PICKEAR CANASTO</H1PickearCanasto>
                      ) : null}
                    </EstructuraCaja>
                  </DivUno>
                </>
              );
            })}
          </DivFilaUno>
          <DivFilaDos>
            <DivUno>
              <DivIconoBarritas>
                <BarritasArribaizq src={barCodeGris} />
              </DivIconoBarritas>
              <EstructuraCaja>
                <ImagenGrande src={BasketFull} />
                <NumCanastoGris>4</NumCanastoGris>
              </EstructuraCaja>
            </DivUno>
            <DivUno>
              <EstructuraCaja>
                <ImagenGrande src={BasketDashed} />
              </EstructuraCaja>
            </DivUno>
            <DivUno>
              <EstructuraCaja>
                <ImagenGrande src={BasketDashed} />
              </EstructuraCaja>
            </DivUno>
          </DivFilaDos>

          <Footer>
            <Comenzar>COMENZAR</Comenzar>
          </Footer>
        </DivMedio>
      </DivGeneral>
    </>
  );
};

{/* <DivPopup valor={valor} elementos={Element.id}>
                    <SubDivPopup>
                      <FormPopup onSubmit={handleSubmit}>
                        <Input type="text" />
                        <InputSubmit type="submit" value="enter" />
                      </FormPopup>
                    </SubDivPopup>
                  </DivPopup>  */}

{
  /* <FilaArriba>
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
</SegundaParteCaja> */
}

// <DivIconoBarritas>
//     <BarritasArribaizq src={barCodeAzul} />
//   </DivIconoBarritas>
//   <EstructuraCaja>
//     <ImagenGrande src={BasketFullAzul} />
//     <NumCanasto>2</NumCanasto>
//     <H1PickearCanasto>PICKEAR CANASTO</H1PickearCanasto>
//   </EstructuraCaja>
