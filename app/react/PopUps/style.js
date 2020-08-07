import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/mediaQuerys';


const slideRight = keyframes`
0% {
  transform: scaleX(0.4);
  transform-origin: 100% 100%;
}
100% {
  transform: scaleX(1);
  transform-origin: 100% 100%;
}
`;

const ScaleUp = keyframes`
  0% {transform: scaleY(0.4);
  transform-origin: 0% 100%;}
  100% {transform: scaleY(1); 
  transform-origin: 0% 100%;   }
`
const Scaleleft = keyframes`
0% {
  transform: scaleX(0.4);
  transform-origin: 0% 0%;
}
100% {
  transform: scaleX(1);
  transform-origin: 0% 0%;
}
`

const ScaleCenter = keyframes`
0% {
  transform: scale(0.5);
}
100% {
  transform: scale(1);
}
`
const ScaleDown = keyframes`
0% {
  transform: scaleY(0.4);
  transform-origin: 100% 0%;
}
100% {
  transform: scaleY(1);
  transform-origin: 100% 0%;
}`

export const ImgX = styled.img`
width: 50px;   
height: 50px;   
@media ${device.tablet} 
{
  width: 20px;     
  height: 20px;  
}
`
export const ImgM = styled.img`
width: 75px;
border-radius:10px;
  height: 100px;
  @media ${device.tablet} {
    width: 50px;
  }
`

export const ImgX2 = styled.img`
cursor: pointer;
width:30px;
height:30px;
`;

const DiagonalEffect = keyframes`
0% {
  transform: rotate3d(1, 1, 0, 0deg);
  transform-origin: 100% 0%;
}
50% {
  transform: rotate3d(1, 1, 0, -180deg);
  transform-origin: 100% 0%;
}
100% {
  transform: rotate3d(1, 1, 0, -360deg);
  transform-origin: 100% 0%;
}
`


export const ImgO = styled.img`
height:100px;
width:100px;
margin:6%;
@media ${device.tablet} {
  width:50px;
  height:50px;
`

////POPups Sstitutos, Obvservacion, Opciones/////////////////////////////

export const Button = styled.button`
  width: 70px;
  height: 70px;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
`;
export const Button2 = styled.button`
  width: 70px;
  height: 70px;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
`;
export const Img = styled.img`
  @media ${device.tablet} {
    height: 50px;
    width: 50px;
  }
  margin-left: 5%;
  height: 60px;
  width: 60px;
  background-color: #273947;
  border-radius: 50px;
  padding: 7px;
`;
export const ImgP = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 7%;
  margin-left: 7%;
  @media ${device.mobile} {
    width: 25px;
    height: 25px;
  }
`;

export const ButtonX = styled.button`
text-align:right;
margin-top:7px;
margin-right:7px;
border: 1px solid transparent;
background-color: transparent;
outline:none;
@media ${device.tablet} {
  }
`;

export const ImgT = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 5%;
`;

export const ImgFlechi = styled.img`
 width: 40px;
 height: 40px;
`
export const NumeroFlechi = styled.p`
height: 30px;
width: 40px;
color: #273947;
font-family: Roboto;
font-size: 20px;
letter-spacing: 0;
line-height: 16px;
text-align: center;
`
export const FlechitaDone = styled.div`
display:flex;
flex-direction:column;
width:${props => props.Done}%;
justify-content:center;
align-items:flex-end;
`

export const ButtonX4 = styled.button`
  width: 10%;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
  margin-left: 90%;
`;

export const Text = styled.p`
  color: #939598;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
`;
export const TituloOb = styled.h1`
  margin-left: 3%;
  width: 100%;
  font-size: 30px;
  @media ${device.tablet} {
    font-size: 20px;
    width: 70%;
  }
`;
export const PopUpProdu = styled.div`
  width: 100%;
  height: 25%;
  background-color: #ffffff;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logout = styled.button`
  height: 14px;
  width: 52px;
  color: #939598;
  font-family: Roboto;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 14px;
  width: 15%;
  font-size: 140%;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
  outline: none;
  @media ${device.tablet} {
    font-size: 100%;
    width: 40%;
  }
`;
////POPups Balance ////////////////
export const PopUpProduAcum = styled.div`
 width:100%;
 display:flex;
 align-items: center;
 background-color:#FFFFFF;
 border-radius: 10px;
 margin-bottom:10px;
`
export const HeaderDiv = styled.div`
@media ${device.tablet} {
height:50px;
}
display:flex;
align-items:center;
width: 90%;
height: 8%;
margin-left:5%;
`
export const DivScroll = styled.div`
@media ${device.tablet} {
  height: 70%;
}
  overflow: auto;
  height: 100%;
  margin-left: 5%;
  width: 90%;
  height: 80%;
`

export const TextB = styled.h1`
@media ${device.tablet} {
  font-size: 15px;
  }
  width: 47%;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
`;
export const TextB2 = styled.h1`
  @media ${device.tablet} {
    font-size: 15px;
  }
  width: 47%;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
`
export const Descripcion = styled.div`
@media ${device.tablet} {
  height:20%;
  width:90%;
  }
margin-left:2%;
height: 20px;
color: #939598;
font-family: Roboto;
line-height: 18px;

`
export const ButtonM = styled.button`
background-color:#FFFFFF;
outline:none;
border: 1px solid #FFFFFF;
cursor:pointer;
`

export const Icono = styled.img`
@media ${device.tablet} {
  height:40px;
  width:50px;
  }
  width: 50%;
  margin-left: 2%;
  height: 40px;
  color: #939598;
  font-family: Roboto;
  font-size: 100%;
  letter-spacing: 0;
  line-height: 18px;
`;

// export const Icono = styled.img`
//   @media ${device.tablet} {
//     height: 40px;
//     width: 50px;
//   }
//   height: 30px;
//   width: 30px;
//   margin-left: 2%;
// `;

export const Ean = styled.div`
  @media ${device.tablet} {
    height: 10%;
    font-size: 10px;
    width: 70%;
    margin-left: 12%;
  }
color: #273947;
font-family: Roboto;
font-weight: bold;
margin-left:2%;

`
export const Cantidad = styled.div`
@media ${device.tablet} {
  width:30%;
  height:35%;
  margin-left:0;
  margin-right:0;
  font-size:110%;
  }
padding-top: 10px;
padding-bottom: 10px;
border: 1px solid #E8EAF6;
font-size:130%;
color: #273947;
font-family: Roboto;
line-height:45px;
padding:5px;
height:55%;
width:20%;
display:flex;
justify-content:center;
align-items: center;
border-radius:30px;
font-weight: bold;
line-height: 19px;
text-align: center;

`
//////controladores/////////

export const DivCC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
  margin-top: 5%;
`;

export const DivText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e8eaf6;
`;
export const DivText2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const DivExit = styled.div`
  display: flex;
  height: 15%;
  width: 100%;
  align-items: center;
  border-top: 2px solid #e8eaf6;
`;

export const DivControl = styled.div`
  margin-top: 10%;
  display: flex;
  width: 100%;
  height: 10%;
`;

export const DivIM2 = styled.div`
  width: 10%;
`;
export const DivCON = styled.div`
  width: 90%;
`;

export const DivP = styled.div`
  overflow: auto;
  height: 100%;
`;
export const DivW = styled.div`
 height:30%;
 width:100%;
 display:flex;
 flex-direction:row
 justify-content:start;
 align-items:center;
`;
export const DivW2 = styled.div`
 height:70%;
 width:100%;
 display:flex;
 flex-direction:row
 justify-content:start;
 align-items:center;
`;

export const DivVC = styled.div`
  display: flex;
`;

export const DivC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e8eaf6;
  @media ${device.mobile} {
    width: 100%;
  }
`;
export const DivCXL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15%;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e8eaf6;
  @media ${device.mobile} {
    width: 100%;
  }
`;
//sustituto
export const DIV = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 1 ? null : `display:none`)};
`;
export const Color = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #273947;
  opacity: 80%;
`;
export const DivV = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  background-color: #ffffff;
  width: 50%;
  height: 100vh;
  flex-direction: column;
  animation: ${slideRight} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  @media ${device.mobile} {
    width: 90%;
  }
`;

//obvservacion
export const DIV2 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 2 ? null : `display:none`)};
`;

export const DivO = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 50%;
  height: 100vh;
  flex-direction: column;
  position: fixed;
  right: 0px;
  animation: ${slideRight} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  @media ${device.mobile} {
    width: 90%;
  }
`;
export const DivF = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    margin-right: 20%;
  }
  display: flex;
  align-items: center;
`;

//balance
export const DivZ = styled.div`
display: flex;    
position:fixed;
background-color:#273947;
width: 45%;
flex-direction: column;
opacity: 95%;
margin-top:-6%;
height:75%;
animation: ${ScaleDown} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
${props => props.active === 3 ? null : `display:none`};
@media ${device.mobile} {
width: 90%;
margin-top: 0%;
height: 56%;
}
`
// export const DivR = styled.div `
// @media ${device.tablet} {
//   height:70%;
//   width:95%;
//   }
// `;

export const DivR = styled.div`
  @media ${device.tablet} {
    height: 70%;
    width: 95%;
  }
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
`;

//opciones
export const DIV4 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 4 ? null : `display:none`)};
`;

export const DivM = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

export const DivH = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;
export const Significado = styled.p`
  height: 30px;
  width: 100%;
  color: #273947;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 12px;
  }
`;
export const DivA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  heigth: 40%;
`;
export const DivB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  heigth: 40%;
  margin-top: 8%;
`;
export const DivN = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: start;
  margin-left: 6%;
  @media ${device.mobile} {
    justify-content: space-around;
    align-items: center;
    place-self: center;
    width: 100%;
  }
`;
export const DivG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`;
export const DivG2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
`;

////Info order
export const DIV5 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 5 ? null : `display:none`)};
`;
export const DivQ = styled.div`
  height: 30%;
  width: 100%;
`;
export const DivS = styled.div`
  height: 20%;
  width: 100%;
`;
export const Num = styled.p`
height: 20px;
width: 100%;
color: #273947;
font-family: Roboto;
font-size: 30px;
letter-spacing: 0;
line-height: 16px;
@media ${device.mobile} {
  font-size: 15px;
  }
}
`;

export const PP = styled.span`
  height: 40px;
  width: 10%;
  color: #273947;
  font-family: Roboto;
  font-size: 25px;
  letter-spacing: 0;
  line-height: 19px;
  margin-right: 3%;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const PPP = styled.span`
  height: 16px;
  width: 100%;
  color: #273947;
  font-family: Roboto;
  font-size: 25px;
  letter-spacing: 0;
  line-height: 16px;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;
export const Abajo = styled.p`
  height: 20px;
  margin-top: 3%;
  width: 100%;
  color: #939598;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 14px;
`;

export const NN = styled.span`
  height: 40px;
  width: 30px;
  color: #273947;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const Nn = styled.span`
  height: 40px;
  width: 50px;
  color: #273947;
  font-family: Roboto;
  font-size: 25px;
  letter-spacing: 0;
  line-height: 19px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const P = styled.p`
  margin-top: 5%;
  margin-left: 5%;
  height: 14px;
  width: 100%;
  color: #939598;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  @media ${device.mobile} {
    font-size: 15px;
  }
`;

export const DivMN = styled.div`
  width: 100%;
  margin-top: 5%;
`;
export const DivIM = styled.div`
  margin-right: 7%;
  margin-left: 7%;
`;

export const DivS2 = styled.div`
  height: 20%;
`;
/// Servicios extra
export const DIV6 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 6 ? null : `display:none`)};
`;
export const Servicios = styled.div`
  height: 100%;
  width: 90%;
  color: #939598;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 3%;
`;
export const DivLI = styled.div`
 display:flex
 height: 15%;
 width: 100%;
`;
export const DivPunto = styled.div`
  display: flex;
  width: 10%;
  justify-content: center;
  margin-top: 4%;
`;
export const Punto = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #08c4c4;
`;
////InfoPicker
export const DIV7 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 7 ? null : `display:none`)};
`;

///// Controlador de peso

export const DIV8 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => props.active === 8 ? null : `display:none`};
`;

export const Advertencia = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 35%;
  background-color: #ffffff;
  margin-top: 20%;
  margin-left: 25%;
  border-radius: 10px;
  animation: ${ScaleCenter} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
export const PPPP = styled.span`
  height: 20%;
  width: 450px;
  color: #939598;
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 25px;
  text-align: center;
`;
export const Peso = styled.div`
  border: 3px solid #ff4343;
  display: inline;
  height: 50%;
  width: 15%;
  font-size: 30px;
  font-weight: 500;
  color: #ff4343;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Siguiente = styled.button`
  width: 40%;
  height: 100px;
  border-radius: 3px;
  background-color: #1db779;
  border: 1px solid #1db779;
  color: #ffffff;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 15px;
  outline: none;
  cursor: pointer;
  @media ${device.mobile} {
    width: 35%;
    height: 40px;
    font-size: 18px;
  }
`;

export const VolverAPesar = styled.button`
  width: 40%;
  height: 100px;
  border-radius: 3px;
  background-color: #ff4343;
  border: 1px solid #ff4343;
  color: #ffffff;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 5%;
  outline: none;
  cursor: pointer;
  @media ${device.mobile} {
    width: 35%;
    height: 40px;
    font-size: 18px;
  }
`;

///Baterry
export const DIV9 = styled.div`
  width: 100%;
  position: fixed;
  ${props => props.cerrar ? null : `display:none`}; 
  `;
export const ImgBat = styled.img`
  height: 150px;
  width: 150px;
  margin-top: 8%;
`;
export const Color2 = styled.div`

  width: 100%;
  height: 100vh;
  background-color: #273947;
`;

export const Cuerpo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-left: 15%;
  width: 70%;
  height: 80%;
  border-radius: 10px;
  animation: ${DiagonalEffect} 0.4s linear both;
  ${(props) =>
    props.Bate === 0.3 ? `background-color:#FF8D10` : `background-color:#FF4343`}
`;

export const Entendido = styled.button`
  width: 40%;
  height: 70px;
  border-radius: 3px;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  ${(props) =>
    props.Bate >= 0.3 ? `color:#FF8D10` : `color:#FF4343`};
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 5px;
  margin-top: 50px;
  outline: none;
  cursor: pointer;
  @media ${device.mobile} {
    width: 35%;
    height: 40px;
    font-size: 18px;
  }
`;
export const Bat = styled.h1`
  height: 28px;
  width: 100%;
  color: #ffffff;
  font-family: Roboto;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 28px;
  text-align: center;
`;

export const Adver = styled.p`
  height: 15%;
  width: 50%;
  color: #ffffff;
  font-family: Roboto;
  font-size: 30px;
  letter-spacing: 0;
  line-height: 45px;
  text-align: center;
`;
export const Porcentaje = styled.p`
  height: 33px;
  width: 202px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 28px;
  letter-spacing: 0;
  line-height: 33px;
  text-align: center;
`;

//////////////////////
export const DivX = styled.div`
  width: 50%;
  @media ${device.mobile} {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;
export const Espacio = styled.div`
  height: 10px;
  width: 100%;
  background-color: #273947;
`;
export const Espacio4 = styled.div`
  height: 5px;
  width: 100%;
  background-color: #e8eaf6;
`;
//PopUpOmitir

export const DivOmitir = styled.div`
display: flex;    

position:fixed;
background-color:#273947;
width: 15%; 
flex-direction: column;
opacity: 90%;
margin-top:6%;
height:30%;

animation: ${ScaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
${props => props.active === 10 ? null : `display:none`};
@media ${device.mobile} {
width: 30%;
margin-top: 33%;
height: 20%;
}
`

//${props => props.active === 10 ? null : `display:none`};

export const DivBotones = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

`;
export const DivBotonFaltante = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 90%;
height: 70px;
border-radius: 3px;
background-color: #FF4343;
border: 1px solid #FF4343;
color: #ffffff;
font-family: Roboto;
font-size: 23px;
font-weight: bold;
-webkit-letter-spacing: 0;
-moz-letter-spacing: 0;
-ms-letter-spacing: 0;
letter-spacing: 0;
text-align: center;
outline: none;
cursor: pointer;
margin: 2%;

@media ${device.mobile} {
  width: 90%;
  margin-top: 5%;
  height: 40%;
  font-size: 20px;
  }
`;

export const DivBotonOmitir = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 90%;
height: 70px;
border-radius: 3px;
background-color: #1DB779;
border: 1px solid #1DB779;
color: #ffffff;
font-family: Roboto;
font-size: 23px;
font-weight: bold;
-webkit-letter-spacing: 0;
-moz-letter-spacing: 0;
-ms-letter-spacing: 0;
letter-spacing: 0;
text-align: center;
outline: none;
cursor: pointer;
margin: 2%;

@media ${device.mobile} {
  width: 90%;
  margin-top: 5%;
  height: 40%;
  font-size: 20px;
  }
`;
//////MANUAL DE USUARIO

export const DIV11 = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  ${(props) => (props.active === 11 ? null : `display:none`)};
`;
//  ${(props) => (props.active === 11 ? null : `display:none`)};

export const TituloManual = styled.h1`
  margin-left: 3%;
  width: 100%;
  font-size: 30px;
  color:#273947;
  @media ${device.mobile} {
    font-size: 20px;
    width: 70%;
  }
`;

export const DivContenedorManual = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  background-color: #ffffff;
  width: 60%;
  height: 100vh;
  flex-direction: column;
  overflow: auto;
  animation: ${Scaleleft} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  @media ${device.mobile} {
    width: 90%;
  }
`;
export const DivInferior = styled.div`
overflow: auto;
margin 15px;
`;

export const DivManual1 = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  margin-bottom: 15px;
  margin-top: 15px;
  border-bottom: 3px solid #e8eaf6;
  @media ${device.mobile} {
    display: flex;
    flex-direction:column;
    justify-content:center;
  }
  `;
export const DivTitleManual1 = styled.div`
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 28px;
  width: 90%;
  color:#273947;
  margin-top: 15px;
  @media ${device.mobile} {
    font-size: 18px;
    width: 70%;
  }
`;

export const ImgManual1 = styled.img`
width: 50%;
margin-right: 5px;
@media ${device.mobile} {
  width: 90%;
  margin-right: 2px;
}
`;

export const DivDesManual1 = styled.div`
  width: 40%;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  text-align: center;
  align-self: center;
  font-size:22px;
  color:#273947;
  @media ${device.mobile} {
    width: 90%;
    font-size:14px;
  }
`;

export const ImgManual2 = styled.img`
width: 50%;
margin-left: 5px;
@media ${device.mobile} {
  width: 90%;
  margin-left: 2px;
}
`;

export const DivDesManual2 = styled.div`
  width: 40%;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  text-align: center;
  align-self: center;
  font-size:22px;
  color:#273947;
  @media ${device.mobile} {
    width: 90%;
    font-size:14px;
  }
`;