import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
  display: flex;
  height: 92vh;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    height: 93vh;
  }
`;

export const DivScroll = styled.div`
  overflow:auto;
  
`


export const Derecho = styled.div`
  background-color: #f4f5fb;
  width: 50%;
  height: auto;
  padding-left: 3%;
  padding-top: 3%;
  padding-right: 3%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  @media ${device.mobile} {
    width: 100%;
    height: 550px;
  }
`;

//////////////////////////////// TITULO CANASTOS ///////////////////////
export const ParteSuperior = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconoCanastoOscuro = styled.img`
  height: 46px;
  width: 46px;
  background-color: #273947;
  border-radius: 50px;
  padding: 7px;
`;

export const TituloCanasto = styled.h1`
  height: 19px;
  // width: 84px;
  color: #273947;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  margin-left: 5%;
`;

export const ParteCentral1 = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  //align-items: center;
  justify-content: space-between;
`;
///////////////////////////////// CANASTOS FINALIZADOS /////////////////////////
export const ParteCentralIzq = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 4%;
  align-items: center;
  //border-bottom: 1px solid #08C4C4;
`;

export const IconoCanastoVerde = styled.img`
  height: 46px;
  width: 46px;
  border-radius: 50px;
  border: 2px solid #08c4c4;
  border-line: 2px;
  padding: 7px;
`;

export const NombreCanasto = styled.h1`
  height: 16px;
  width: auto;
  color: #273947;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 5%;
  font: unset;
`;

export const DivIconoAprobado = styled.div`
  padding-top: 2%;

  display: flex;
  //align-items: center;
  justify-content: center;
`;

export const IconoAprobado = styled.img`
  //box-sizing: border-box;
  height: 35px;
  width: 35px;
  //border: 3.5px solid #00BFA5;
`;

export const ParteCentral2 = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LineaBlanca = styled.div`
  width: 90%;
  height: 1px;
  border: 1px solid #e8eaf6;
  margin-left: 10%;
`;

///////////////////// FILA CARGAR NUEVO CANASTO ///////////////
export const ParteCentral2Izq = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const IconoCanastoGris = styled.img`
  height: 46px;
  width: 46px;
  border-radius: 50px;
  border: 2px solid #939598;
  padding: 7px;
`;

export const NombreCargarCanasto = styled.h1`
  height: 16px;
  //width: 141px;
  color: #939598;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 5%;
  font: unset;
`;

export const IconoTeclado = styled.img`
  height: 58px;
  width: 58px;
  border-radius: 50px;
  cursor:pointer;
  padding: 17px;
  background-color: #6b8a96;
`;

/////////////////////// FOOTER CON BOTON /////////////////////
export const ParteInferior = styled.div`
  //padding-bottom: 5%;
  //bottom: 0px;
  //left:0px;
  //right: 0px;
  //position: absolute;
  display: flex;
  flex-direction: column;
`;

export const ParteTotalesDivInf = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const OrdenFooter = styled.div`
  display: flex;
  //margin-top: 13%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 400px;
  height: 60px;
  border-radius: 3px;
  background-color: #1db779;
  border: 1px solid #1db779;
  color: #ffffff;
  font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 5px;
  outline: none;
  bottom: 0px;
  margin-bottom:5px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 35%;
    height: 40px;
    font-size: 18px;
    //position: absolute;
  }
`;

////////////////////////// LADO IZQUIERDO //////////////////////////////

export const Izquierdo = styled.div`
  background-color: #e8eaf6;
  width: 50%;
  height: auto;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 3%;

  @media ${device.mobile} {
    width: 100%;
    height: 50%;
  }
`;

/////////////////////////// DIV VERDE FELICITACIONES ////////////////
export const ParteSuperiorIzq = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10%;
`;

export const IconoApproveDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  border: 2px solid #74c655;
  padding: 7px;
`;

export const IconoAprobadoIzq = styled.img`
  height: 35px;
  width: 35px;
`;

export const FelicitacionesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

export const FelicitacionesH1 = styled.div`
  height: 19px;
  width: auto;
  color: #74c655;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
`;

export const RondaH1 = styled.div`
  height: 15px;
  width: auto;
  color: #74c655;
  font-family: Roboto;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 0px;
  font: unset;
  margin-top: 3%;
`;

///////////////////////////// DIV TOTALES /////////////////////////
export const ParteInferiorIzq = styled.div`
  display: flex;
  margin-top: 5%;
`;
export const IconoIzqDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColuInfoDerecha = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;

export const TituloTotales = styled.div`
  margin-top: 8%;
  height: 19px;

  color: #273947;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
`;

export const Pickeados = styled.div`
  margin-top: 12%;
  height: 19px;
  width: auto;
  color: #273947;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 19px;
  font: unset;
`;

export const TotalesGris = styled.div`
  margin-top: 3%;
  height: 16px;
  width: auto;
  color: #939598;
  font-family: Roboto;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 15px;
  font: unset;
`;

export const ImgLineaRoja = styled.img`
  height: 6px;
  width: 230px;
  border-radius: 2px;
  background-color: #fcaba9;
  margin-top: 12%;
`;
