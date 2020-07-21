import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';


///////// HEADER ////////////////
export const Header = styled.div`
  background-color: #E8EAF6;
  width: 100%;
  height: 48px;
`;

export const Img = styled.img`
height: 24px;
width: 24px;
`;

export const Cuadro = styled.div`
display: flex;
height: 100%;
width: 250px;
justify-content: center;
align-items: center;
position: relative;
margin-left: auto;
margin-right: auto;
`;

export const Marca = styled.h1`
height: 21px;
  width: 69px;
  color: #273947;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: right;
  margin-right: 7px;
  margin-left: 7px;
`;

export const Gramaje = styled.h1`
height: 21px;
  width: 82px;
  color: #F13B70;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: right;
`;

/////////// CONTENEDOR ////////////////
export const Cont = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

////// LADO IZQUIERDO /////////////

export const ColIzq = styled.div`
    display: flex;    
    width: 50%;
    height: 100%;
    flex-direction: row; 
`;

////// FOTO PRODUCTO ////////////////
export const DivFoto = styled.div`
    margin-top: 35px;
    display: flex;
    width: 80%;
   
    flex-direction: column;
    height: 70%;
    float: right;
       
`;

export const FotoProd = styled.img`
height: 100%;
width: 100%;
`;

///////// COLUMNA IZQ CON ICONOS ///////////////
export const ColuIconos = styled.div`
padding-top: 35px;
height: 100%;
width: 20%;
display: flex;
float: left;
flex-direction: column;
//justify-content: space-around;
`;

export const IconoNum = styled.img`

  margin-left: auto;
  margin-right: auto;  
  height: 20%;
  width: 55%;
`;

export const IconoNumDos = styled.div`
padding-top: 220%;
margin-left: auto;
margin-right: auto; 
display: flex;
flex-direction: column;
`;

export const StockLetras = styled.div`
  margin-left: auto;
  margin-right: auto;  
  height: 18px;
  color: #1DB779;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const StockCien = styled.img`
  height: 43px;
  width: 67px;
`;

//////// LADO DERECHO ///////////////////
export const ColDerecha = styled.div`
    display: flex;    
    width: 50%;
    height: 100%;
    flex-direction: column;
    
`;

export const DivGrande = styled.div`

`;

//////////// COLUMNA CON ICONOS GLOBOS ////////////
export const DivGlobos = styled.div`
padding-top: 35px;
display: flex;
float: right;
flex-direction: column;
width: 20%;
align-items: center;
`;

export const ImagenGlobo = styled.img`
height: 68px;
width: 70px;

`;


/////media query/////
export const ImgH = styled.img`
@media ${device.tablet} {
  
  height: 40px;
  width: 40px;
 
}
  height: 60px;
  width: 60px;
`;



//////////// MARCA Y DESCRIPCION ///////////////
export const MarcaH1 = styled.h1`
  padding-top: 35px;  
  padding-left: 4%;
  height: 15px;
  width: 100%;
  color: #2979FF;
  font-family: Roboto;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 15px;

`;

export const Descri = styled.div`
  padding-top: 20px;
  padding-left: 4%;  
  height: 48px;
  width: 600px;
  color: #939598;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 25px;
`;


///////////// PRECIOS ////////////////////
export const Tachado = styled.div`
padding-top: 50px;
padding-left: 20px;  
height: 14px;
width: 100%;
color: #939598;
font-family: Roboto;
font-size: 15px;
font-weight: 300;
letter-spacing: 0;
line-height: 14px;
`;

export const Precio = styled.h1`
  padding-top: 10px;
  padding-left: 20px; 
  height: 21px;
  width: 100%;
  color: #2979FF;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;
`;

/////////////// FILA CON CODIGO DE BARRAS, CODIGO Y PESO ///////////////
export const ContBarras = styled.div`
display:flex;
padding-top: 5%;
width:100%;
flex-direction: row;
padding-left: 2%;
//justify-content: space-around;
//align-items: center;

  
`;

export const BarritasCont = styled.div`

height: 25px;
width: 48px;
`

export const Barritas = styled.img`

height: 100%;
width: 100%;

`;

export const CodProdu = styled.div`
    
  height: 29px;
  //width: 350px;
  color: #273947;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;

   
`;

export const ImgBarrita = styled.img`
margin-left: 3%;
Width: 25px;
Height: 27px;

`;

export const ImBalanza = styled.img`
margin-left: 3%;
height: 26px;
width: 26px;
`;

export const PesoProdu = styled.div`
  margin-left: 3%;  
  height: 18px;
  //width: 63px;
  color: #273947;
  font-family: Roboto;
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

/////////// FILA CON ICONOS DE PESO ///////////////
export const ContImagenes = styled.div`
    padding-top: 3%;
    padding-left: 20px; 
    display: flex;
    flex-direction: row;
    width:100%;
    text-align: center;
    align-items: flex-end;
`;

export const CuadritoUno = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  box-sizing: border-box;
  height: 55px;
  width: 167px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
`;

export const PesoCuadro = styled.h1`
  margin-top: 10%;  
  height: 18px;
  width: 85px;
  color: #273947;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const CuadritoDos = styled.div`
  box-sizing: border-box;
  height: 55px;
  width: 57px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.11);
  margin-left: 2%;
  align-items: center;
`;

export const ImgBalanzasUno = styled.img`
margin-top: 7%;
height: 28px;
width: 28px;
`;

export const ImgBalanzasMas = styled.img`
margin: 11%;
height: 34px;
width: 34px;
`;
///////// COLOCA EL PRODUCTO SOBRE LA BALANZA //////////////
export const Instrucciones = styled.h1`
padding-top: 2%;
padding-left: 20px; 
//height: 18px;
width: 523px;
color: #273947;
font-family: Roboto;
font-size: 16px;
letter-spacing: 0;
line-height: 16px;
`;


/////////// RECUADRO CON CANTIDAD PRODUCTO NORMAL Y STOCK///////////

export const RecuadroCantidadNormal = styled.div`
  margin-top: 5%;  
  display: flex;  
  box-sizing: border-box;
  height: 55px;
  width: 220px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
  align-items: center;
  //justify-content: center;  
`;

export const H1Cantidad = styled.h1`
  height: 16px;
  margin-left: 10%;
  color: #939598;
  font-family: Roboto;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 16px;
`;

export const H1CantidadNum = styled.h1`

height: 18px;
margin-left: 10%;
//width: 9px;
color: #939598;
font-family: Roboto;
font-size: 19px;
font-weight: bold;
letter-spacing: 0;
line-height: 18px;
`;

export const FlechitaDesplegable = styled.img`
  margin-left: 28%;  
  height: 20px;
  width: 20px;
`;

export const DivImageStock = styled.div`
margin-left: 10%;
display: flex;
flex-direction: column;
`;



/////////// FILA BOTONES DE ABAJO PRODUCTO NORMAL ///////////
export const BotonesNormal = styled.div`

    display: flex;
    padding-top: 10%;
    padding-left: 20px; 
    flex-direction: row;
    width:100%;
    text-align: center;      
`;


export const OmitirNormal = styled.div`
  display: flex;  
  height: 53px;
  width: 140px;
  border-radius: 3px;
  background-color: #FF4343;
  color: #ffffff;
  border:1px solid #FF4343;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin-right: 2px;
  margin-left: 2px;
  align-items: center;
  justify-content: center;
  
`;

export const CruzOmitir = styled.img`
  height: 35px;
  width: 35px;
`;

export const TecladoManual = styled.button`
  height: 53px;
  width: 140px;
  border-radius: 3px;
  background-color: #6B8A96;
  border:1px solid #6B8A96;
  color: #FFFFFF;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
  margin-left: 4px;
  margin-right: 10%;
`;

/////////// FILA BOTONES DE ABAJO PROD. PESABLE ////////////
export const Botones = styled.div`
    display: flex;
    padding-top: 2%;
    padding-left: 20px; 
    flex-direction: row;
    width:100%;
    text-align: center;      
`;



export const Omitir = styled.button`
  height: 53px;
  width: 125px;
  border-radius: 3px;
  background-color: #FF4343;
  color: #ffffff;
  border:1px solid #FF4343;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin-right: 2px;
  margin-left: 2px;
`;

export const Teclado = styled.img`
height: 53px;
width: 48px;
border-radius: 3px;
// background-color: #6B8A96;
// border:1px solid #6B8A96;
margin-right: 2px;
margin-left: 2px;
`;

export const Siguiente = styled.button`
  height: 53px;
  width: 130px;
  border-radius: 3px;
  background-color: #1DB779;
  border:1px solid #1DB779;
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin-right: 2px;
  margin-left: 2px;
  `;

  export const PlusCircle = styled.img`
  height: 53px;
  width: 53px;
  margin-right: 2px;
  margin-left: 2px;
  `;