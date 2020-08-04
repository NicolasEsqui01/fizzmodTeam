import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    ColuIzquierda,
    PickingTituloDiv,
    PickingLogoDiv,
    PickingLogo,
    PickingTitulo,
    ColuDerecha,
    LogoDerechoDiv,
    ImagenGrandeDiv,
    ImagenGrande,
    H1PickingLibre,
    H1Comenzar,
    DivBuscador,
    FormBusqueda,
    InputBusqueda,
    Botones,
    Cancelar,
    BotonTeclado,
    Teclado,
    Siguiente,


} from "./style";

import IconoHeaderImg from '../../images/icono_Header.png';
import ImgPickingLibre from "../../images/icn_picking-libreVerde.svg";
import TecladoIcono from '../../images/tecladoIcono.png';

export default () => {
    return (
        <Container>
            <ColuIzquierda>
            
                <PickingTituloDiv>
                    <PickingLogoDiv>
                        <PickingLogo src= {IconoHeaderImg}/>
                    </PickingLogoDiv>
                            <PickingTitulo>Picking Libre</PickingTitulo>
                </PickingTituloDiv>

            </ColuIzquierda>
            <ColuDerecha>
                <LogoDerechoDiv>
                    <ImagenGrandeDiv>
                        <ImagenGrande src={ImgPickingLibre}/>
                    </ImagenGrandeDiv>
                    <H1PickingLibre>Picking Libre</H1PickingLibre>
                    <H1Comenzar>Comienza a pickear los productos</H1Comenzar>    
                </LogoDerechoDiv>
            
                <DivBuscador>
                <FormBusqueda>
          <InputBusqueda 
            // handleChange={handlerChange}
                
                type="text" placeholder="Buscar productos "></InputBusqueda>
        </FormBusqueda>
            </DivBuscador>

                <Botones>
                    
                     <Cancelar>CANCELAR</Cancelar>
                      <BotonTeclado>
                        <Teclado src={TecladoIcono} />
                      </BotonTeclado>
                      <Siguiente>SIGUIENTE</Siguiente>
                        
                     
                  </Botones>  
                    
            </ColuDerecha>
        </Container>
    )

};    