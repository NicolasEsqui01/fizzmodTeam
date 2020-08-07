import React from 'react';
import {
  Container,
  Derecho,
  ParteSuperior,
  IconoCanastoOscuro,
  TituloCanasto,
  ParteCentral1,
  ParteCentralIzq,
  ParteCentral2Izq,
  IconoCanastoVerde,
  NombreCanasto,
  DivIconoAprobado,
  IconoAprobado,
  LineaBlanca,
  ParteCentral2,
  IconoCanastoGris,
  NombreCargarCanasto,
  IconoTeclado,
  ParteInferior,
  OrdenFooter,
  Button,
  Izquierdo,
  ParteSuperiorIzq,
  IconoApproveDiv,
  IconoAprobadoIzq,
  FelicitacionesDiv,
  FelicitacionesH1,
  RondaH1,
  ParteInferiorIzq,
  IconoIzqDiv,
  ColuInfoDerecha,
  ParteTotalesDivInf,
  TituloTotales,
  Pickeados,
  TotalesGris,
  ImgLineaRoja,
  DivScroll,
} from './style';
import ProgressBarContainer from '../ProgressBar/ProgressBarContainer';
import basket from '../../images/basket_gris.svg';
import basketVerde from '../../images/basket_verde.svg';
import basketNegro from '../../images/basket_negro.svg';
import Aprobado from '../../images/check_bold.svg';
import AprobadoCirculo from '../../images/check_circulo.svg';
import keyboard from '../../images/icn_keyboard.svg';
//import tecladoGris from "../../images/tecladoGris.png";

export default ({ handleClick, idSession, datosCanasto }) => {
  let total;
  let largo;
  let porcentaje;
  if (idSession.items) {
    total = idSession.totalItems;
    largo = idSession.items.filter((Element) => Element.status === 'picked')
      .length;
  }
  return (
    <Container>
      <Izquierdo>
        <ParteSuperiorIzq>
          <IconoApproveDiv>
            <IconoAprobadoIzq src={AprobadoCirculo} />
          </IconoApproveDiv>
          <FelicitacionesDiv>
            <FelicitacionesH1>Felicitaciones!</FelicitacionesH1>
            <RondaH1>Has completado la ronda.</RondaH1>
          </FelicitacionesDiv>
        </ParteSuperiorIzq>
        <ParteInferiorIzq>
          <IconoIzqDiv>
            <IconoCanastoOscuro src={basket} />
          </IconoIzqDiv>
          <ColuInfoDerecha>
            <TituloTotales>TOTALES</TituloTotales>
            <Pickeados>Pickeados:{largo + 1}</Pickeados>
            <TotalesGris>Totales: {total}</TotalesGris>
          </ColuInfoDerecha>
        </ParteInferiorIzq>
        <ProgressBarContainer />
      </Izquierdo>
      <Derecho>
        <div>
          <ParteSuperior>
            <IconoCanastoOscuro src={basket} />
            <TituloCanasto>CANASTOS</TituloCanasto>
          </ParteSuperior>
          <DivScroll>
            {datosCanasto &&
              Object.values(datosCanasto.nameCanasto)
                .filter((Element) => Element !== '')
                .map((Element) => {
                  return (
                    <>
                      <ParteCentral1>
                        <ParteCentralIzq>
                          <IconoCanastoVerde src={basketVerde} />
                          <NombreCanasto>Canasto {Element}</NombreCanasto>
                        </ParteCentralIzq>
                        <DivIconoAprobado>
                          <IconoAprobado src={Aprobado} />
                        </DivIconoAprobado>
                      </ParteCentral1>
                      <LineaBlanca />
                    </>
                  );
                })}
          </DivScroll>
          <ParteCentral2>
            <ParteCentral2Izq>
              <IconoCanastoGris src={basketNegro} />
              <NombreCargarCanasto>Cargar Nuevo Canasto</NombreCargarCanasto>
            </ParteCentral2Izq>
            <IconoTeclado src={keyboard} />
          </ParteCentral2>
        </div>
        <div>
          <ParteInferior>
            <OrdenFooter>
              <Button onClick={handleClick}>FINALIZAR</Button>
            </OrdenFooter>
          </ParteInferior>
        </div>
      </Derecho>
    </Container>
  );
};
