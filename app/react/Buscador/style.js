import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

/////////////////////// BARRA DE BUSCADOR ////////////////////////////
export const BuscadorDiv = styled.div`
display: flex;
width: 100%;
height: 13vmin;
align-items: center;
flex-direction: row;
`;

export const DivImagenBuscador = styled.button`
display: flex;
margin-left: 40px;
//height: 30px;
//width: 30px;
border: none;
background-color: transparent;
//outline: none;
`;

export const ImagenLupa = styled.img`
height: 40px;
width: 40px;
`;

export const FormBusqueda = styled.form`
display: flex;
margin-left: 60px;
width: 400px;
height: 40px;
@media ${device.tablet} {
    margin-left: 20px;
    
  } 
`;

export const InputBusqueda = styled.input`
display: flex;
width: 400px;
height: 40px;
padding-left: 3%;
border: none;
background-color: transparent;
outline: none;
`;



export const DivGeneral = styled.div`
display: flex;
width: 100%;
height: 80vh;
background-color: #E8EAF6;
flex-direction: column;
//padding-top: 3%;

`;

/////////////////////////// DIV DE PRODUCTO INDIVIDUAL /////////////////////////

export const ProductoPreciodiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
//align-items: center;
margin-left: 5%;
margin-right: 5%;

margin-bottom: 2%;
padding-top: 2%;
`;

export const ProductoTitulo = styled.div`
  
  color: #273947;
  //font-family: Roboto;
  font-size: 13px;
  width: 45%;
  @media ${device.tablet} {
    font-size: 10px;
       
  } 
`;

export const PrecioTitulo = styled.div`
color: #273947;
  //font-family: Roboto;
  font-size: 13px;
  margin-left: 13%;
  width: 80px;
  @media ${device.tablet} {
    font-size: 10px;
    
    
  } 

`;

export const ProductosDiv = styled.div`
display: flex;
//height: 110px;
width: 90%;
margin-left: 5%;
margin-right: 5%;
background-color: white;
margin-bottom: 3%;
align-items: center;
//justify-content: center;

`;

export const DivIzqProducto = styled.div`
display: flex;
//flex-direction: column;
width: 50%;
//height: 
//justify-content: flex-start;
margin: 10px;
@media ${device.tablet} {
    //font-size: 12px;
    width: 100%;
    
  } 

`;

export const ImgProdu = styled.div`
//width: 50%;
//height: 100%;
flex-direction: column;
`;

export const ImagenProdu = styled.img`
width: 100px;
height: auto;
@media ${device.tablet} {
    width: 70px;    
    height: auto;
  } 

`;
export const DescriProducto = styled.div`
display: flex;
flex-direction: column;
//width: 80%;
justify-content: space-evenly;
margin-left: 20px;
@media ${device.tablet} {
    width: 200px;    
    height: auto;
  } 


`;

export const H1Descri = styled.div`
height: 40px;
  //width: 100%;
  color: #939598;
  //font-family: Roboto;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 21px;
  @media ${device.tablet} {
    font-size: 10px;
    letter-spacing: 0;
    line-height: 10px;
  } 

`;

export const DivFilaBarritas = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;

export const ImagenBarritasProdu = styled.img`
height: 20px;
width: 24px;
@media ${device.tablet} {
    height: 16px;
     width: 18px;
    
    
  }
`;

export const H1codBarras = styled.div`
  height: 14px;
  //width: 97px;
  color: #273947;
  //font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  margin-left: 10px;
  @media ${device.tablet} {
    font-size: 10px;
    
    
  }

`;

export const H1Precio = styled.div`
    
  height: 16px;
  width: 80px;
  color: #2979FF;
  //font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 13%;
  @media ${device.tablet} {
    font-size: 10px;
    justify-content: flex-start;
    width: 60px;
    margin-left: 0%;
  } 

`;