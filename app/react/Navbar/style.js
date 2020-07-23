import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

export const NavCont = styled.div`
width: 100%;
height: 10%;
background-color: #273947;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
padding-top: 17px;
padding-bottom: 17px;
padding-left: 36px;
padding-right: 36px;
@media ${device.tablet} {
  padding-left: 12px;
  padding-right: 12px;
}
`;


export const Nav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
//padding-top: 5px;
margin-right: 20px;
margin-left: 20px;
align-items: center;
`;


export const Img = styled.img`
height: 35px;
width: 36px;
box-sizing: border-box;
border-radius: 5px;
border: 1px solid #3B505B;
`;

export const Img2 = styled.img`
height: 35px;
width: 40px;

`;

export const ImgLogo = styled.img`
height: 35px;
width: 110px;
@media ${device.tablet} {
    
  width: 55px;
  height: auto;
  margin-left: 10px;
}
`;

//padding: 0px 20px 8px 0px;

////// SESION INICIADA /////////////

export const ContenedorFlecha = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const FlechaAtras = styled.img`
  height: 22px;
  width: auto;
`;

export const OvaloCantidad = styled.div`
  margin-left: 17px;  
  display: flex;
  justify-content: center;
  width: 80px;
  border-radius: 50px;
  background-color: #1DB779;
  align-items: center;
  
  margin-right: auto;

  @media ${device.tablet} {
    
    width: 50px;
    height: 25px;
    margin-left: 10px;
  }
`;

export const H1Cantidades = styled.h1`


color: #FFFFFF;
font-family: Roboto;
font-size: 14px;
font-weight: bold;
letter-spacing: 0;


`;

export const DivReloj = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const ImageReloj = styled.img`
height: 24px;
width: auto;
@media ${device.tablet} {
  height: 20px;
}
`;

export const H1Tiempo = styled.div`
display:flex;
margin-left: 10px;
height: 19px;
//width: 65px;
color: #FFFFFF;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
@media ${device.tablet} {
  margin-left: 5px;  
  margin-left: 6px;
}
`;


