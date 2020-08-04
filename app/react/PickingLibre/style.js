import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
display: flex;
width: 100%;
height: 93vh;
//flex-direction: row;
@media ${device.tablet} {
    
    flex-direction: column;
  }
`;

///////////////////////////// COLUMNA IZQUIERDA /////////////////////////////
export const ColuIzquierda = styled.div`
display: flex;
width: 35%;
height: 100%;
flex-direction: column;
background-color: white;
@media ${device.tablet} {
    width: 100%;
    height:90%;
    display: flex;
    flex-direction: column;
  }
`;

export const PickingTituloDiv = styled.div`
display: flex;
height: 15%;
width: 100%;
flex-direction: row;
align-items: center;
`;

export const PickingLogoDiv = styled.div`
display: flex;
//height: 10px;
margin-left: 5%;

`;

export const PickingLogo = styled.img`
height: 60px;
width: 70px;
@media ${device.tablet} {
    height: 30px;
    width: 35px;
}
`;

export const PickingTitulo = styled.div`
//height: 24px;
width: 70%;
color: #273947;
//font-family: Roboto;
font-size: 23px;
letter-spacing: 0;
line-height: 24px;
justify-content: center;
margin-left: 5%;

`;
////////////////////////////////////////////////
export const DivInfoProdu = styled.div`
display: flex;
height: 43%;
width: 100%;
flex-direction: row;
margin-top: 3%;

`;


export const ParteIzqDiv = styled.div`
display: flex;
height: 100%;
width: 27%;
flex-direction: column;
align-items: center;

`;


/////////////////////// LOGO CAJITAS ///////////////////////
export const Sup = styled.div`
align-items: center;
justify-content: center;

`;

export const CuadroGrill = styled.div`
  display: flex;    
  width: 50%;
  height: auto;
  flex-direction: row;
  border: 1px solid #D1D3D4;
  border-radius:10%;
  margin: 4px 6px 4px 0px;
`;

export const ContainerGrillCuadros = styled.div`
  display: flex;    
  width: 50px;
  height: 20px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
`;

export const NumCuadrados = styled.div`
  display: flex;
  margin-left:7px;    
  width: 50%;
  //height: 48px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 3px solid #A27BDB;
  font-size: 22px;
  color: #273947;
  font-family: Roboto;
  font-weight: 900;
  letter-spacing: 0;
  @media ${device.mobile} {
  font-size: 20px;
  height: 30px;
}  
`;

export const LogoCajitasDiv = styled.div`
display: flex;
height: 60px;
width: 60px;
`;
export const LogoCajitasImg = styled.img`
display: flex;
height: 60px;
width: 60px;
`;

export const ParteDerDiv = styled.div`
display: flex;
//height: 35%;
width: 73%;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const ImagenProduDiv = styled.div`
display:flex;
height:180px;
width: 200px;
@media ${device.tablet} {
    height:90px;
    width: 100px;
    margin-left: 30%;
  }
`;

export const ImagenProduImg = styled.img`
display:flex;
height:180px;
width: 200px;
@media ${device.tablet} {
    height:90px;
    width: 100px;
  }
`;

export const DescriProdu = styled.div`
  //height: 36px;
  //width: 174px;
  margin-right:25px;
  margin-top: 15px;
  padding-bottom: 20px;
  color: #939598;
  //font-family: Roboto;
  font-size: 18px;
  text-align: center;
  
  border-bottom: 2px solid #E8EAF6;
  @media ${device.tablet} {
    margin-bottom: 13px;
  }
`;

export const Linea = styled.div`
  height: 2px;
  width: 100%;
  margin-left: 25%;
  margin-right: 15%;
  background-color: #E8EAF6;
`;

///////////////////////////// COLU IZQ INFO PRECIO //////////////////////

export const DivGralPrecio = styled.div`
display: flex;
height: 10%;
width: 100%;
flex-direction: row;
margin-top: 26px;
@media ${device.tablet} {
height: 70px;
//margin-top: 30px;
}

`;

export const DivPrecio = styled.div`
display: flex;
//height: 35%;
width: 65%;
flex-direction: column;

align-items: center;

`;

export const PrecioTachado = styled.div`

height: 14px;
  
  color: #939598;
  //font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

export const Precio = styled.div`
height: 24px;
margin-top: 20px;
color: #2979FF;
//font-family: Roboto;
font-size: 26px;
font-weight: bold;
letter-spacing: 0;
line-height: 21px;
text-align: center;

`;

export const PesoDiv = styled.div`
display: flex;
width: 35%;
flex-direction: column;
margin-right: 4%;
align-items: center;
`;

export const Peso = styled.div`
display: flex;
height: 60px;
width: 110px;
align-items: center;
justify-content: center;
text-align: center;
border: 1px solid #E8EAF6;
@media ${device.tablet} {
    height: 40px;
    
}
`;


export const H1Peso = styled.h1`
  color: #273947;
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 18   px;
  }
`;
/////////////////////////////// COLUMNA DERECHA //////////////////////////
export const ColuDerecha = styled.div`
display: flex;
width: 65%;
height: 100%;
flex-direction: column;
background-color: #E8EAF6;
//justify-content: space-evenly;
align-items:center;
@media ${device.tablet} {
    width: 100%;
    height:90%;
    display: flex;
    flex-direction: column;
  }
`;

export const LogoDerechoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 7%;
//justify-content: evenly;
`;

export const ImagenGrandeDiv = styled.div`
height: 135px;
width: 125px;
@media ${device.tablet} {
    height: 65px;
    width: 85px;
}
`;

export const ImagenGrande = styled.img`
height: 135px;
width: 125px;
@media ${device.tablet} {
    height: 65px;
    width: 85px;
}
`;

export const H1PickingLibre = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 33px;
  margin-top: 6%;
  @media ${device.tablet} {
    font-size: 23px;
  }
`;

export const H1Comenzar = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 22px;
  margin-top: 8%;
  @media ${device.tablet} {
    font-size: 19px;
  }
`;

////////////////////////// FORM BUSCAR PRODUCTOS ////////////////


export const DivBuscador = styled.div`
display: flex;
height:70px;
align-itens: center;
justify-content: center;
border-radius: 50px;
background-color: white;
width:400px;  
margin-top: 7%;
margin-bottom: 10%;  
`;
export const DivImagenBuscador = styled.button`
display: flex;
margin-left: 40px;
margin-top: 10px;
height: 40px;
width: 40px;
border: none;
background-color: transparent;
align-items:center;
justify-content: center;
//outline: none;
`;

export const ImagenLupa = styled.img`
height: 40px;
width: 40px;
`;


export const FormBusqueda = styled.form`
display: flex;
width: 300px;
height: 70px;
//border-radius: 50px;
@media ${device.tablet} {
    margin-left: 20px;
    
  } 
`;

export const InputBusqueda = styled.input`
display: flex;
width: 300px;
height: 70px;
text-align: center;
font-size: 20px;
color: #939598;
padding-left: 3%;
border: none;
background-color: transparent;
outline: none;
//border-radius: 50px;
`;




//////////////////////// FOOTER BOTONES ////////////////////////

export const Botones = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media ${device.mobile} {
    margin-bottom:20px;
}     
`;

export const Cancelar = styled.button`
   width:35%;
   height:70px;
   border-radius: 3px;
   background-color: #FF4343;
   color: #ffffff;
   border: 1px solid #FFFFFF;
   cursor:pointer;
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-right: 7px;
  outline:none;
 
  @media ${device.mobile} {
  width:32%;
  height:40px;
  font-size: 18px;
  padding: 3px 10px 3px 10px;
}
`;

export const BotonTeclado = styled.button`
  border-radius: 3px;
  border:0px solid #1DB779;
  background:none;
  outline:none;
  cursor: pointer;
  `;

export const Teclado = styled.img`
  width:auto;
  height:70px;
  @media ${device.mobile} {
  height:40px;
}
`;

export const Siguiente = styled.button`
  width:35%;
  height:70px;
  border-radius: 3px;
  background-color: #1DB779;
  border:1px solid #1DB779;
  color: #ffffff;
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 7px;
  outline:none;
  cursor: pointer;
  @media ${device.mobile} {
  width:32%;
  height:40px;
  font-size: 18px;
}
  `;