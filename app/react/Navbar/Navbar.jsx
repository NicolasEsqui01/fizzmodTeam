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
import { Redirect } from 'react-router-dom';

export default () => {
  /* const goToSession =()=>{
    <Redirect to='/session'></Redirect>
  } */
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
        <FlechaAtras src={flechaAtras}/>
        <OvaloCantidad /* onClick={goToSession} */>
          <H1Cantidades>01/120</H1Cantidades>
        </OvaloCantidad>
      </ContenedorFlecha>
      <div>
        <ImgLogo src={Janis} alt="3"/>
      </div>
      <DivReloj>
        <ImageReloj src={Reloj}/>
        <H1Tiempo>01:15:46</H1Tiempo>
      </DivReloj>
    </NavCont>
  );
};
