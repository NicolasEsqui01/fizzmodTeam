import React from 'react';
import { Nav, Img, NavCont } from "./style";
import Imagen from "../../images/check_circle_bold.svg";

export default () => {
    return (
        <NavCont>
        <Nav>
            <div>1</div>
            <div>JANIS</div>
            <div><Img src={Imagen} alt= "3"/></div>     
        </Nav>
        </NavCont>
    )

}
    
    