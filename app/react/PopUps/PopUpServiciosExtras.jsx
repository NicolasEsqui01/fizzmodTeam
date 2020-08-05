import React from 'react';

import {
  DIV6,
  Color,
  DivV,
  DivC,
  ImgM,
  ImgX,
  TituloOb,
  ButtonX,
  DivP,
  DivLI,
  DivPunto,
  Punto,
  Servicios,
} from './style';
import X from '../../images/cross_light.svg';
import bubbleExc from '../../images/exclamation_circle.svg';

export default ({ active, onCloseClick }) => {
  const Prueba = [1, 2, 3, 4];

  return (
    <>
      <DIV6 active={active}>
        <Color></Color>
        <DivV>
          <DivC>
            <ImgM src={bubbleExc} />
            <TituloOb> Servicios extras </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivC>
          <DivP>
            <ul>
              {Prueba.map((element,idx) => (
                    <DivLI key={idx}>
                      <DivPunto>
                        <Punto />
                      </DivPunto>
                      <Servicios >
                        Así podemos hacer que la lista esté definida por puntos
                        negros (li type=”disc”), por puntos con el fondo blanco
                        (li type=”circle”) o por cuadrados (li type=”square”).
                        Aunque esta apariencia dependerá del navegador. Hay
                        algunos navegadores que dan otras apariencias a estos
                        mismos atributos.
                      </Servicios>
                    </DivLI>
                ))}
            </ul>
          </DivP>
        </DivV>
      </DIV6>
    </>
  );
};
