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
} from './style';
import IconoHeaderImg from '../../images/icono_Header.png';
import ImgPickingLibre from '../../images/icn_picking-libreVerde.svg';
import Lupita from '../../images/search.svg';
import TecladoIcono from '../../images/tecladoIcono.png';
import Carne from '../../images/carne.png';
import Trash from '../../images/trash.svg';
import Barritas from '../../images/bar_code.svg';
import Like from '../../images/like.svg';

export default ({ value, handleChange, handleClick, goToPickSubstitue, idItemsSelected, itemsSelected, item, BotonOK, dentro}) => {
  const arr = [{
            "id": "A488FDDC597647DB900819C605AE98DB",
            "name": "Galletitas Rellenas Mana Limon Arcor 145g",
            "refId": "0779089500486",
            "ean": "123456",
            "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200378-100-100/mana_limon.jpg?v=636613011916900000",
            "zoneName": "congelados",
            "purchasedPrice": 50.99,
            "isWeighable": true,
            "isFresh": false,
            "isFractionable": true,
            "isFrozen": false,
            "customerNote": null,
            "groupIndex": 0,
            "pickedQuantity":0
            },
            {
            "ean": "2345897056432",
            "groupIndex": 1,
            "id": "1A3A124792624C4A952AA8673C85C4B0",
            "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200411-100-100/batidora_artisan.png?v=636791814171370000",
            "isFractionable": true,
            "isFresh": false,
            "isFrozen": false,
            "isWeighable": true,
            "name": "Batidora Artisan KSM15WH",
            "purchasedPrice": 32,
            "refId": "KSM15WH",
            "zoneName": "carnes",
            "pickedQuantity":0
            },
            {
            "ean": "7797470003633",
            "groupIndex": 1,
            "id": "861079FE7F1448DD9CF787D865BC154C",
            "imageUrl": "https://fizzmodarg.vteximg.com.br/arquivos/ids/200410-100-100/image-1cfdaa5c355f4f30a59fe85858e1291e.jpg?v=636771889078630000",
            "isFractionable": true,
            "isFresh": false,
            "isFrozen": false,
            "isWeighable": false,
            "name": "Tomate Triturado Marolio 980 Gr",
            "purchasedPrice": 83,
            "refId": "0779747000363",
            "zoneName": "frescos",
            "pickedQuantity":0
            }
          ]
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
              <ImagenProduImg src={item.imageUrl} />
            </ImagenProduDiv>
            <DescriProdu>
              Nombre del producto largo en dos lineas lorem ipsum
            </DescriProdu>
          </ParteDerDiv>
        </DivInfoProdu>

        <DivGralPrecio>
          <DivPrecio>
          <PrecioTachado>{item.purchasedPrice}</PrecioTachado>
            <Precio>{item.purchasedPrice}</Precio>
          </DivPrecio>
          <PesoDiv>
            <Peso>
              <H1Peso>{item.purchasedQuantity} kgs</H1Peso>
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
              arr.map((element, idx) => {
                return (
                  <ProductosDiv 
                  onClick={() => {
                    handleClick(element) // CUANDO SEA REAL CAMBIARLO POR element.id
                    }
                  }
                  selected={idItemsSelected}
                  div={element.id}>
                    <DivIzqProducto>
                      <ImgProdu>
                        <ImagenProdu src={element.imageUrl} />
                      </ImgProdu>
                      <DescriProducto>
                        <H1Descri>
                          {element.name}
                        </H1Descri>
                        <DivFilaBarritas>
                          <ImagenBarritasProdu src={Barritas} />
                          <H1codBarras>{element.ean}</H1codBarras>
                        </DivFilaBarritas>
                      </DescriProducto>
                    </DivIzqProducto>
                    <Kilos>0 kgs</Kilos>
                    {dentro && dentro.includes(idx) ? (
                      <TrashDiv color={true}>
                        <TrashImagen
                          src={Trash}
                          onClick={() => {
                            BotonBasura(idx);
                            handleClick(element);
                          }}
                        />
                      </TrashDiv>
                    ) : (
                      <TrashDiv color={false}>
                        <TrashImagen src={Like} onClick={() =>{ 
                          BotonOK(idx);
                          handleClick(element); // CUANDO SEA REAL CAMBIARLO POR element.id
                        }
                          } />
                      </TrashDiv>
                    )}
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
          <Siguiente onClick={goToPickSubstitue}>SIGUIENTE</Siguiente>
        </Botones>
      </ColuDerecha>
    </Container>
  );
};
