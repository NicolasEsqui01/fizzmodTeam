import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const NavCont = styled.div`
  width: 100%;
  height: 8%;
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
  border: 1px solid #3b505b;
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

export const OvaloCantidad = styled.button`
  margin-left: 17px;
  display: flex;
  justify-content: center;
  width: 140px;
  height: 60px;
  border-radius: 50px;
  background-color: #1db779;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  margin-right: auto;

  @media ${device.tablet} {
    width: 50px;
    height: 25px;
    margin-left: 10px;
  }
`;

export const H1Cantidades = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
`;
