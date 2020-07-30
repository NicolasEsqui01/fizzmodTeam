import styled,{keyframes} from 'styled-components'
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
`
////POPups Sstitutos, Obvservacion, Opciones/////////////////////////////

export const Button = styled.button `
width:70px;
height:70px;
border: 1px solid transparent;
background-color: transparent;
outline:none;
border-radius: 50px;
cursor: pointer;
`
export const Button2 = styled.button `
width:70px;
height:70px;
border: 1px solid transparent;
background-color: transparent;
outline:none;
border-radius: 50px;
cursor: pointer;
`
export const Img = styled.img `
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
`
export const ImgP = styled.img `
width:40px;
height:40px;
margin-right:7%;
margin-left:7%;
@media ${device.mobile} {
  width:25px;
  height:25px;
  }
`

export const ImgX = styled.img `
width:50px;
height:50px;
@media ${device.tablet} {
  
  width:20px;
  height:20px;
 
}
`
export const ImgX2 = styled.img `
width:30px;
height:30px;
`

export const ImgM = styled.img `
width:75px;
height:100px;
@media ${device.tablet} {
  width: 50px;
}
`
export const ImgO = styled.img `
height:100px;
width:100px;
margin:6%;
@media ${device.tablet} {
  
  width:50px;
  height:50px;
 
}
`

export const ImgT = styled.img `
width:40px;
height:40px;
margin-left:5%;
`

export const ButtonX = styled.button`
width:10%;
cursor: pointer;
border: 1px solid transparent;
background-color: transparent;
outline:none;

`
export const ButtonX4 = styled.button`
width:10%;
cursor: pointer;
border: 1px solid transparent;
background-color: transparent;
outline:none;
margin-left:90%

`

export const Text = styled.p`
color: #939598;
font-family: Roboto;
font-size: 20px;
letter-spacing: 0;
line-height: 24px;
`
export const TituloOb = styled.h1`
margin-left:3%;
width:75%;
font-size: 30px;
text-align: center;
@media ${device.tablet} {
font-size:20px;
}

`
export const PopUpProdu = styled.div`
 width:100%;
 height:25%;
 background-color:#FFFFFF;
 opacity:0;
 display:flex;
 justify-content: center;
 align-items:center;
 `

 export const  Logout = styled.button`
 height: 14px;
 width: 52px;
 color: #939598;
 font-family: Roboto;
 font-size: 60px;
 font-weight: bold;
 letter-spacing: 1px;
 line-height: 14px;
 width:15%;
 font-size:140%;
 cursor: pointer;
 border: 1px solid transparent;
 background-color: transparent;
 outline:none;
 @media ${device.tablet} {
  font-size:100%;
  width:40%;
}
 `
////POPups Balance ////////////////
export const PopUpProduAcum = styled.div`
 width:100%;
 height:20%;
 display:flex;
 align-items: center;
 background-color:#FFFFFF;
 border-radius: 10px;

`
export const HeaderDiv = styled.div `
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
  
  height: 90%;
 
}
  overflow: auto;
  height: 100%;
  margin-left:5%;
  width: 90%;

`

export const TextB = styled.h1 `
@media ${device.tablet} {
  font-size: 15px;
  }
margin-top: 4%;
height: 15px;
  width:30%;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
`
export const TextB2 = styled.h1 `
@media ${device.tablet} {
  font-size: 15px;
  }
margin-top: 4%;
height: 15px;
  width:30%;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;
  text-align: center;
  margin-left:25%;
  margin-right:5%;
`
export const Descripcion = styled.div `
@media ${device.tablet} {
  height:20%;
  width:90%;
  }
width:50%;
margin-left:2%;
height: 40px;
color: #939598;
font-family: Roboto;
font-size: 100%;
letter-spacing: 0;
line-height: 18px;

`
export const ButtonM = styled.button `
background-color:#FFFFFF;
outline:none;
border: 1px solid #FFFFFF;
cursor:pointer;
`

export const Icono = styled.img `
@media ${device.tablet} {
  height:40px;
  width:50px;
  }
 height:30px;
 width:30px;
 margin-left:2%;
`
export const Ean = styled.div`
@media ${device.tablet} {
  height:10%;
  font-size: 10px;
  width:70%;
  margin-left:12%;
  }
width:25%;
color: #273947;
font-family: Roboto;
font-size: 100%;
font-weight: bold;
letter-spacing: 0;
margin-left:2%;

`
export const Cantidad =styled.div `
@media ${device.tablet} {
  width:30%;
  height:35%;
  margin-left:0;
  margin-right:0;
  font-size:120%;
  }

border: 1px solid #E8EAF6;
font-size:160%;
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
letter-spacing: 0;
line-height: 19px;
text-align: center;

`


//////controladores/////////

export const DivIM2 = styled.div `
 width:10%;
`
export const DivCON = styled.div `
width:90%;
`

export const DivP = styled.div`
overflow:auto;
height:100%
`
export const DivW = styled.div`
 height:30%;
 width:100%;
 display:flex;
 flex-direction:row
 justify-content:start;
 align-items:center;
`
export const DivW2 = styled.div`
 height:70%;
 width:100%;
 display:flex;
 flex-direction:row
 justify-content:start;
 align-items:center;
`


export const DivVC = styled.div `
 display:flex;
`

export const DivC = styled.div `
display: flex;
flex-direction: row;
align-items:center;
height:10%;
padding-left:15px;
padding-right:15px;
background-color:#E8EAF6;
@media ${device.mobile} {
width:100%;
}

`
//sustituto
export const DIV = styled.div `
width:100%;
display: flex;
position:fixed;
${props => props.active === 1? null: `display:none`};

`
export const Color = styled.div`
width: 100%;
height:100vh;
background-color:#273947;
opacity:80%;

 `
export const DivV = styled.div `
display: flex; 
position:fixed; 
right:0px;
background-color:#FFFFFF;
width: 50%;
height:100vh;
flex-direction: column;
animation: ${slideRight} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@media ${device.mobile} {
width: 90%;
}
`

//obvservacion
export const DIV2 = styled.div `
width:100%;
display: flex;
position:fixed;
${props => props.active === 2? null: `display:none`};
`

export const DivO = styled.div `
display: flex;    
background-color:#FFFFFF;
width: 50%;
height:100vh;
flex-direction: column;
position:fixed; 
right:0px;
animation: ${slideRight} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@media ${device.mobile} {

width: 90%;
}
`
export const DivF = styled.div `
@media ${device.tablet} {
  display:flex;
  flex-direction:column;
  margin-right:20%;

  }
display:flex;
align-items:center;
`

//balance
export const DivZ = styled.div `
display: flex;    
position:fixed;
background-color:#273947;
width: 50%;
height:100%;
flex-direction: column;
${props => props.active === 3? null: `display:none`};
@media ${device.mobile} {
width: 90%;
}
`
export const DivR = styled.div `
@media ${device.tablet} {
  height:70%;
  width:95%;
  }
height:70%;
width:100%;
display:flex;
align-items: center;

`

//opciones
export const DIV4 = styled.div `
width:100%;
display: flex;
position:fixed;
${props => props.active === 4? null: `display:none`};
`

export const DivM = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
height:60%;
width:100%;
margin-top:50px;
`

export const DivH = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:30%;
`
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

`
export const DivA= styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
heigth:40%;

`
export const DivB= styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
heigth:40%;
margin-top:8%;
`
export const DivN = styled.div `
height:20%;
width:100%;
display:flex;
justify-content:start;
margin-left:6%;
@media ${device.mobile} {
justify-content:space-around;
align-items:center;
width: 100%;
}
`
export const DivG = styled.div `
display:flex;
justify-content: center;
align-items:center;
width:100%;
height:15%;
`
export const DivG2 = styled.div `
display:flex;
flex-direction:column;
width:100%;
height:25%;
`

////Info order
export const DIV5 = styled.div `
width:100%;
display: flex;
position:fixed;
${props => props.active === 5? null :`display:none`}; 
`
export const DivQ = styled.div `
height:30%;
width:100%;
`
export const DivS = styled.div `
height:20%;
width:100%;
`
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
`

export const PP = styled.span `
  height: 40px;
  width: 10%;
  color: #273947;
  font-family: Roboto;
  font-size: 25px;
  letter-spacing: 0;
  line-height: 19px;
  margin-right:3%;
  @media ${device.mobile} {
    font-size: 12px;
    }
  
`
export const PPP = styled.span`
height: 16px;
width: 100%;
color: #273947;
font-family: Roboto;
font-size: 25px;
letter-spacing: 0;
line-height: 16px;
@media ${device.mobile} {
  font-size: 12px;
  }
`

export const NN = styled.span `
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
`
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
`

export const P = styled.p `
margin-top:5%;
margin-left:5%;
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
`

export const Barrita = styled.div `
 heigth:1px;
 margin-top:3%;
 width:10%;
 background-color:#FCABA9;

`
export const DivBarr = styled.div `
 
 display:flex;
 width:90%;
 jutify-content:center;

`
export const DivMN = styled.div `
width:100%;
margin-top:5%;
`
export const DivIM = styled.div `
margin-right:7%;
margin-left:7%;
`

export const DivS2 = styled.div`
height:20%;
`

//////////////////////
export const DivX = styled.div `
width:50%;
@media ${device.mobile} {
height:100%;
display:flex;
justify-content: space-between;
flex-direction:column;
  }

`
export const Espacio = styled.div `
height:10px;
width:100%;
background-color:#273947;
`
export const Espacio4 = styled.div `
height:5px;
width:100%;
background-color:#E8EAF6;
`