import styled from "styled-components";

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
height: 100%;
display: flex;
`;

////// LADO IZQUIERDO /////////////

export const ColIzq = styled.div`
    display: flex;    
    width: 45%;
    height: 100%;
    flex-direction: column; 
`;

////// FOTO PRODUCTO ////////////////
export const DivFoto = styled.div`
    display: flex;
    width: 75%;
    margin-top: 10%;
    flex-direction: column;
    position: relative;
    float: right;    
`;

export const FotoProd = styled.img`
height: 318px;
width: 318px;
`;

///////// COLUMNA IZQ CON ICONOS ///////////////
export const ColuIconos = styled.div`
height: 100%;
width: 25%;
display: flex;
float: left;
flex-direction: column;
justify-content: space-around;
`;

export const IconoNum = styled.img`
  margin: 20px;  
  height: 69px;
  width: 30px;
`;

export const IconoNumDos = styled.div`
margin: 5px; 
display: flex;
flex-direction: column;
`;

export const StockLetras = styled.h1`
  height: 18px;
  width: 50px;
  color: #1DB779;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const StockCien = styled.img`
  height: 28px;
  width: 50px;
`;

//////// LADO DERECHO ///////////////////
export const ColDerecha = styled.div`
    display: flex;    
    width: 55%;
    height: 100%;
    flex-direction: column;
    position: relative;
`;

export const DivGrande = styled.div`

`;

//////////// COLUMNA CON ICONOS GLOBOS ////////////
export const DivGlobos = styled.div`
display: flex;
float: right;
flex-direction: column;
`;

export const ImagenGlobo = styled.img`
height: 48px;
width: 48px;

`;

//////////// MARCA Y DESCRIPCION ///////////////
export const MarcaH1 = styled.h1`
  padding-top: 35px;  
  padding-left: 20px;
  height: 15px;
  width: 100%;
  color: #2979FF;
  font-family: Roboto;
  font-size: 13px;
  letter-spacing: 0;
  line-height: 15px;

`;

export const Descri = styled.div`
  padding-top: 10px;
  padding-left: 20px;  
  height: 48px;
  width: 300px;
  color: #939598;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 25px;
`;


///////////// PRECIOS ////////////////////
export const Tachado = styled.div`
padding-top: 35px;
padding-left: 20px;  
height: 14px;
width: 100%;
color: #939598;
font-family: Roboto;
font-size: 12px;
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
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 21px;
`;

/////////////// FILA CON CODIGO DE BARRAS, CODIGO Y PESO ///////////////
export const ContBarras = styled.div`
display:flex;
padding-top: 30px;
width:100%;
flex-direction: row;
padding-left: 20px;
text-align: center;
justify-content: space-between;  
`;

export const Barritas = styled.img`
height: 20px;
width: 37px;

`;

export const CodProdu = styled.div`
  height: 19px;
  width: 300px;
  color: #273947;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
   
`;

export const ImgBarrita = styled.img`
Width: 1px;
Height: 18px;
  
`;

export const ImBalanza = styled.img`
height: 24px;
width: 24px;
`;

export const PesoProdu = styled.h1`
  height: 18px;
  width: 63px;
  color: #273947;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

/////////// FILA CON ICONOS DE PESO ///////////////
export const ContImagenes = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    text-align: center;
`;

export const CuadritoUno = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  box-sizing: border-box;
  height: 48px;
  width: 130px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
`;

export const PesoCuadro = styled.h1`
  height: 18px;
  width: 85px;
  color: #273947;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const CuadritoDos = styled.div`
  box-sizing: border-box;
  height: 48px;
  width: 48px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.11);
  margin-left: 5px;
`;

///////// COLOCA EL PRODUCTO SOBRE LA BALANZA //////////////
export const Instrucciones = styled.h1`
padding-top: 7px;
height: 16px;
width: 523px;
color: #273947;
font-family: Roboto;
font-size: 14px;
letter-spacing: 0;
line-height: 16px;
`;

/////////// FILA BOTONES DE ABAJO ////////////
export const Botones = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    text-align: center;      
`;

export const Omitir = styled.button`
  height: 48px;
  width: 120px;
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

export const Teclado = styled.button`
height: 48px;
width: 48px;
border-radius: 3px;
background-color: #6B8A96;
border:1px solid #6B8A96;
margin-right: 2px;
margin-left: 2px;
`;

export const Siguiente = styled.button`
  height: 48px;
  width: 120px;
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
  height: 48px;
  width: 48px;
  margin-right: 2px;
  margin-left: 2px;
  `;