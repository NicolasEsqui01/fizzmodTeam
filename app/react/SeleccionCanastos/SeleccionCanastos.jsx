import React from 'react';
import {
  Header,
  DivIconoHeader,
  IconoHeader,
  H1Header,
  DivGeneral,
  ColuIzquierda,
  DivMedio,
  DivFilaUno,
  Footer,
  Comenzar,
  ContainerGrillCuadros,
  CuadroGrill,
  NumCuadrados,
  DivImgTilde,
} from './Style';

import IconoHeaderImg from '../../images/icono_Header.png';
import Canasto from './Canasto';
import Tilde from '../../images/check_bold.svg';

export default ({
  handleClick,
  valor,
  handleSubmit,
  activar,
  handleClickSalir,
  handleStartSession,
  datosCanasto,
  canastos,
  handleChange,
  cuadrados,
  ordenSession,
  booleano,
  cantidadOrders
}) => {
  return (
    <div>
      <Header>
        <DivIconoHeader>
          <IconoHeader src={IconoHeaderImg} />
          <H1Header>Pickee los canastos</H1Header>
        </DivIconoHeader>
      </Header>
      <DivGeneral>
        <ColuIzquierda>
          <ContainerGrillCuadros>
            {cuadrados.map((Element, indice) => {
              return (
                <CuadroGrill
                  key={indice}
                  valor={valor}
                  numeros={indice}
                  status={Element}
                >
                  {Element === true ? <DivImgTilde src={Tilde} /> : null}
                </CuadroGrill>
              )
            })}
          </ContainerGrillCuadros>
          <NumCuadrados>{valor === '' ? 1 : valor + 1} </NumCuadrados>
        </ColuIzquierda>
        <DivMedio>
          <DivFilaUno>
            {canastos.map((Element, indice) => {
              return (
                <>
                  <Canasto
                    handleClick={handleClick}
                    valor={valor}
                    numeros={indice}
                    status={Element}
                    key={indice}
                    date={datosCanasto}
                    handleClickSalir={handleClickSalir}
                    activarPopUp={activar}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    ordenes={ordenSession}
                    cantidad={cantidadOrders}
                    canastos={canastos}
                  />
                </>
              );
            })}
          </DivFilaUno>
        </DivMedio>
      </DivGeneral>
      <Footer>
        <Comenzar onClick={() => !booleano ? null : handleStartSession()}>COMENZAR</Comenzar>
      </Footer>
    </div>
  );
};
