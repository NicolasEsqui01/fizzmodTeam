import React from 'react'
import {
Container,
LIzquierdo,
LDerecho
} from './style'
import Navbar from '../Navbar/NavbarContainer';


export default ()=>{


return(
    <>
    <Navbar /> 
    <Container>
    <LIzquierdo>
Lado izquierdo

    </LIzquierdo>
    <LDerecho>
lado derecho

    </LDerecho>



    </Container>

    </>

)

}