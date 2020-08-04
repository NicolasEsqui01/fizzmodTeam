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

export default ({ active, onCloseClick, Activar , handleLogout, despickear, reiniciar}) => {
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
                <Significado>Pre-pickear</Significado>
              </ButtonM>
            </DivH>
            <DivH>
              <ButtonM onClick={reiniciar}>
                <ImgO src={Restart} />
                <Significado>Reiniciar</Significado>
              </ButtonM>
            </DivH>
          </DivA>
          <DivB>
            <DivH>
              <ButtonM 
              onClick={()=> {
                handleCanastos()
                onCloseClick()}}>
                <ImgO src={FullBasket} />
                <Significado>Canasto Lleno</Significado>
              </ButtonM>
            </DivH>
            <DivH>
              <ButtonM onClick={()=> {
                 handleCanastos()
                 onCloseClick()} }>
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
              <Significado>Informacion de la Orden</Significado>
            </ButtonM>
          </DivH>
          <DivH>
            <ButtonM onClick={()=>despickear(true)}>
              <ImgO src={unPick} />
              <Significado>Despickear</Significado>
            </ButtonM>
          </DivH>
        </DivN>
        <Espacio4></Espacio4>
        <DivG>
          <ImgX src={LogOut} />
          <Logout onClick={() => onCloseClick() && handleLogout()}> LOGOUT </Logout>
        </DivG>
      </DivO>
    </DIV4>
  );
};
