import React from 'react';

import {
  DIV,
  Color,
  DivV,
  DivC,
  ImgM,
  ImgX,
  TituloOb,
  ButtonX,
  DivP,
  PopUpProdu,
} from './style';
import Sustituto from '../../images/substitute.svg';
import X from '../../images/cross_light.svg';

export default ({ active, onCloseClick }) => {
  const Prueba = [1, 2, 3, 4];

  return (
    <>
      <DIV active={active}>
        <Color></Color>
        <DivV>
          <DivC>
            <ImgM src={Sustituto} />
            <TituloOb> Sustitutos </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivC>
          <DivP>
            {Prueba.map((element) => {
              return <PopUpProdu key={element.id}>{element}</PopUpProdu>;
            })}
          </DivP>
        </DivV>
      </DIV>
    </>
  );
};
