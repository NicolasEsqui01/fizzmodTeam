import React from 'react';

import {
  DIV7,
  Color,
  DivV,
  DivCXL,
  ImgM,
  ImgX,
  TituloOb,
  ButtonX,
  PPP,
  DivControl,
  DivExit,
  ImgP,
  Abajo,
  DivText,
  DivText2,
} from './style';
import X from '../../images/cross_light.svg';
import InfoUser from '../../images/icn_picker-info.svg';
import totals from '../../images/totals.svg';
import catalogo from '../../images/catalogue.svg';
import exit from '../../images/arrow_alt_from_left.svg';
import store from '../../images/store.svg';

export default ({ active, onCloseClick, datosPicker , handleLogout }) => {
  return (
    <>
      <DIV7 active={active}>
        <Color></Color>
        <DivV>
          <DivCXL>
            <ImgM src={InfoUser} />
            <TituloOb>
              {' '}
              {datosPicker.firstname} {datosPicker.lastname}{' '}
            </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivCXL>
          <DivControl>
            <ImgP src={totals} />
            <DivText>
              <PPP>{datosPicker.profileId}</PPP>
              <Abajo>Code 123</Abajo>
            </DivText>
          </DivControl>

          <DivControl>
            <ImgP src={catalogo} />
            <DivText>
              <PPP>ASDGSDFHSFHSGFHDFGH</PPP>
              <Abajo>Legado</Abajo>
            </DivText>
          </DivControl>

          <DivControl>
            <ImgP src={store} />
            <DivText2>
              <PPP>{datosPicker.clientCode}</PPP>
              <Abajo>Tienda</Abajo>
            </DivText2>
          </DivControl>

          <DivExit>
            <ImgP src={exit} />
            <PPP onClick={handleLogout}> Cerrar Sesion</PPP>
          </DivExit>
        </DivV>
      </DIV7>
    </>
  );
};
