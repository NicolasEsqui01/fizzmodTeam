import styled from 'styled-components'
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
    height: 96vh;
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    body {
      font-family: 'Roboto', sans-serif;
    }
  `;

export const LIzquierdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  @media only screen and (max-width : 768px) {
  	width: 100%;
    height: 95vh;
  }
`
//////////
export const ContainerIzquierdo = styled.div`
display:flex;

padding-top: 30px;
`

export const ParteSuperior = styled.div`

display:flex;
align-items: center;

`
export const IconoOrden = styled.div`
display:flex;
flex-direction:column;
height:20px;

`
export const TitleOrden = styled.div`
height: 30px;
width: 80px;
color: #FF8D10;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
letter-spacing: 0;
line-height: 11px;
`
export const NumeroOrden = styled.div`
height: 19px;
width: 150px;
color: #273947;
font-family: Roboto;
font-size: 23px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
margin-top:10px;
`

export const IconoCanasta = styled.div`
display:flex;
flex-direction:column;
aling-item:center;
justify-content:center;
box-sizing: border-box;
border: 3px solid #E8EAF6;
border-radius:60px;
width: 60px;
height: 60px;
padding:12px;
margin-left: 20px;
margin-right: 20px;
`
export const DivA = styled.div`
display:flex;
justify-content:center;
width:100%;
height:90%;
`
export const Div1 = styled.div`
box-sizing: border-box;
height: 90%;
width: 100%;

border: 2px solid #273947;
margin:1px;
`


export const ParteInferior = styled.div`
margin-top:10%;
`

export const Pedidos = styled.div`
display:Flex;
align-items: center;
//justify-content:space-around;
margin-left:5px;
padding-top: 30px;
`

export const ImageBox = styled.img`
margin-right: 2%;
margin-left: 5%;
height: 50px;
width: 50px;
`
export const ImageTriangle = styled.img`
margin-right: 2%;
margin-left: 5%;
height: 50px;
width: 50px;
`

export const TitlePedidos = styled.div`
height: 25px;
width: 120px;
color: #273947;
font-family: Roboto;
font-size: 25px;
letter-spacing: 0;
line-height: 16px;

`

export const BorderNumeroPedido = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 100px;
border-radius: 50px;
background-color: #E8EAF6;
margin-left:40%;

`

export const NumeroPedidos = styled.div`
display:flex;
height: 20px;
width: 10px;
color: #273947;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
text-align: center;
`

/////////
export const LDerecho = styled.div`

background-color:#E8EAF6;
width: 65%;
display: flex;
flex-direction: column;
@media ${device.tablet} {
    width: 100%;
     display: flex;
    flex-direction: column;
  }
  `