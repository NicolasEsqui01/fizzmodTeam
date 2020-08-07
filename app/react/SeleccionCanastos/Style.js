import styled from 'styled-components';
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
  margin-top: 8px;
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
  background-color: #e8eaf6;
  @media ${device.mobile} {
    height: 76vh;
`;

export const IconoCanasta = styled.div`
  display: flex;
  flex-direction: column;
  aling-item: center;
  justify-content: center;
  box-sizing: border-box;
  border: 3px solid #e8eaf6;
  border-radius: 60px;
  width: 20px;
  height: 20px;
  padding: 12px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const DivA = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 70%;
`;
export const Div1 = styled.div`
  box-sizing: border-box;
  height: 70%;
  width: 90%;

  border: 1px solid #273947;
  margin: 1px;
`;
///////////////////////////////////// COLUMNA IZQUIERDA CON ICONO 2 ////////////

export const ColuIzquierda = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
  margin-top: 4%;
  margin-right:30px;
  align-items: center;
  @media ${device.mobile} {
    margin-right:5px;
    margin-left:5px;
    margin-top:10%;
}
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
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media ${device.mobile} {
    margin-right:0%;
}
`;

//////////////////////////////// FILA DE CAJAS UNO //////////////////////////////

export const DivFilaUno = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  margin-top: 20px;
  height: auto;
  @media ${device.mobile} {
    width:100%;
    margin-top: 5px;
}
`;

export const DivUno = styled.div`
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  margin-right: 2%;
  height: 200px;
  width: 40%;
  flex-direction: column;
`;

export const FilaArriba = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5d7db;
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
  border: 2px solid #1db779;
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
  @media ${device.mobile} {
    width: 100px;
}
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
  @media ${device.mobile} {
    width: 100px;
    font-size: 14px;
}
`;

//////////////////////////////////// PRIMERA FILA CAJA DOS ///////////////////
export const DivDos = styled.div`
  display: flex;
  background-color: white;
  border-radius: 3px 3px 3px 3px;
  margin-right: 2%;
  margin-bottom:2%;
  height: 200px;
  width: 30%;
  cursor:pointer;
  flex-direction: column;
  border: ${({ NumDiv, valueClick, status }) => {
    return NumDiv === valueClick && status !== true ? '2px solid #2979FF;' : null
  }
  };
  @media ${device.mobile} {
    height: 150px;
    width: 40%;
    margin:5%;
}
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
  padding-top: 10%;
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
  color: #2979FF;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 11px;
  justify-content: center;
  height: 15%;
`;

export const NumCanasto = styled.h1`
  display: flex;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  height: 90px;
  color: ${({ NumDiv, boolean, valueClick }) => NumDiv === valueClick ? '#2979FF' : '#d5d7db'};
  font-size: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const NumCanastoGris = styled.p`
  position: absolute;
  margin-top: 4%;
  color: #d5d7db;
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
  background-color: #e8eaf6;
  height: 15vh;
  padding-bottom: 1%;
  @media screen and (max-width : 768px){
    height:8vh;
  }
`;

export const Comenzar = styled.button`
  width: 50%;
  height: 60px;
  border-radius: 3px;
  background-color: #1db779;
  border: 1px solid #1db779;
  color: #ffffff;
  cursor:pointer;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  outline: none;
  @media ${device.mobile} {
    width: 100%;
    height: 100%;
    font-size: 18px;
    margin-top:8px;
  }
`;

export const ImgX = styled.img`
  width: 50px;
  height: 50px;
`;

export const DivPopup = styled.div`
  width: 80%;
  height:440px;
  margin-left:20px;
  margin-right:20px;
  margin:0 auto;
  display: flex;
  flex-direction:column;
  background-color: #273947;
  border-radius:30px;
  z-index:2;
  position:fixed;
  left:0;
  right:0;
  overflow: hidden;
  ${({ activar }) => (activar === 1 ? null : 'display:none')};
`;

export const DivForm = styled.div`
  padding:20px;
  height:90%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const FormPopup = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width:50%;
  @media ${device.mobile} {
    width:90%;
  }

`;
export const Input = styled.input`
  border: 1px solid #273947;
  border-radius:10px;
  outline: none;
  width:100%;
  height:50px;
  font-size:28px;
`;

export const InputSubmit = styled.input`
  border-radius: 20px;
  margin-top: 20px;
  border: 2px solid #273947;
  outline: none;
  width:20%;
  padding:20px;
  cursor:pointer;
  &:hover{
    background-color:#273947;
    color:white;
    border:2px solid white;
  }
  @media ${device.mobile} {
    width:60%;
  }
`;


export const DivImg = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  height:10%;
`

export const BottomCruz = styled.button`
  width:auto;
  background-color: #273947;
  border-radius:30px;
  border:1px solid #273947;
  outline:none;
  margin:10px;
`

export const ImgCruz = styled.img`
  height:40px;
  width:40px;
  padding:10px;
  background-color:white;
  border-radius:30px;
`
export const LabelPopup = styled.label`
  display:flex;
  text-align: center;
  font-size:25px;
  margin-bottom:10px;
  color:white;
  @media ${device.mobile} {
    width:100%;
  }
  
` 

// CUADRADOS 


export const ContainerGrillCuadros = styled.div`
  display: flex;    
  width: 60%;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  @media screen and (max-width : 768px) {
    width:80%;
    justify-content:space-between;
  }
`

export const CuadroGrill = styled.div`
  display: flex;    
  width: 25%;
  height: 20px;
  flex-direction: row;
  background-color:${({ valor, numeros, status }) => {
    return valor === numeros && status === false ? '#2979FF' : 'white'
  }};
  border: ${({ valor, numeros, status }) => valor === numeros && status === false ? '1px solid #2979FF' : '1px solid white'};
  border-radius:10%;
  margin: 4px 6px 4px 0px;
  justify-content:center;
  align-items:center;
  @media screen and (max-width : 768px) {
    width:45%;
    margin-bottom:3px;
    margin:0px;
    margin-bottom:3px;
  }
`
export const DivImgTilde = styled.img`
  width:20px;
  height:20px;
`


export const NumCuadrados = styled.div`
  display: flex;    
  width: 50%;
  height: 60px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 3px solid #2979FF;
  font-size: 25px;
  color: #273947;
  font-family: Roboto;
  font-weight: 900;
  letter-spacing: 0;
  @media ${device.mobile} {
  font-size: 20px;
  height: 30px;
}
  
`
