import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const ListOrdenes = styled.div`
  @media ${device.tablet} {
    height: 450px;
  }
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  margin-top: 30px;
  height: 80%;
  width: 90%;
  border-radius: 3px;
  background-color: #ffffff;
  ${({ permitir, div, estadoOrden }) => {
    
    if(estadoOrden == 'pending'){
      if(permitir === div) return 'border: 4px solid #1db779 !important;'
      else return null
    } 

    if(estadoOrden == 'picking'){
      if(permitir === div) return 'border: 6px solid #F13B70 !important;'
      else return null
    } 

    if(estadoOrden == 'picked'){
      if(permitir === div) return 'border: 6px solid #1db779 !important;'
      else return null
    }      
  }}
`;

export const Numero = styled.h1`
  @media ${device.tablet} {
    font-size: 100%;
  }
  margin-top: 5%;
  height: 20px;
  width: 100%;
  color: #273947;
  font-family: Roboto;
  font-size: 180%;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
`;

// Logos
export const Img = styled.img`
  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }
  margin-top: 3%;
  margin-left: 5%;
  height: 60px;
  width: 60px;
  background-color: #273947;
  border-radius: 50px;
  padding: 7px;
`;

export const ImgPicked = styled.img`
  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }
  margin-top: 3%;
  margin-left: 5%;
  height: 60px;
  width: 60px;
  background-color: #1DB779;
  border-radius: 50px;
  padding: 7px;
`;

export const ImgPicking = styled.img`
  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }
  margin-top: 3%;
  margin-left: 5%;
  height: 60px;
  width: 60px;
  background-color: #F13B70;
  border-radius: 50px;
  padding: 7px;
`;

export const ImgP = styled.img`
  @media ${device.tablet} {
    height: 70%;
    margin-left: 10%;
  }
  margin-left: 3%;
  margin-right: 5%;
  height: 80%;
`;
//

// Div de control
export const DivN = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 80%;
`;
export const DivT = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivP = styled.div`
  @media ${device.tablet} {
    flex-direction: column;
    aling-content: center;
  }
  display: flex;
  margin-top: 5%;
  flex-direction: row;
`;

export const DivS = styled.div`
  display: flex;
  margin-top: 5%;
  flex-direction: row;
`;

export const DivScroll = styled.div`
  @media ${device.tablet} {
    height: 90%;
  }
  overflow: auto;
  height: 100%;
  width: 100%;
`;

//

// Numeros
export const Num = styled.div`
  height: 16px;
  width: auto;
  color: #939598;
  font-family: Roboto;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 16px;
  color: #939598;
  margin-right: 5px;
`;
export const NumP = styled.div`
margin-top:53%
height: 40px;
width: 100%;
color: #273947;
font-family: Roboto;
font-size: 160%;
letter-spacing: 0;
line-height: 15px;
text-align: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  height: 16px;
  width: auto;
  color: #d5d7db;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 16px;
  color: #d5d7db;
`;


export const Peso = styled.div`
  @media ${device.tablet} {
    width: 70%;
    height: 45px;
    margin: 5px;
  }
  margin-right: 3%;
  box-sizing: border-box;
  height: 80px;
  width: 20%;
  border: 1px solid #d5d7db;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Frio = styled.div`
  @media ${device.tablet} {
    width: 70%;
    height: 45px;
    margin: 5px;
  }
  margin-right: 3%;
  box-sizing: border-box;
  height: 80px;
  width: 20%;
  border: 1px solid #d5d7db;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aire = styled.div`
  @media ${device.tablet} {
    width: 70%;
    height: 45px;
    margin: 5px;
  }
  margin-right: 3%;
  box-sizing: border-box;
  height: 80px;
  width: 20%;
  border: 1px solid #d5d7db;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Marca = styled.div`
  @media ${device.tablet} {
    width: 90%;
    height: 50px;
    margin: 5px;
  }

  box-sizing: border-box;
  height: 80px;
  width: 95%;
  border: 1px solid #d5d7db;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;
export const Marca2 = styled.div`
  @media ${device.tablet} {
    width: 90%;
    height: 50px;
    margin: 5px;
  }
  box-sizing: border-box;
  height: 80px;
  width: 95%;
  border: 1px solid #d5d7db;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

export const Info = styled.div`
  @media ${device.tablet} {
    font-size: 11px;
  }
  height: 30px;
  width: 60%;
  color: #273947;
  font-family: Roboto;
  font-size: 200%;
  letter-spacing: 0;
  line-height: 15px;
  display: flex;
  align-items: center;
`;
