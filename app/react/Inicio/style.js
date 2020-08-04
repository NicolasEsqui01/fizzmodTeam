import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
@media ${device.tablet} {
  display: flex;
  flex-direction: column;
} @media ${device.laptop} {
  display: flex;
  flex-direction: row;
}
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 93vh;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Logos = styled.img`
  width: 35px;
  height: 35px;
`;

export const LogoStad = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 45px;
  margin-right: 45px;
  margin-top: 65px;
  @media ${device.tablet} {
    margin-bottom: 35px;
    height: 230px;
  }
  @media ${device.laptop} {
    margin-bottom: 85px;
    width: 300px;
    height: 300px;
  }
`;

export const ContNumGreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #74C655;
  padding-top:5px;
  padding-bottom:5px;
  padding-left:10px;
  padding-right:10px;
`;

export const ContNumRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #FF4343;
  padding-top:5px;
  padding-bottom:5px;
  padding-left: 10px;
  padding-right: 10px;
`;



export const LogoUser = styled.img`
  margin-top: 15px;
  margin-bottom: 35px;
  height: 200px;
  width: 200px;
  background-color: #273947;
  border-radius: 50%;
  padding: 25px;
  @media ${device.tablet} {
    width: 200px;
    height: 200px;
  }
  @media ${device.laptop} {
    width: 270px;
    height: 270px;
  }
`

export const InicioA = styled.div``;
export const InicioB = styled.div``;

export const Oval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #273947;
  margin-left: 45px;
  margin-right: 45px;
  border-radius: 50%;
  border-style: solid double;
  @media ${device.tablet} {
    margin-top: 65px;
    margin-bottom: 35px;
    width: 230px;
    height: 230px;
  }
  @media ${device.laptop} {
    margin-top: 100px;
    margin-bottom: 85px;
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
    width: 200px;
    height: 200px;
  }
  @media ${device.laptop} {
    width: 270px;
    height: 270px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #273947;
  color: #d0d3e3;
  margin:0px;
  width: 90%;
  margin-left:auto;
  margin-right:auto;
  `;


export const Pickers = styled.div`
  display:flex;
  flex-direction: column;
  color: #d0d3e3;
  font-family: Roboto;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const Qty = styled.div`
  height: 75px;
  color: #ffffff;
  font-family: Roboto;
  letter-spacing: 0;
  line-height: 75px;
  @media ${device.tablet} {
    font-size: 75px;
    margin-top: 7px;
    margin-bottom: 7px;
  }
  @media ${device.laptop} {
    font-size: 100px;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const PNames = styled.div`
  font-size: 13px;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
`;

export const PNumbers = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 15px;
`;

export const Orders = styled.div`
  height: 16px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 16px;
  text-align: center;
  font-weight: 100;
  @media ${device.laptop} {
    font-size: 22px;
  }
`;

export const SubTitle = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 17px;
  margin-top:45px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 19px;
    margin-top:20%;
  }
`;

export const Item = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 12px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  @media ${device.laptop} {
    font-size: 14px;
  }
`;

export const Time = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 21px;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bolder;
  @media ${device.laptop} {
    font-size: 19px;
  }
`;

export const Percentage = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 17px;
  text-align: center;
  @media ${device.laptop} {
    font-size: 19px;
  }
`;


export const Indicadores = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
  margin-bottom: 35px;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const EstadTiempo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 15px;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
`;

export const Icos24 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
`;

export const Puntos = styled.div`
  @media ${device.tablet} {
    margin-right: 15px;
    margin-left: 15px;
  }

  @media ${device.laptop} {
    margin-right: 27px;
    margin-left: 27px;
  }
`;

export const Icos24Hor = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;

  @media ${device.tablet} {
    margin-right: 15px;
    margin-left: 15px;
  }

  @media ${device.laptop} {
    margin-right: 27px;
    margin-left: 27px;
  }
`;

export const LDerecho = styled.div`
@media ${device.laptop} {
  background-color: #e8eaf6;
  width: 60%;
  display: flex;
  flex-direction: column;
}
@media ${device.tablet} {
  background-color: #e8eaf6;
  width: 100%;
  height:90%;
  display: flex;
  flex-direction: column;
}
`;

export const OrdenHeader = styled.div`
@media ${device.tablet} {
  
  height: 60px
}
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: #ffffff;
`;

export const OrdenFooter = styled.div`
@media ${device.tablet} {
  margin-top: 10%;
}
  margin-top: 5%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

export const ONuevas = styled.button`
@media ${device.tablet} {
  font-size: 15px;
  height: 50px;
}
  height: 100%;
  width:100%;
  color: #273947;
  font-family: Roboto;
  font-size: 120%;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-bottom:${props => props.status === 'pending' ?  '4px solid #273947' : null};
  outline:none;
  cursor: pointer;
  
`;
export const PrePickeadas = styled.button`
@media ${device.tablet} {
  font-size: 15px;
  height: 50px;

}
  height: 100%;
  width:100%;
  color: #273947;
  font-family: Roboto;
  font-size: 120%;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-bottom:${props => props.status === 'picking' ?  '4px solid #273947' : null};
  outline:none;
  cursor: pointer;
  
`;

export const ImgH = styled.img`
@media ${device.tablet} {
  
  height: 40px;
  width: 40px;
 
}
  height: 60px;
  width: 60px;
`;

// div controles

export const DivJ = styled.div`
  display: flex;
  align-items: center;
`;

export const DivP = styled.div`
  display: flex;
  align-items: center;
`;

///
export const Button = styled.button`
@media ${device.tablet} {
  
  height: 50%;
  width: 60%;
  font-size: 200%;
  cursor: pointer;
 
}
  height: 80%;
  width: 50%;
  color: #ffffff;
  border:1px solid #1db779;
  font-family: Roboto;
  font-size: 250%;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  border-radius: 3px;
  background-color: #1db779;
  outline:none;
  cursor: pointer;
`;


export const ButtonRetomar = styled.button`
@media ${device.tablet} {
  
  height: 50%;
  width: 60%;
  font-size: 200%;
  cursor: pointer;
 
}
  height: 80%;
  width: 50%;
  color: #ffffff;
  border:1px solid #F13B70;
  font-family: Roboto;
  font-size: 250%;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  border-radius: 3px;
  background-color: #F13B70;
  outline:none;
  cursor: pointer;
`;

