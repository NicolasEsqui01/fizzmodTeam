import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
// Izquierdo

export const LIzquierdo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media ${device.tablet} {
    width: 100%;
    background-color: #16232d;
  }
  @media ${device.laptop} {
    width: 40%;
    background-color: #16232d;
  }
`;

export const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #273947;
  margin-top: 75px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 35px;
  border-radius: 50%;
  border-style: solid double;
  @media ${device.tablet} {
    width: 200px;
    height: 200px;
  }
  @media ${device.laptop} {
    width: 300px;
    height: 300px;
  }
`;

export const OvalInt = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #273947;
  border-radius: 50%;
  border-style: solid double;
  color: #d0d3e3;
  @media ${device.tablet} {
    width: 170px;
    height: 170px;
  }
  @media ${device.laptop} {
    width: 270px;
    height: 270px;
  }
`;

export const Pickers = styled.div`
  height: 14px;
  color: #d0d3e3;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const Qty = styled.div`
  height: 75px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 64px;
  letter-spacing: 0;
  line-height: 75px;
  @media ${device.laptop} {
    font-size: 100px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const Orders = styled.div`
  height: 16px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 16px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 22px;
  }
`;

// DERECHO

export const LDerecho = styled.div`
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    background-color: #e8eaf6;
    width: 60%;
  }
`;

export const OrdeneHeader = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #ffffff;
`;
export const ONuevas = styled.h1`
  height: 14px;
  margin-left: 100px;
  width: 200px;
  color: #273947;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;
export const PrePickeadas = styled.h1`
  margin-right: 80px;
  height: 14px;
  width: 200px;
  color: #939598;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

export const Indicadores = styled.div`
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const Puntos = styled.div`
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

// Oval, Indicadores, Puntos

/* const size = {
  mobile: '425px',
  tablet: '768px',
}


export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet:`(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet})`,
  
}; */
