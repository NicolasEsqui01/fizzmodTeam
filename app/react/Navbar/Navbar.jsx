import React from 'react';
import { Nav, Img, NavCont, ImgLogo, ContenedorFlecha, FlechaAtras, OvaloCantidad, H1Cantidades, DivReloj, ImageReloj, H1Tiempo } from "./style";
import Imagen from "../../images/check_circle_bold.svg";

import MenuHamb from "../../images/hamburguesa.png";
//import Nube from "../../images/nube.png";
import Nubee from "../../images/icn_cloud.svg"
import Janis from "../../images/janis_logo.svg"
import flechaAtras from "../../images/arrow_short_prev.svg"
import Reloj from "../../images/clockWhite.svg"


export default () => {
    return (
        // <NavCont>
        // 
        //     <div><Img src={MenuHamb} alt= "3"/></div>
        //     <div><ImgLogo src={JanisLogo} alt= "3"/></div>
        //     <div><Img src={Nubee} alt= "3"/></div>     
        // 
        // </NavCont>

        <NavCont>
                <ContenedorFlecha>
                <FlechaAtras src= {flechaAtras}/>
                <OvaloCantidad>
                    <H1Cantidades>01/120</H1Cantidades>
                </OvaloCantidad>
                </ContenedorFlecha>
                <div><ImgLogo src={Janis} alt= "3"/></div>
                <DivReloj>
                    <ImageReloj src={Reloj}/>
                    <H1Tiempo>01:15:46</H1Tiempo>
                </DivReloj>
        
        </NavCont>

    )

}
    
    