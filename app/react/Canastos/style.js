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
display:flex;
height:93vh;
`;

export const Lizquierdo = styled.div`
width:40%;
background-color:color: #ffffff;
`;

export const ContainerIzquierdo = styled.div`
display:flex;
text-align: center;
place-content: center;
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
width: 150px;
color: #939598;
font-family: Roboto;
font-size: 16px;
font-weight: bold;
letter-spacing: 0;
line-height: 11px;
margin-left: 105px;
padding-top: 40px;
`
export const NumeroOrden = styled.div`
height: 19px;
width: 350px;
color: #273947;
font-family: Roboto;
font-size: 32px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
margin-right: 35px;
`
export const IconoCanasta = styled.div`
display:flex;
flex-direction:column;
aling-item:center;
justify-content:center;
box-sizing: border-box;
background-color:#273947;
border: 3px solid #273947;
border-radius:60px;
width: 60px;
height: 60px;
padding:12px;

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
border: 2px solid #ffffff;
margin:1px;
`

export const ParteInferior = styled.div`
margin-top:10%;
`

export const Pedidos = styled.div`
display:Flex;
justify-content: space-evenly;
align-items: center;
margin-left: 35px;
`

export const ImageBox = styled.img`
height: 50px;
width: 50px;
`
export const SectorCongelado = styled.div`
display:flex;

height: 25px;
width: 50%;
color: #273947;
font-family: Roboto;
font-size: 28px;
letter-spacing: 0;
line-height: 14px;
margin-right:40px;
`


////////////LADO DERECHO///////////////////
export const Lderecho = styled.div`
width:60%;
background-color: #e8eaf6;
height:auto;
`;

export const DivCanastos = styled.div`
diaplay:flex;
flex-direction:column;
margin-top:80px;
`;

export const FilaA = styled.div`
display:flex;
justify-content: space-around;
margin-bottom:30px;
margin-left: 30px;
    margin-right: 30px;
`;

export const FilaB = styled.div`
display:flex;
justify-content: space-around;
margin-bottom:30px;
margin-left: 30px;
    margin-right: 30px;
`;

export const FilaC = styled.div`
display:flex;
justify-content: space-around;
margin-bottom:30px;
margin-left: 30px;
    margin-right: 30px;
`;


export const DivCanastoIndividual = styled.div`
display:flex;
justify-content: space-around;
border-radius:7px;
height: 125px;
width: 43%;
background-color: #ffffff;
`;

export const DivInternoCanasto1 = styled.div`
display:flex;
align-items: center;
height: 100px;
width: 5px;
margin-top: 12px;
border-radius: 50px;
background-color: #74C655;
`;
export const DivInternoCanasto2 = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export const Divh1 = styled.div`
height: 19px;
width: 26px;
color: #273947;
font-family: Roboto;
font-size: 23px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
`;
export const DivBox = styled.img`
height: 38px;
width: 35px;
`;


export const DivInternoCanasto3 = styled.div`
margin-top:80px;
margin-left: 40px;
`;


export const NumeroCanasto = styled.div`
height: 22px;
width: 170px;
color: #939598;
font-family: Roboto;
font-size: 24px;
letter-spacing: 0;
line-height: 14px;

`;

export const DivInternoCanasto4 = styled.div`
display:flex;
flex-direction: column;
place-content: space-evenly;
`;

export const DivOvalo = styled.div`
display:flex;
justify-content:center;
height: 30px;
width: 90px;
margin-bottom:40px;
border-radius: 50px;
background-color: #E8EAF6;
`;


export const Button = styled.button`
  height: 60%;
  width: 50%;
  color: #ffffff;
  border:1px solid #6B8A96;
  font-family: Roboto;
  font-size: 250%;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  border-radius: 3px;
  background-color: #6B8A96;
  outline:none;
  cursor: pointer; 
`;

export const OrdenFooter = styled.div`

  margin-top: 13%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
`;

export const DivInternoCanastoVacio1 = styled.div`
display:flex;
align-items: center;
height: 100px;
width: 5px;
margin-top: 12px;
border-radius: 50px;
background-color: #939598;
`;

export const Divh1vacio = styled.div`
height: 19px;
width: 26px;
color: #939598;
font-family: Roboto;
font-size: 23px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
`;

export const DivImaCanastoVacio = styled.img`

width: 50%;
`;

export const DivOvaloVacio = styled.div`
display:flex;
justify-content:center;
height: 30px;
width: 90px;
margin-bottom:40px;
border-radius: 50px;
background-color: #ffffff;
`;

export const DivInternoCanastoVacio3 = styled.div`
margin-left: 40px;
display:flex;
justify-content:center;

`;


export const DivImagenCanastoVacio = styled.div`
width: 170px;
display: flex;
justify-content: center;
align-items: center;
`;