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
  DivScroll,
  DivCantidadStock,
  DivCantidadProdu,
  H1CantidadDeProdu,
  StockLetras,
  ContStock,
  StockCien,
  LineaFina,
  CantidadSeleccionadaProdu,
  CantidadSeleccionadaProduH1,
  DivImgTilde,
} from './style';

import IconoHeaderImg from '../../images/icono_Header.png';
import ImgPickingLibre from '../../images/icn_picking-libreVerde.svg';
import Lupita from '../../images/search.svg';
import TecladoIcono from '../../images/tecladoIcono.png';
import Carne from '../../images/carne.png';
import Trash from '../../images/trashVerde.svg';
import Barritas from '../../images/bar_code.svg';
import Tilde from '../../images/check_bold.svg';

export default ({ value, handleChange , date /* showInput, setShowInput */ }) => {
  const arr = [1, 2, 3, 4, 5];
  let cuadrados =
    localStorage.getItem('cuadradoChico') &&
    localStorage
      .getItem('cuadradoChico')
      .split(',')
      .map((Element) => (Element === 'true' ? true : false));
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
            <Sup>
              <ContainerGrillCuadros>
                {cuadrados.map((Element, indice) => {
                  return (
                    <CuadroGrill key={Element} numeros={indice} datos={date.value}>
                      {Element === true ? <DivImgTilde src={Tilde} /> : null}
                    </CuadroGrill>
                  );
                })}
              </ContainerGrillCuadros>
              <NumCuadrados>{date.value + 1}</NumCuadrados>
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
        {value === '' ? (
          <>
            <LogoDerechoDiv>
              <ImagenGrandeDiv>
                <ImagenGrande src={ImgPickingLibre} />
              </ImagenGrandeDiv>
              <H1PickingLibre>Picking Libre</H1PickingLibre>
              <H1Comenzar>Comienza a pickear los productos</H1Comenzar>
            </LogoDerechoDiv>
          </>
        ) : null}
        <DivBuscador value={value}>
          <DivImagenBuscador type="submit">
            <ImagenLupa value={value} src={Lupita} />
          </DivImagenBuscador>
          <FormBusqueda>
            <InputBusqueda
              onChange={handleChange}
              value={value}
              type="text"
              placeholder="Buscar productos "
            ></InputBusqueda>
          </FormBusqueda>
        </DivBuscador>
        {value !== '' ? (
          <DivScroll>
            {arr &&
              arr.map((element) => {
                return (
                  <ProductosDiv>
                    <DivIzqProducto>
                      <ImgProdu>
                        <ImagenProdu src={Carne} />
                      </ImgProdu>
                      <DescriProducto>
                        <H1Descri>
                          Nombre del producto con doble linea lorem ipsum dolor
                          sit amet
                        </H1Descri>
                        <DivFilaBarritas>
                          <ImagenBarritasProdu src={Barritas} />
                          <H1codBarras>4676283905037772</H1codBarras>
                        </DivFilaBarritas>
                      </DescriProducto>
                    </DivIzqProducto>
                    <Kilos>0 kgs</Kilos>
                    <TrashDiv>
                      <TrashImagen src={Trash} />
                    </TrashDiv>
                    <LineaDeColor />
                  </ProductosDiv>
                );
              })}
          </DivScroll>
        ) : null}
        <Botones>
          <Cancelar>CANCELAR</Cancelar>
          <BotonTeclado /* onClick={() => {setShowInput(true);}} */>
            <Teclado src={TecladoIcono} />
          </BotonTeclado>
          <Siguiente>SIGUIENTE</Siguiente>
        </Botones>
      </ColuDerecha>
    </Container>
  );
};
