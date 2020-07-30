import React from 'react';
import {
  DIV5,
  Color,
  DivO,
  DivC,
  DivW,
  DivW2,
  DivG2,
  DivVC,
  Img,
  ImgX,
  ImgP,
  ButtonX,
  DivQ,
  DivS2,
  DivG,
  TituloOb,
  P,
  PP,
  PPP,
  NN,
  Nn,
  Num,
  Barrita,
  DivBarr,
  DivIM2,
  DivCON,
  DivMN,
} from './style';
import box from '../../images/boxWhite.svg';
import X from '../../images/cross_light.svg';
import totals from '../../images/totals.svg';
import cart from '../../images/shipping_big_truck.svg';
import grafico from '../../images/square_chart_line.svg';
import user from '../../images/user_closed.svg';
import credit from '../../images/credit_card.svg';
import phone from '../../images/phone_outline.svg';
import back from '../../images/arrow_left.svg';

export default ({ active, onCloseClick, Activar, idSession }) => {
  const prueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return idSession.items ? (
    <DIV5 active={active}>
      <Color></Color>
      <DivO>
        <DivC>
          <Img src={box} />
          <TituloOb> Nro.{localStorage.getItem('sessionid')}</TituloOb>
          <ButtonX onClick={onCloseClick}>
            <ImgX src={X} />
          </ButtonX>
        </DivC>

        <DivQ>
          <P>Estado Orden</P>
          <DivW>
            <ImgP src={totals} />
            <Num>${idSession.items.map(Element => Element.purchasedPrice * Element.purchasedQuantity).reduce((a,b) => a + b ,0)}</Num>
          </DivW>
          <DivVC>
            <ImgP src={grafico} />

            <DivCON>
              <PP>Pickeados:</PP>
              <NN>{idSession.items.filter(Element => Element.status === 'picked').length}</NN>
              <Nn> / {idSession.totalItems} </Nn>
              <DivBarr>
                {idSession.items.map((Element , indice) => <Barrita>{indice + 1}</Barrita>)}
              </DivBarr>
            </DivCON>
          </DivVC>
        </DivQ>

        <DivS2>
          <P>Metodo de entrega</P>
          <DivW2>
            <ImgP src={cart} />
            <PPP>Envio a domicilio</PPP>
          </DivW2>
        </DivS2>

        <DivG2>
          <P>Metodo de entrega</P>
          <DivMN>
            <ImgP src={user} />
            <PPP>Rodrigo del Monte</PPP>
          </DivMN>
          <DivMN>
            <ImgP src={phone} />
            <PPP>15 888 9302</PPP>
          </DivMN>
        </DivG2>
        <DivS2>
          <P>Metodo de ePago</P>
          <DivW2>
            <ImgP src={credit} />
            <PPP>MasterdCard</PPP>
            <ButtonX onClick={() => Activar(4)}>
              <ImgP src={back} />
            </ButtonX>
          </DivW2>
        </DivS2>
      </DivO>
    </DIV5>
  ) : null;
};
