import React from 'react'
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
 } from './style'
import box from '../../images/boxWhite.svg';
import X from '../../images/cross_light.svg';
import totals from '../../images/totals.svg'
import cart from '../../images/shipping_big_truck.svg'
import grafico from '../../images/square_chart_line.svg'
import user from '../../images/user_closed.svg'
import credit from '../../images/credit_card.svg'
import phone from '../../images/phone_outline.svg'
import back from '../../images/arrow_left.svg'

 export default ({active, onCloseClick, Activar})=>{

  const prueba = [1,2,3,4,5,6,7,8,9,10]

  return(
    <DIV5 active={active}>
    <Color></Color>
    <DivO>
      <DivC>
      <Img src={box} />
        <TituloOb> Nro. 12345675436</TituloOb>
        <ButtonX onClick={onCloseClick}>
          <ImgX src={X} />
        </ButtonX>
      </DivC>

      <DivQ>
        <P>Estado Orden</P>
        <DivW>
          <ImgP src={totals}/>
          <Num>$120.00</Num>
        </DivW>
        <DivVC>
        
          <ImgP src={grafico}/>
        
        <DivCON>
          <PP>Pickeados:</PP>
          <NN>47</NN>
          <Nn> / 86</Nn>
          <DivBarr>
        {prueba.map(elemnt =>{
          return(
            <Barrita>{elemnt}</Barrita>
            )
          })}
        </DivBarr>
        </DivCON>
          </DivVC>
      </DivQ>

      <DivS2>
      <P>Metodo de entrega</P>
      <DivW2>
      <ImgP src={cart}/>
      <PPP>Envio a domicilio</PPP>
      </DivW2>
      </DivS2>

      <DivG2>
      <P>Metodo de entrega</P>
        <DivMN>
      <ImgP src={user}/>
      <PPP>Rodrigo del Monte</PPP>
       </DivMN>
       <DivMN>
      <ImgP src={phone}/>
      <PPP>15 888 9302</PPP>
       </DivMN>
      </DivG2>
      <DivS2>
      <P>Metodo de ePago</P>
      <DivW2>
      <ImgP src={credit}/>
      <PPP>MasterdCard</PPP>
      <ButtonX onClick={()=>Activar(4)}><ImgP src={back}/></ButtonX>
      </DivW2>
      </DivS2>
    </DivO>
  </DIV5>
  )
 }