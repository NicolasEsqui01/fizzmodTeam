import React from 'react';
import {
  Nav,
  Img,
  Img2,
  NavCont,
  ImgLogo,
  ContenedorFlecha,
  FlechaAtras,
  OvaloCantidad,
  H1Cantidades,
  DivReloj,
  ImageReloj,
  H1Tiempo,
} from './style';
import Imagen from '../../images/check_circle_bold.svg';

import MenuHamb from '../../images/hamburguesa.png';
import MenuHamburguesa from "../../images/icn_menu-irregular.svg"
import Nubee from '../../images/icn_cloud.svg';
import Janis from '../../images/janis_logo.svg';
import flechaAtras from '../../images/arrow_short_prev.svg';
import Reloj from '../../images/clockWhite.svg';

export default ({ time, start, stop, reset, }) => {
  return (
    //////////////// NAVBAR PARA INICIO /////////////////
    //<NavCont>
    //  <div><Img src={MenuHamburguesa} alt= "3"/></div>
    //  <div><ImgLogo src={Janis} alt= "3"/></div>
    //  <div><Img2 src={Nubee} alt= "3"/></div>
    // </NavCont> 

    //////////////// NAVBAR PICKING INICIADO /////////////////
    <NavCont>
      <ContenedorFlecha>
        <FlechaAtras src={flechaAtras} />
        <OvaloCantidad>
          <H1Cantidades>01/120</H1Cantidades>
        </OvaloCantidad>
      </ContenedorFlecha>
      <div>
        <ImgLogo src={Janis} alt="3" />
      </div>
      <DivReloj>
        <ImageReloj src={Reloj} />
        <H1Tiempo>
          <H1Tiempo>{(time.h >= 10) ? time.h : "0" + time.h}</H1Tiempo>
          <H1Tiempo>{(time.m >= 10) ? time.m : "0" + time.m}</H1Tiempo>
          <H1Tiempo>{(time.s >= 10) ? time.s : "0" + time.s}</H1Tiempo>
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
          <button onClick={reset}>reset</button>
        </H1Tiempo>
      </DivReloj>
    </NavCont>
  );
};
