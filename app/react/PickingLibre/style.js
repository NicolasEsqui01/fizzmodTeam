import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
display: flex;
width: 100%;
height: 90vh;
//flex-direction: row;

`;

///////////////////////////// COLUMNA IZQUIERDA /////////////////////////////
export const ColuIzquierda = styled.div`
display: flex;
width: 35%;
height: 100%;
//flex-direction: column;
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
width: 30%;
margin-left: 5%;                                
`;

export const PickingLogo = styled.img`
height: 70px;
width: 70px;
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

`;

/////////////////////////////// COLUMNA DERECHA //////////////////////////
export const ColuDerecha = styled.div`
display: flex;
width: 65%;
height: 100%;
flex-direction: column;
background-color: #E8EAF6;
//justify-content: center;

`;

export const LogoDerechoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10%;
justify-content: evenly;
`;

export const ImagenGrandeDiv = styled.div`


`;

export const ImagenGrande = styled.img`
height: 100px;
width: 100px;
`;

export const H1PickingLibre = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 34px;
`;

export const H1Comenzar = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 24px;
`;

////////////////////////// FORM BUSCAR PRODUCTOS ////////////////


export const DivBuscador = styled.div`
display: flex;
align-itens: center;
justify-content: center;

`;



export const FormBusqueda = styled.form`
display: flex;
width: 400px;
height: 50px;
border-radius: 50px;
@media ${device.tablet} {
    margin-left: 20px;
    
  } 
`;

export const InputBusqueda = styled.input`
display: flex;
width: 400px;
height: 50px;
padding-left: 3%;
border: none;
background-color: white;
outline: none;
border-radius: 50px;
`;




//////////////////////// FOOTER BOTONES ////////////////////////

export const Botones = styled.div`
    display: flex;
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media ${device.mobile} {
    margin-bottom:15px;
}     
`;

export const Cancelar = styled.button`
   width:40%;
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
  margin-right: 5px;
  outline:none;
 
  @media ${device.mobile} {
  width:35%;
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
  width:40%;
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
  margin-left: 5px;
  outline:none;
  cursor: pointer;
  @media ${device.mobile} {
  width:35%;
  height:40px;
  font-size: 18px;
}
  `;