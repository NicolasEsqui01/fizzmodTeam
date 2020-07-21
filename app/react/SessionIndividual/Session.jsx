import React from 'react'
import {
Container,
LIzquierdo,
LDerecho,
HeaderDiv,
Text,
DivScroll,
Productos,
Img,
Icono,
Icono2,
Icono3,
Icono4,
DivR,
DivP,
DivX,
DivZ,
DivB,
Descripcion,
Num,
Num2,
Ean,
Cantidad,
} from './style'
import Navbar from '../Navbar/NavbarContainer';
import basket from '../../images/basket.svg';
import scanner from '../../images/scanner.svg';
import box from '../../images/box.svg';
import substitute from '../../images/substitute.svg';
import waves from '../../images/wavesCelest.svg';
import balance from '../../images/balance.svg';
import snow from '../../images/snowflakeCelest.svg';


export default ()=>{
    const prueba = [1,2,3,4,5,6,7,8,9,10]


return(
    <>
    <Navbar /> 
    <Container>
    <LIzquierdo>
Lado izquierdo

    </LIzquierdo>



    <LDerecho>

  <HeaderDiv>
<Text>PRODUCTOS</Text>
<Text>CANTIDAD</Text>
   </HeaderDiv>

<DivScroll>

{ prueba.map(elem =>
<Productos>

   
    <DivR >
      <Img src={basket}/>
    <DivX>
      <Descripcion>DESCRIPCION DEL PRODUCTO</Descripcion>

    <DivZ>
      <Icono2 src= {scanner}/>
      <Ean>1234456112</Ean>
      <Cantidad>30 / 30</Cantidad>
    </DivZ>

    </DivX>

    </DivR>
       <hr></hr>
    <DivP>
       <Icono src={basket}/>
       <Num> 1. </Num>
       <Icono3 src={box}/>
       <Num2>5f0507d88459ab000839154e</Num2>
       <DivB>
       <Icono4 src={balance}/>
       <Icono4 src={substitute}/>
       </DivB>
    </DivP>
    
</Productos>
)}

</DivScroll>

    </LDerecho>

</Container>

    </>

)

}