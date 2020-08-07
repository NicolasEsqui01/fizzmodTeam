import React from 'react';
import {
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
  EstructuraCaja,
  DivIconoBarritas,
  BarritasArribaizq,
  ImagenGrande,
  H1PickearCanasto,
  DivPopup,
  DivImg,
  FormPopup,
  Input,
  InputSubmit,
  DivForm,
  BottomCruz,
  ImgCruz,
  LabelPopup,
} from './Style';

import barCodeGris from '../../images/bar_code_gris.svg';
import barCodeAzul from '../../images/bar_code_azul.svg';
import BasketFull from '../../images/basket_full.svg';
import BasketFullAzul from '../../images/basket_full_azul.svg';
import lapiz from '../../images/edit.svg';
import BoxGris from '../../images/box_gris.svg';
import barCode from '../../images/bar_code.svg';
import X from '../../images/cross_light.svg';


export default ({
  handleClick,
  valor,
  numeros,
  status,
  date,
  activarPopUp,
  handleClickSalir,
  handleSubmit,
  handleChange,
  ordenes,
  cantidad,
  canastos,
}) => {
  let cuadradosMarcados = canastos.filter((Element) => Element === true).length;

  return (
    <>
      <DivDos
        NumDiv={numeros}
        valueClick={valor}
        status={status}
        onClick={() =>
          status === true ||
          (ordenes && ordenes.length - cuadradosMarcados <= cantidad)
            ? null
            : handleClick(numeros)
        }
      >
        {status === true ? (
          <FilaArriba>
            <DivLineaUno>
              <LineaVerde />
              <Uno>{numeros + 1}</Uno>
            </DivLineaUno>
            <Lapiz src={lapiz} />
          </FilaArriba>
        ) : (
          <DivIconoBarritas>
            {numeros === valor ? (
              <BarritasArribaizq src={barCodeAzul} />
            ) : (
              <BarritasArribaizq src={barCodeGris} />
            )}
          </DivIconoBarritas>
        )}
        {status === true ? (
          <SegundaParteCaja>
            <CodigoBarrasDiv>
              <CodBarras src={barCode} />
              <H1Cod>{date[numeros + 1]}</H1Cod>
            </CodigoBarrasDiv>
            <CodigoBarrasDiv>
              <CodBarras src={BoxGris} />
              <H1Caja>
                {ordenes &&
                  ordenes
                    .filter((Element, indice) => numeros === indice).join('')}
              </H1Caja>
            </CodigoBarrasDiv>
          </SegundaParteCaja>
        ) : (
          <EstructuraCaja>
            {numeros === valor ? (
              <ImagenGrande src={BasketFullAzul} />
            ) : (
              <ImagenGrande src={BasketFull} />
            )}
            <NumCanasto NumDiv={numeros} valueClick={valor}>
              {numeros + 1}
            </NumCanasto>
          </EstructuraCaja>
        )}
        {status == true ? null : numeros === valor ? (
          <H1PickearCanasto>PICKEAR CANASTO</H1PickearCanasto>
        ) : (
          <H1PickearCanasto></H1PickearCanasto>
        )}
      </DivDos>

      <DivPopup activar={activarPopUp}>
        <DivImg>
          <BottomCruz onClick={handleClickSalir}>
            <ImgCruz src={X} />
          </BottomCruz>
        </DivImg>
        <DivForm>
          <FormPopup onSubmit={(event) => handleSubmit(event, valor)}>
            <LabelPopup>Escribe El Codigo del Canasto</LabelPopup>
            <Input type="text" name={valor + 1} onChange={handleChange} />
            <InputSubmit type="submit" value="enter" />
          </FormPopup>
        </DivForm>
      </DivPopup>
    </>
  );
};