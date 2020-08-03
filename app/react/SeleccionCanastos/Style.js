import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

///////// HEADER ////////////////



export const Header = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  
  
`;

export const DivIconoHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
//justify-content: center;
margin-top: 8px;;
margin-bottom: auto;

`;

export const IconoHeader = styled.img`
box-sizing: border-box;
height: 42px;
width: 45px;
//border: 1px solid #E8EAF6;
margin-left: 4%;

`;

export const H1Header = styled.div`
height: 24px;
//width: 178px;
color: #273947;
//font-family: Roboto !important;
font-size: 24px;
letter-spacing: 0;
line-height: 24px;
text-align: right;
align-items: center;
margin-left: 1%;
`;

export const DivGeneral = styled.div`
display: flex;
width: 100%;
height: 70vh;
background-color: #E8EAF6;
//padding-bottom: 
//flex-direction:column;
`;

export const IconoCanasta = styled.div`
display:flex;
flex-direction:column;
aling-item:center;
justify-content:center;
box-sizing: border-box;
border: 3px solid #E8EAF6;
border-radius:60px;
width: 20px;
height: 20px;
padding:12px;
margin-left: 20px;
margin-right: 20px;
`;
export const DivA = styled.div`
display:flex;
justify-content:center;
width:90%;
height:70%;
`;
export const Div1 = styled.div`
box-sizing: border-box;
height: 70%;
width: 90%;

border: 1px solid #273947;
margin:1px;
`;
///////////////////////////////////// COLUMNA IZQUIERDA CON ICONO 2 ////////////

export const ColuIzquierda = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 15%;
margin-top: 4%;
align-items: center;
`;

export const IconoDosCuadrados = styled.img`
display: flex;
height: 80px;
width: 70px;
margin-left: 5%;
margin-top: 5%;
`;
///////////////////////////////////// CAJAS CENTRO ///////////////////



export const DivMedio = styled.div`
  display: flex;
  margin-right: 15%;
  width: 70%;
  height: 100%;
  flex-direction: column;
`;


//////////////////////////////// FILA DE CAJAS UNO //////////////////////////////

export const DivFilaUno = styled.div`
display: flex;
flex-direction: row;
// margin-left: 2%;
// margin-right: 2%;
margin-top: 20px;
height: auto;
`;

export const DivUno = styled.div`
background-color: white;
border-radius: 3px 3px 3px 3px;
margin-right: 2%;
height: 140px;
width: 40%;
flex-direction: column;
//align-items: center;


`;



export const FilaArriba = styled.div`
display: flex;
width: 100%;
height: 30%;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #D5D7DB;
`;

export const DivLineaUno = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 4%;
`;

export const LineaVerde = styled.div`
  height: 28px;
  width: 1px;
  border: 2px solid #1DB779;
  border-radius: 3px 3px;
`;

export const Uno = styled.div`
  display: flex;
  flex-direction: row;
  color: #273947;
  //font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  margin-left: 20px;
  align-items: center;
`;

export const Lapiz = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 5%;
`;

export const SegundaParteCaja = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 30%;
align-items: center;
//margin-left: 10%;
margin-top: 10%;
`;

export const CodigoBarrasDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const CodBarras = styled.img`
height: 18px;
width: 26px;
`;

export const H1Cod = styled.div`
height: 14px;
  width: 150px;
  color: #273947;
  //font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 14px;
  margin-left: 8%;
`;

export const H1Caja = styled.div`
height: 14px;
  width: 150px;
  color: #939598;
  //font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 14px;
  margin-left: 8%;
`;




//////////////////////////////////// PRIMERA FILA CAJA DOS ///////////////////
export const DivDos = styled.div`
display: flex;
background-color: white;
border-radius: 3px 3px 3px 3px;
margin-right: 2%;
height: 140px;
width: 40%;
flex-direction: column;
//align-items: center;


/////////////////////// SELECCIONAR CANASTO Y PINTARLO AZUL /////////////
${({ key }) => {
    
  if(key == 'si'){
     return 'border: #2979FF 1px solid !important;'
    
  } 
}}
`;

export const EstructuraCaja = styled.div`
//margin-top:40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80%;
//background-image: url('../../images/basket_full.svg ');
//background-repeat: no-repeat;




`;

export const DivIconoBarritas = styled.div`
display: flex;
justify-content: flex-end !important;
height: 15%;
`;

export const BarritasArribaizq = styled.img`
height: 22px;
width: 30px;
//margin-left: 100%;

`;

export const ImagengrandeDiv = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
//margin-left: 20%,
padding-top: 10% ;
padding-bottom: 10%;
align-items: center !important;
position: relative;

`;

export const ImagenGrande = styled.img`
  height: 98px;
  width: 140px;
  position: relative;
`;

export const H1PickearCanasto = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 11px;
  justify-content: center;
  height: 15%;

///////////////// CANASTO SELECCIONADO PINTAR DE AZUL "PICKEAR CANASTO" ////////////////
//color: #2979FF;

`;

export const NumCanasto = styled.h1`
display: flex;
position: absolute;
margin-top: auto;
margin-bottom: auto;
height: 90px;
//margin-top: 4%;
color: #D5D7DB;
//font-family: Roboto;
font-size: 32px;
justify-content: center;
align-items: center;
flex-direction: row;
// margin-left: 10%;
// margin-right: auto;
// margin-top: 4%;
// margin-bottom: auto;
`;

export const NumCanastoGris = styled.p`
position: absolute;
margin-top: 4%;
color: #D5D7DB;
//font-family: Roboto;
font-size: 34px;
justify-content: center;
align-items: center;
flex-direction: row;
// margin-left: 10%;
// margin-right: auto;
// margin-top: 4%;
// margin-bottom: auto;
`;


///////////////////////////////////////// FILA DE CAJAS DOS /////////////////////////

export const DivFilaDos = styled.div`
display: flex;
flex-direction: row;

height: auto;
margin-top: 20px;
`;

////////////////////// BOTON COMENZAR //////////////////////

export const Footer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
//margin-top:8%;
background-color: #E8EAF6;
height: 15vh;
padding-bottom: 1%;

`;

export const Comenzar = styled.button`
  width:50%;
  height:60px;
  border-radius: 3px;
  background-color: #1DB779;
  border:1px solid #1DB779;
  color: #ffffff;
  //font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 5px;
  outline:none;
  @media ${device.mobile} {
  width:35%;
  height:40px;
  font-size: 18px;
}
  `;

export const ImgX = styled.img`
  width:50px;
  height:50px;
`

export const DivPopup = styled.div`
  width:750px;
  height:400px;
  display:flex;
  background-color:#1DB779;
  align-items:center;
  margin-top:3%;
  margin-left:15%;
  position:fixed;
  ${({valor , elementos}) => valor === elementos ? null : 'display:none'};
`

export const SubDivPopup = styled.div`
  padding:30px;
  margin:0 auto;
`

export const FormPopup = styled.form`
  display:flex;
  flex-direction:column;
  margin-top:20px;
`
export const Input = styled.input`
  width:200px;
  border:1px solid #1DB779;
  outline:none;
`

export const InputSubmit = styled.input`
  border-radius:20px;
  margin-top:20px;
  border:2px solid black;
  outline:none;
`

