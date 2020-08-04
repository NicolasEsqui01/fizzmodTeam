import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ColuIzquierda,
  PickingTituloDiv,
  PickingLogoDiv,
  PickingLogo,
  PickingTitulo,
  DivInfoProdu,
  ParteIzqDiv,
  Sup,
  CuadroGrill,
  ContainerGrillCuadros,
  NumCuadrados,
  LogoCajitasDiv,
  LogoCajitasImg,
  ParteDerDiv,
  ImagenProduDiv,
  ImagenProduImg,
  DescriProdu,
  DivGralPrecio,
  DivPrecio,
  PrecioTachado,
  Precio,
  PesoDiv,
  Peso,
  H1Peso,  
  ColuDerecha,
  LogoDerechoDiv,
  ImagenGrandeDiv,
  ImagenGrande,
  H1PickingLibre,
  H1Comenzar,
  DivBuscador,
  DivImagenBuscador,
  ImagenLupa,
  FormBusqueda,
  InputBusqueda,
  Botones,
  Cancelar,
  BotonTeclado,
  Teclado,
  Siguiente,
} from './style';

import IconoHeaderImg from '../../images/icono_Header.png';
import ImgPickingLibre from '../../images/icn_picking-libreVerde.svg';
import Lupita from '../../images/search.svg';
import TecladoIcono from '../../images/tecladoIcono.png';
import IconoIzq from '../../images/Icono_izq.png';
import Carne from "../../images/carne.png";

export default () => {
  return (
    <Container>
      <ColuIzquierda>
        <PickingTituloDiv>
          <PickingLogoDiv>
            <PickingLogo src={IconoHeaderImg} />
          </PickingLogoDiv>
          <PickingTitulo>Picking Libre</PickingTitulo>
        </PickingTituloDiv>

        <DivInfoProdu>
          <ParteIzqDiv>
            {/* <LogoCajitasDiv>
              <LogoCajitasImg src={IconoIzq} />
            </LogoCajitasDiv> */}

                        <Sup>
                        <ContainerGrillCuadros>
                          <CuadroGrill />
                          <CuadroGrill />
                        </ContainerGrillCuadros>
                        <ContainerGrillCuadros>
                          <CuadroGrill className="bkgColor" />
                          <CuadroGrill />
                        </ContainerGrillCuadros>
                        <ContainerGrillCuadros>
                          <CuadroGrill />
                          <CuadroGrill />
                        </ContainerGrillCuadros>
                        <NumCuadrados>3</NumCuadrados>
                      </Sup>



          </ParteIzqDiv>
          <ParteDerDiv>
                <ImagenProduDiv>
                    <ImagenProduImg src= {Carne}/>
                </ImagenProduDiv>
            <DescriProdu>Nombre del producto largo en dos lineas lorem ipsum</DescriProdu>
            
          </ParteDerDiv>
          
        </DivInfoProdu>
        
        <DivGralPrecio>
            
                <DivPrecio>
                    <PrecioTachado>$1000,00</PrecioTachado>
                    <Precio>$1000,00</Precio>
                </DivPrecio> 
          <PesoDiv>     
            <Peso>
             <H1Peso>25 kgs</H1Peso>
             </Peso>  
           </PesoDiv>     
        </DivGralPrecio>
       
      </ColuIzquierda>
      <ColuDerecha>
        <LogoDerechoDiv>
          <ImagenGrandeDiv>
            <ImagenGrande src={ImgPickingLibre} />
          </ImagenGrandeDiv>
          <H1PickingLibre>Picking Libre</H1PickingLibre>
          <H1Comenzar>Comienza a pickear los productos</H1Comenzar>
        </LogoDerechoDiv>

        <DivBuscador>
          <DivImagenBuscador type="submit">
            <ImagenLupa src={Lupita} />
          </DivImagenBuscador>
          <FormBusqueda>
            <InputBusqueda
              // handleChange={handlerChange}

              type="text"
              placeholder="Buscar productos "
            ></InputBusqueda>
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
  );
};
