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
  width: 40%;
  @media only screen and (max-width : 768px) {
  	width: 100%;
    height: 95vh;
  }
`


// DERECHO

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

export const HeaderDiv = styled.div `
@media ${device.tablet} {
height:50px;
}
display:flex;
justify-content: space-between;
width: 100%;
height: 8%;

`

export const Text = styled.h1 `
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

export const Productos = styled.div `
@media ${device.tablet} {
  height:400px;
  }
margin-top:10px;
background-color:#FFFFFF;
height:33%;
display: flex;
flex-direction: column;
border-right: 15px solid #2979FF;
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

export const Img = styled.img `
@media ${device.tablet} {
  height:30%;
  width:20%;
  }
height: 60%;
width: 15%;
margin-top:3%;
margin-left:2%;
`

export const Icono = styled.img `
 height:50%;
 width:10%;
 margin-left:2%;
 border-left: 3px solid #08C4C4
`
export const Icono2 = styled.img `
@media ${device.tablet} {
  height:40px;
  width:50px;
  }
 height:30px;
 width:30px;
 margin-left:2%;
 margin-top 10%;

`
export const Icono3 = styled.img `
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
export const Icono4 = styled.img `
 height:40px;
 width:40px;
 margin-left:5%;
 margin-right:5%;
`



export const Descripcion = styled.div `
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

export const Cantidad =styled.div `
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

export const DivX = styled.div `
width:100%;
`

export const DivR = styled.div `
@media ${device.tablet} {
  height:70%;
  width:95%;
  }
height:70%;
width:100%;
display:flex;

`
export const DivP = styled.div `
@media ${device.tablet} {
  height:30%;
  }
width:100%;
display:flex;
height:30%;
align-items:center;

`
export const DivZ = styled.div `
@media ${device.tablet} {
  display:flex;
  flex-direction:column;
  margin-right:20%;
  }
display:flex;
align-items:center;
`
export const DivB = styled.div `
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