import React from 'react';
import { Nav, Img, NavCont, ImgLogo } from "./style";
import Imagen from "../../images/check_circle_bold.svg";

import MenuHamb from "../../images/hamburguesa.png";
import Nube from "../../images/nube.png";
import JanisLogo from "../../images/logoJanis.png";


export default () => {
    return (
        <NavCont>
        <Nav>
            <div><Img src={MenuHamb} alt= "3"/></div>
            <div><ImgLogo src={JanisLogo} alt= "3"/></div>
            <div><Img src={Nube} alt= "3"/></div>     
        </Nav>
        </NavCont>
    )

}
    
    