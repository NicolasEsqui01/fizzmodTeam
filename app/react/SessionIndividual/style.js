import styled from 'styled-components'
import { device } from '../../utils/mediaQuerys';
import { stubFalse } from 'lodash';

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

///  Izquierdo

export const LIzquierdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media only screen and (max-width : 768px) {
  	width: 100%;
    height: 95vh;
  }
`
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
color: #273947;
font-family: Roboto;
font-size: 23px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
margin-top:10px;
@media ${device.mobile} {
  font-size: 18px;
}
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
@media ${device.mobile} {
height: 40px;
width: 40px;
}
`
export const ImageTriangle = styled.img`
margin-right: 2%;
margin-left: 5%;
height: 50px;
width: 50px;
@media ${device.mobile} {
  height: 40px;
  width: 40px;
  }
`


export const SectorCongelado = styled.div`
height: 25px;
width: 50%;
color: #273947;
font-family: Roboto;
font-size: 25px;
letter-spacing: 0;
line-height: 16px;
@media ${device.mobile} {
  font-size: 22px;
  }
`

export const TitlePedidos = styled.div`
height: 25px;
width: 120px;
color: #273947;
font-family: Roboto;
font-size: 25px;
letter-spacing: 0;
line-height: 16px;
@media ${device.mobile} {
  font-size: 22px;
}

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

///////// Derecho

export const LDerecho = styled.div`

background-color:#E8EAF6;
width: 60%;
display: flex;
flex-direction: column;
align-items:center;
@media ${device.tablet} {
    width: 100%;
     display: flex;
    flex-direction: column;
  }
  `;

export const HeaderDiv = styled.div`
@media ${device.tablet} {
height:50px;
}
display:flex;
justify-content: space-between;
width: 100%;
height: 8%;

`

export const Text = styled.h1`
@media ${device.tablet} {
  font-size: 15px;
  }
margin-top: 4%;
height: 15px;
  width:30%;
  color: #273947;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
`

export const Productos = styled.div`
@media ${device.tablet} {
  height:400px;
  }
margin-top:10px;
margin-bottom:15px;
background-color:#FFFFFF;
height:33%;
display: flex;
flex-direction: column;
border-right: ${({ estado }) => estado === 'picked' ? '15px solid rgb(8, 196, 196)' : '15px solid #2979FF'};
border-top-right-radius: 5px;
border-bottom-right-radius:5px;
`
// omitido #F13B70; picked #08C4C4;

export const DivScroll = styled.div`
@media ${device.tablet} {
  
  height: 90%;
 
}
  overflow: auto;
  height: 100%;
  width: 85%;

`


//imgs

export const Img = styled.img`
@media ${device.tablet} {
  height:30%;
  width:20%;
  }
height: 60%;
width: 15%;
margin-top:3%;
margin-left:2%;
`

export const Icono = styled.img`
 height:50%;
 width:10%;
 margin-left:2%;
 border-left: 3px solid #08C4C4
`
export const Icono2 = styled.img`
@media ${device.tablet} {
  height:40px;
  width:50px;
  }
 height:30px;
 width:30px;
 margin-left:2%;
 margin-top 10%;

`
export const Icono3 = styled.img`
@media ${device.tablet} {
  height:40%;
  width:9%;
  margin-left:0;
  margin-right:2%;
  }
 height:40%;
 width:7%;
 margin-left:2%;
`
export const Icono4 = styled.img`
 height:40px;
 width:40px;
 margin-left:5%;
 margin-right:5%;
`



export const Descripcion = styled.div`
@media ${device.tablet} {
  height:20%;
  width:90%;
  }
width:90%;
margin-top:3%;
margin-left:2%;
height: 40px;

color: #939598;
font-family: Roboto;
font-size: 100%;
letter-spacing: 0;
line-height: 18px;

`
export const Ean = styled.div`
@media ${device.tablet} {
  height:20%;
  font-size: 20px;
  width:70%;

  }
width:30%;
color: #273947;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
letter-spacing: 0;
margin-left:2%;
margin-top 10%;
`

export const Num = styled.p`
@media ${device.tablet} {
  width:15%;
  }
  height: 30px;
  width:5%;
  color: #273947;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 0;
`
export const Num2 = styled.p`
@media ${device.tablet} {
  
  font-size: 15px;
  }
height: 16px;
width: 50%;
color: #939598;
font-family: Roboto;
font-size: 20px;
letter-spacing: 0;
line-height: 14px;

`

export const Cantidad = styled.div`
@media ${device.tablet} {
  width:80%;
  margin-left:0;
  margin-right:0;
  }

border: 1px solid #E8EAF6;
margin-left:40%;
margin-right:5%;
margin-top 7%;
font-size:140%;
color: #273947;
font-family: Roboto;
line-height:45px;
padding:5px;
height:60%;
width:30%;
display:flex;
justify-content:center;
align-content: center;
border-radius:30px

`


//controladores

export const DivX = styled.div`
width:100%;
`

export const DivR = styled.div`
@media ${device.tablet} {
  height:70%;
  width:95%;
  }
height:70%;
width:100%;
display:flex;

`
export const DivP = styled.div`
@media ${device.tablet} {
  height:30%;
  }
width:100%;
display:flex;
height:30%;
align-items:center;

`
export const DivZ = styled.div`
@media ${device.tablet} {
  display:flex;
  flex-direction:column;
  margin-right:20%;
  }
display:flex;
align-items:center;
`
export const DivB = styled.div`
@media ${device.tablet} {
  display:flex;
  flex-direction:column;
  margin-left:10%;
  }

margin-left: 20%;
margin-right:5%;
width:10%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
export const DivK = styled.div`
height:2px;
width:100%;
background-color:#E8EAF6;
`


