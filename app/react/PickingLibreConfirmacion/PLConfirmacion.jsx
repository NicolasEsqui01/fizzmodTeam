import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerGeneral,
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
  DivBuscadorDos,
  DivImagenBuscador,
  ImagenLupa,
  FormBusquedaDos,
  InputBusquedaDos,
  ProductoCantidadDiv,
  ProductoTitulo,
  CantidadTitulo,  

  ProductosDiv,
  DivIzqProducto,
  ImgProdu,
  ImagenProdu,
  DescriProducto,
  H1Descri,
  DivFilaBarritas,
  ImagenBarritasProdu,
  H1codBarras,
  Kilos,
  TrashDiv,
  TrashImagen,
  LineaDeColor,
  Botones,
  Cancelar,
  BotonTeclado,
  Teclado,
  Siguiente,
} from '../PickingLibre/style';

import IconoHeaderImg from '../../images/icono_Header.png';
import ImgPickingLibre from '../../images/icn_picking-libreVerde.svg';
import Lupita from '../../images/search.svg';
import TecladoIcono from '../../images/tecladoIcono.png';
import IconoIzq from '../../images/Icono_izq.png';
import Carne from '../../images/carne.png';
import Trash from "../../images/trashVerde.svg";
import Barritas from '../../images/bar_code.svg';

export default () => {
  return (
    <ContainerGeneral>
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
              <ImagenProduImg src={Carne} />
            </ImagenProduDiv>
            <DescriProdu>
              Nombre del producto largo en dos lineas lorem ipsum
            </DescriProdu>
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
        <DivBuscadorDos>
          <DivImagenBuscador type="submit">
            <ImagenLupa src={Lupita} />
          </DivImagenBuscador>
          <FormBusquedaDos>
            <InputBusquedaDos
              // handleChange={handlerChange}

              type="text"
              placeholder="Buscar productos "
            ></InputBusquedaDos>
          </FormBusquedaDos>
        </DivBuscadorDos>

        <ProductoCantidadDiv>
          <ProductoTitulo>PRODUCTO</ProductoTitulo>
          <CantidadTitulo>CANTIDAD</CantidadTitulo>
          </ProductoCantidadDiv>

        <ProductosDiv>
          <DivIzqProducto>
            <ImgProdu>
              <ImagenProdu src={Carne} />
            </ImgProdu>
            <DescriProducto>
              <H1Descri>
                Nombre del producto con doble linea lorem ipsum dolor sit amet
              </H1Descri>
              <DivFilaBarritas>
                <ImagenBarritasProdu src={Barritas} />
                <H1codBarras>4676283905037772</H1codBarras>
              </DivFilaBarritas>
            </DescriProducto>
          </DivIzqProducto>
          <Kilos>0 kgs</Kilos>
          <TrashDiv><TrashImagen src={Trash}/></TrashDiv>
          <LineaDeColor/>
        </ProductosDiv>

        <ProductosDiv>
          <DivIzqProducto>
            <ImgProdu>
              <ImagenProdu src={Carne} />
            </ImgProdu>
            <DescriProducto>
              <H1Descri>
                Nombre del producto con doble linea lorem ipsum dolor sit amet
              </H1Descri>
              <DivFilaBarritas>
                <ImagenBarritasProdu src={Barritas} />
                <H1codBarras>4676283905037772</H1codBarras>
              </DivFilaBarritas>
            </DescriProducto>
          </DivIzqProducto>
          <Kilos>0 kgs</Kilos>
          <TrashDiv><TrashImagen src={Trash}/></TrashDiv>
          <LineaDeColor/>
        </ProductosDiv>
        <Botones>
          <Cancelar>CANCELAR</Cancelar>
          <BotonTeclado>
            <Teclado src={TecladoIcono} />
          </BotonTeclado>
          <Siguiente>SIGUIENTE</Siguiente>
        </Botones>
      </ColuDerecha>
    </ContainerGeneral>
  );
};


