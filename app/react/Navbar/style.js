import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const NavCont = styled.div`
width: 100%;
background-color: #273947;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
padding-top: 1%;
padding-bottom: 1%;
padding-left: 3%;
padding-right: 3%;
@media ${device.tablet} {
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 6%;
  padding-right: 6%;
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
  border: 1px solid #3b505b;
`;

export const Img2 = styled.img`
  height: 35px;
  width: 40px;
`;

export const ImgLogo = styled.img`
width: 100px;
height: auto;
@media ${device.tablet} {
  width: 75px;
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
  height: 27px;
  width: auto;
  cursor: pointer;
  @media ${device.tablet} {
  width: auto;
  height: 22px;
}

`;

export const OvaloCantidad = styled.button`
  margin-left: 50px;  
  display: flex;
  cursor: pointer;
  justify-content: center;
  width: 77px;
  height: 26px;
  height:auto;
  border-radius: 50px;
  background-color: #1db779;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  margin-right: auto;

  @media ${device.tablet} { 
    margin-left: 30px;    
    width: 48px;
    height: 26px;
    margin-left: 10px;
  }
`;

export const H1Cantidades = styled.h1`
color: #FFFFFF;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
letter-spacing: 0;

@media ${device.tablet} {    
    font-size: 14px;
  }

`;

export const DivReloj = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
