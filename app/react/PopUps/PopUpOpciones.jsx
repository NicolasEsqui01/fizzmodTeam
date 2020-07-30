import React from 'react';
import {
  DIV4,
  Color,
  DivO,
  DivC,
  DivN,
  DivG,
  DivA,
  DivB,
  DivH,
  ButtonX4,
  ImgX,
  DivM,
  ImgO,
  Espacio4,
  Logout,
  Significado,
  ButtonM,
} from './style';
import X from '../../images/cross_light.svg';
import Salir from '../../images/icn_logout.svg';
import PickingLibre from '../../images/icn_picking-libre.svg';
import PrePicking from '../../images/icn_pre-pick.svg';
import PrePick from '../../images/icn_pre-pick.svg';
import Restart from '../../images/icn_restart.svg';
import FullBasket from '../../images/icn_full-basket.svg';
import Seal from '../../images/icn_seal.svg';
import SealSlash from '../../images/icn_single-product.svg';
import unPick from '../../images/icn_unpick.svg';
import BoxCircle from '../../images/icn_order-info.svg';
import LogOut from '../../images/icn_logout.svg';

export default ({ active, onCloseClick, Activar }) => {
  return (
    <DIV4 active={active}>
      <Color></Color>
      <DivO>
        <DivC>
          <ButtonX4 onClick={onCloseClick}>
            <ImgX src={X} />
          </ButtonX4>
        </DivC>
        <DivM>
          <DivA>
            <DivH>
              <ButtonM>
                <ImgO src={PickingLibre} />
                <Significado>Picking Libre</Significado>
              </ButtonM>
            </DivH>
            <DivH>
              <ButtonM>
                <ImgO src={PrePick} />
                <Significado>Pre-picker</Significado>
              </ButtonM>
            </DivH>
            <DivH>
              <ButtonM>
                <ImgO src={Restart} />
                <Significado>Reiniciar</Significado>
              </ButtonM>
            </DivH>
          </DivA>
          <DivB>
            <DivH>
              <ButtonM>
                <ImgO src={FullBasket} />
                <Significado>Canasto lleno</Significado>
              </ButtonM>
            </DivH>
            <DivH>
              <ButtonM>
                <ImgO src={Seal} />
                <Significado>Precinto</Significado>
              </ButtonM>
            </DivH>
            <DivH>
              <ButtonM>
                <ImgO src={SealSlash} />
                <Significado>Producto suelto</Significado>
              </ButtonM>
            </DivH>
          </DivB>
        </DivM>
        <Espacio4></Espacio4>
        <DivN>
          <DivH>
            <ButtonM onClick={() => Activar(5)}>
              <ImgO src={BoxCircle} />
              <Significado>Informacion de la orden</Significado>
            </ButtonM>
          </DivH>
          <DivH>
            <ButtonM>
              <ImgO src={unPick} />
              <Significado>Despicker</Significado>
            </ButtonM>
          </DivH>
        </DivN>
        <Espacio4></Espacio4>
        <DivG>
          <ImgX src={LogOut} />
          <Logout> LOGOUT </Logout>
        </DivG>
      </DivO>
    </DIV4>
  );
};
