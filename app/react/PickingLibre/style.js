import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
display: flex;
width: 100%;
height: 93vh;
//flex-direction: row;
@media ${device.tablet} {
    
    flex-direction: column;
  }
`;


///////////////////////////// COLUMNA IZQUIERDA /////////////////////////////
export const ColuIzquierda = styled.div`
display: flex;
width: 35%;
height: 100%;
flex-direction: column;
background-color: white;
@media ${device.tablet} {
    width: 100%;
    height:50%;
    display: flex;
    flex-direction: column;
  }
`;

export const PickingTituloDiv = styled.div`
display: flex;
height: 15%;
width: 100%;
flex-direction: row;
align-items: center;
`;

export const PickingLogoDiv = styled.div`
display: flex;
//height: 10px;
margin-left: 5%;

`;

export const PickingLogo = styled.img`
height: 60px;
width: 70px;
@media ${device.tablet} {
    height: 30px;
    width: 35px;
}
`;

export const PickingTitulo = styled.div`
//height: 24px;
width: 70%;
color: #273947;
//font-family: Roboto;
font-size: 23px;
letter-spacing: 0;
line-height: 24px;
justify-content: center;
margin-left: 5%;

`;
////////////////////////////////////////////////
export const DivInfoProdu = styled.div`
display: flex;
height: 43%;
width: 100%;
flex-direction: row;
margin-top: 3%;

`;


export const ParteIzqDiv = styled.div`
display: flex;
height: 100%;
width: 20%;
flex-direction: column;
align-items: center;

`;


/////////////////////// LOGO CAJITAS ///////////////////////
export const Sup = styled.div`
align-items: center;
justify-content: center;

`;

export const CuadroGrill = styled.div`
  display: flex;    
  width: 25%;
  height: 20px;
  flex-direction: row;
  border-radius:10%;
  margin: 4px 6px 4px 0px;
  background-color:${({numeros , datos}) => numeros === datos ?  '#2979FF' : 'white'};
  border:${({numeros , datos }) =>  numeros === datos ? '1px solid #2979FF' : '1px solid #D1D3D4'};
  justify-content:center;
  align-items:center;
`;

export const ContainerGrillCuadros = styled.div`
  display: flex;    
  width: 90%;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
`;

export const NumCuadrados = styled.div`
  display: flex;
  margin-left:7px;    
  width: 60%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 3px solid #2979FF;
  font-size: 22px;
  color: #273947;
  font-family: Roboto;
  font-weight: 900;
  letter-spacing: 0;
  @media ${device.mobile} {
  font-size: 20px;
  height: 30px;
  }  
`;

export const LogoCajitasDiv = styled.div`
display: flex;
height: 60px;
width: 60px;
`;
export const LogoCajitasImg = styled.img`
display: flex;
height: 60px;
width: 60px;
`;

export const ParteDerDiv = styled.div`
display: flex;
//height: 35%;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const ImagenProduDiv = styled.div`
display:flex;
height:180px;
width: 200px;
@media ${device.tablet} {
    height:90px;
    width: 100px;
    margin-left: 30%;
  }
`;

export const ImagenProduImg = styled.img`
display:flex;
height:180px;
width: 200px;
@media ${device.tablet} {
    height:90px;
    width: 100px;
  }
`;

export const DescriProdu = styled.div`
  //height: 36px;
  width: 60%;
  margin-right:25px;
  margin-top: 15px;
  padding-bottom: 20px;
  color: #939598;
  //font-family: Roboto;
  font-size: 18px;
  text-align: center;
  
  border-bottom: 2px solid #E8EAF6;
  @media ${device.tablet} {
    margin-bottom: 13px;
    width: 40%;
  }
`;

export const Linea = styled.div`
  height: 2px;
  width: 100%;
  margin-left: 25%;
  margin-right: 15%;
  background-color: #E8EAF6;
`;

///////////////////////////// COLU IZQ INFO PRECIO //////////////////////

export const DivGralPrecio = styled.div`
display: flex;
height: 10%;
width: 100%;
flex-direction: row;
margin-top: 26px;
@media ${device.tablet} {
height: 70px;
//margin-top: 30px;
}

`;

export const DivPrecio = styled.div`
display: flex;
//height: 35%;
width: 65%;
flex-direction: column;

align-items: center;

`;

export const PrecioTachado = styled.div`

height: 14px;
  
  color: #939598;
  //font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 14px;
  text-align: center;
`;

export const Precio = styled.div`
height: 24px;
margin-top: 20px;
color: #2979FF;
//font-family: Roboto;
font-size: 26px;
font-weight: bold;
letter-spacing: 0;
line-height: 21px;
text-align: center;

`;

export const PesoDiv = styled.div`
display: flex;
width: 35%;
flex-direction: column;
margin-right: 4%;
align-items: center;
`;

export const Peso = styled.div`
display: flex;
height: 60px;
width: 110px;
align-items: center;
justify-content: center;
text-align: center;
border: 1px solid #E8EAF6;
@media ${device.tablet} {
    height: 40px;
    
}
`;


export const H1Peso = styled.h1`
  color: #273947;
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 18   px;
  }
`;
/////////////////////////////// COLUMNA DERECHA //////////////////////////
export const ColuDerecha = styled.div`
display: flex;
width: 65%;
height: 100%;
flex-direction: column;
background-color: #E8EAF6;
//justify-content: space-evenly;
align-items:center;
@media ${device.tablet} {
    width: 100%;
    height:90%;
    display: flex;
    flex-direction: column;
  }
`;

export const LogoDerechoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 7%;
//justify-content: evenly;
`;

export const ImagenGrandeDiv = styled.div`
height: 135px;
width: 125px;
@media ${device.tablet} {
    height: 65px;
    width: 85px;
}
`;

export const ImagenGrande = styled.img`
height: 135px;
width: 125px;
@media ${device.tablet} {
    height: 65px;
    width: 85px;
}
`;

export const H1PickingLibre = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 33px;
  margin-top: 6%;
  @media ${device.tablet} {
    font-size: 23px;
  }
`;

export const H1Comenzar = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 22px;
  margin-top: 8%;
  @media ${device.tablet} {
    font-size: 19px;
  }
`;

////////////////////////// FORM BUSCAR PRODUCTOS ////////////////


export const DivBuscador = styled.div`
${props => props.value === ''?`
display: flex;
height:70px;
align-itens: center;
justify-content: center;
border-radius: 50px;
background-color: white;
width:400px;  
margin-top: 7%;
margin-bottom: 10%; `
:
`
display: flex;
height:70px;
//align-itens: center;
//justify-content: center;
border-radius: 50px;
background-color: white;
width:90%;  
margin-top: 3%;
margin-left: 5%;
margin-right: 5%;
@media ${device.tablet} {
  margin-top: 5%;
  height:40px;
}`}
`



export const DivImagenBuscador = styled.button`
display: flex;
margin-left: 30px;
height: 40px;
width: 40px;
border: none;
background-color: transparent;
align-items:center;
justify-content: center;
//outline: none;
@media ${device.mobile} {
  ${props => props.value !==''? `margin-top: 0
  ` :`margin-top: 20px;
  `};
}  

`;

export const ImagenLupa = styled.img`
   height: 40px;
   width: 40px;
   margin-top:25px;
@media ${device.mobile} {
  ${props => props.value ===''? 
  `height: 40px;
   width: 40px;
   ` :
  `height: 30px;
   width: 30px; 
   margin-top:0px;
   `};`



export const FormBusqueda = styled.form`
display: flex;
width: 100%;
height: 70px;
//border-radius: 50px;
@media ${device.tablet} {
    margin-left: 20px;
    height: 30px;
  } 
`;

export const InputBusqueda = styled.input`
display: flex;
width: 100%;
height: 70px;
font-size: 30px;
color: #939598;
padding-left: 3%;
border: none;
background-color: transparent;
outline: none;
//border-radius: 50px;
${props => props.value !== ''? `@media ${device.tablet} {
  height: 30px;}`:null}`;

//////////////////////// FOOTER BOTONES ////////////////////////

export const Botones = styled.div`
    display: flex;
    width: 100%;
    margin-top:5%;
    flex-direction: row;
    justify-content: center;   
    @media ${device.mobile} {
    margin-bottom:20px;
}     
`;

export const Cancelar = styled.button`
   width:35%;
   height:70px;
   border-radius: 3px;
   background-color: #FF4343;
   color: #ffffff;
   border: 1px solid #FF4343;
   cursor:pointer;
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-right: 18px;
  outline:none;
 
  @media ${device.mobile} {
  width:32%;
  height:40px;
  font-size: 18px;
  padding: 3px 10px 3px 10px;
}
`;

export const BotonTeclado = styled.button`
  border-radius: 3px;
  border:0px solid #1DB779;
  background:none;
  outline:none;
  cursor: pointer;
  `;

export const Teclado = styled.img`
  width:90px;
  height:70px;
  @media ${device.mobile} {
    width: 50px;
    height:40px;
}
`;

export const Siguiente = styled.button`
  width:35%;
  height:70px;
  border-radius: 3px;
  background-color: #1DB779;
  border:1px solid #1DB779;
  color: #ffffff;
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 18px;
  outline:none;
  cursor: pointer;
  @media ${device.mobile} {
  width:32%;
  height:40px;
  font-size: 18px;
}
  `;


    ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////// VISTA PLCONFIRMACION CONTAINER ////////////////

  export const ContainerGeneral = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;
  //flex-direction: row;
  @media ${device.tablet} {
      
      flex-direction: column;
      height: 145vh;
    }
  `;

    //////////////////////////// BARRA BUSCADOR /////////////////////////////


 export const DivScroll = styled.div`
 display:flex;
 flex-direction:column;
 aling-items:center;
 margin-top:5%;
 height:60%;
 width: 90%;
 overflow:auto;
 @media ${device.tablet} {
      
  height:45%;
}
 `


///////////////////////////// TITULO PRODUCTO Y CANTIDAD ///////////////////////

export const ProductoCantidadDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 90%;
height:10%;
//align-items: center;
margin-left: 5%;
margin-right: 5%;
margin-bottom: 2%;
padding-top: 4%;
@media ${device.tablet} {
justify-content: space-between;
}
`;

export const ProductoTitulo = styled.div`
  color: #273947;
  //font-family: Roboto;
  font-size: 16px;
  width: 45%;
  @media ${device.tablet} {
    font-size: 12px;    
  } 
`;

export const CantidadTitulo = styled.div`
color: #273947;
  //font-family: Roboto;
  font-size: 16px;
  margin-left: 28   %;
  width: 80px;
  @media ${device.tablet} {
    font-size: 12px;  
  } 
`;

///////////////////////////// PRODUCTOS BUSCADOS ////////////////////////////


export const ProductosDiv = styled.div`
display: flex;
height: 50%;
width: 90%;
margin-left: 5%;
margin-right: 5%;
background-color: white;
margin-bottom: 3%;
align-items: center;
justify-content: space-between;
border-top: 6 px solid #08C4C4;
border-left: red;
@media ${device.tablet} {
  margin-left: 1%;
  margin-right: 0%;
  margin-bottom: 1%;
  width: 95%;
} 
  $//{({ selected, div }) => {
  //    if(selected.includes(div)) return 'border: 4px solid #1db779 !important;'
  //  }}
`;

export const DivIzqProducto = styled.div`
display: flex;
//flex-direction: column;
width: 70%;
//height: 
//justify-content: flex-start;
margin: 10px;
@media ${device.tablet} {
    //font-size: 12px;
    width: 100%;
    
  } 

`;

export const DivImgTilde = styled.img`
  width:20px;
  height:20px;
`

export const ImgProdu = styled.div`
//width: 50%;
//height: 100%;
flex-direction: column;
`;

export const ImagenProdu = styled.img`
width: 100px;
height: auto;
@media ${device.tablet} {
    width: 70px;    
    height: auto;
  } 

`;
export const DescriProducto = styled.div`
display: flex;
flex-direction: column;
width: 80%;
justify-content: space-evenly;
margin-left: 20px;
@media ${device.tablet} {
  margin-left: 5px;
    width: 60%;    
    height: auto;
  } 


`;

export const H1Descri = styled.div`
height: 40px;
  width: 100%;
  color: #939598;
  //font-family: Roboto;
  font-size: 17px;
  letter-spacing: 1px;
  line-height: 21px;
  @media ${device.tablet} {
    font-size: 10px;
    letter-spacing: 0;
    line-height: 10px;
  } 

`;

export const DivFilaBarritas = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;

export const ImagenBarritasProdu = styled.img`
height: 20px;
width: 24px;
@media ${device.tablet} {
    height: 16px;
     width: 18px;
    
    
  }
`;

export const H1codBarras = styled.div`
  height: 14px;
  //width: 97px;
  color: #273947;
  //font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 14px;
  margin-left: 10px;
  @media ${device.tablet} {
    font-size: 10px; 
  }
`;

export const Kilos = styled.div`
  display: flex;  
  height: 49px;
  width: 96px;
  color: #273947;
  //font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 3%;
  border: 1px solid #E8EAF6;
  border-radius: 50px;
  box-sizing: border-box;
  @media ${device.tablet} {
    font-size: 10px;
    justify-content: flex-start;
    width: 80px;
    margin-left: 0%;
    border: none;
  } 
`;

export const TrashDiv = styled.button`
  display: flex; 
  margin-right: 2%;
  height: 45px;
  width: 55px;
  justify-content: center;
  background-color:#FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius:15px;
  cursor: pointer;
  outline:none;
  &:active{
    border: 3px solid #000000;
    ${props => props.color?
    `background-color:#FF0000;`
    :
    'background-color: #08C4C4'
  }}
`;

export const TrashImagen = styled.img`
height: 35px;
width: 35px;
`;

export const LineaDeColor = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 10px;
background-color: #08C4C4;
border-radius: 0 3px 3px 0; 

`;

///////Producto cantidad

export const DivCantidadStock = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 5%;
`;
export const DivCantidadProdu = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 65px;
  width: 155px;
  border: 1px solid #E8EAF6;
  border-radius: 3px;
  text-align: center;
  justify-content: center;
`;
export const H1CantidadDeProdu = styled.h1`
color: #273947;
  //font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`;
export const StockLetras = styled.div`
  margin-left: auto;
  margin-right: auto;  
  height: 25px;
  color: #1DB779;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;
export const ContStock = styled.div`
  display: flex;
  margin-left: 7%;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color:#1DB779;
  @media ${device.mobile} {
  font-size: 16px;
  margin-bottom:5px;
}
`;
export const StockCien = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid #1DB779;
  color:#1DB779;
  padding: 3px 10px 3px 10px;
  @media ${device.mobile} {
    font-size: 15px;
    padding: 1px 5px 1px 5px;
}
`;
export const LineaFina = styled.div`
  display: flex;  
  height: 70%;
  width: 2px;
  flex-direction: column;
  background-color: #E8EAF6;
  @media ${device.tablet} {
    margin-left: 5%;
}
`;
export const CantidadSeleccionadaProdu = styled.div`
text-align: center;
justify-content: center;
margin-left: 3%;
@media ${device.tablet} {
    margin-left: 0%;
  }
`;
export const CantidadSeleccionadaProduH1 = styled.h1`
  color: #273947;
  //font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

//////////////////// TOTALES CALCULADOS DE BALANZA ///////////////////////
export const DivGralBalanza = styled.div`
display: flex;
width: 100%;
margin-top: 6%;
${props => props.color? 'border-top: 6px solid #FF4343;' : 'border-top: 6px solid #1DB779;'}               // cambiar a color rojo: #FF4343
padding-top: 5%;
padding-left: 7%;
padding-right: 7%;
padding-bottom: 5%;
justify-content: space-between;
flex-direction:row;
background-color: rgba(244,245,251,0.5);
`;
export const ColuPesoTotal = styled.div`
display: flex;
flex-direction: column;
width: 65%;
//margin-top: 5%;
`;
export const TotalTitulo = styled.div`
color: #273947;
  //font-family: Roboto;
  font-size: 28px;
`;
export const ImporteDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 2%;
`;
export const IconoCuentaDiv = styled.div`
align-items: center;
`;
export const IconoCuentaImg = styled.img`
height: 40px;
width; 40px;
`;
export const H1Importe = styled.div`
  ${props => props.color? 'color:#FF4343':'color:#1DB779;'}
  //font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  margin-left: 4%;
`;
export const PesoVerde = styled.div`
display: flex;
height: 60px;
width: 110px;
//margin-left: 22%;
margin-top: 2%;
align-items: center;
justify-content: center;
text-align: center;
${props => props.color?'border: 1px solid #FF4343;':'border: 1px solid #1DB779;'}                 
@media ${device.tablet} {
    height: 40px;
}
`;
export const H1PesoVerde = styled.h1`
${props => props.color? 'color:#FF4343;':'color:#1DB779;'}
  //font-family: Roboto;
  font-size: 23px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 18   px;
  }
`;