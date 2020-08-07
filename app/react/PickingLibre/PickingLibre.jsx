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
  DivGralBalanza,
  ColuPesoTotal,
  TotalTitulo,
  ImporteDiv,
  H1Importe,
  IconoCuentaDiv,
  IconoCuentaImg,
  PesoVerde,
  H1PesoVerde,
} from './style';

import IconoHeaderImg from '../../images/icono_Header.png';
import ImgPickingLibre from '../../images/icn_picking-libreVerde.svg';
import Lupita from '../../images/search.svg';
import TecladoIcono from '../../images/tecladoIcono.png';
import Carne from '../../images/carne.png';
import Trash from '../../images/trash.svg';
import Barritas from '../../images/bar_code.svg';
import Like from '../../images/like.svg';
import IconoTotals from "../../images/totals.svg";
import PopUpControlDePeso  from '../PopUps/PopUpControlDePeso'

/* isWeighable */
export default ({
  value,
  handleChange,
  BotonOK,
  dentro,
  BotonBasura /* showInput, setShowInput */,
  handleClick,
  goToPickSubstitue,
  itemsSelected,
  item,
  acum,
  sumar,
  restar,
  total,
  valorTotal,
  valorResta,
  Activar,
  active, 
  onCloseClick
}) => {
  const arr = [1, 2, 3, 4, 5];
 
 
  return (
    <>
    <PopUpControlDePeso acum={acum} active={active} onClickClose={onCloseClick} principal={item.purchasedQuantity}/>
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
          { item.isWeighable ?
           <PesoDiv>
             <Peso>
              <H1Peso>{item.purchasedQuantity}kgs</H1Peso>
            </Peso>
          </PesoDiv> : null}
        </DivGralPrecio>
        {item.isWeighable === false?
        <DivCantidadStock>
          <DivCantidadProdu>
            <H1CantidadDeProdu>x {purchasedQuantity}</H1CantidadDeProdu>
          </DivCantidadProdu>
          <ContStock>
            Stock
            <StockCien>+100</StockCien>
          </ContStock>
        </DivCantidadStock>:null}

        { item.isWeighable && acum !== 0 ?
         item.purchasedQuantity < acum ?
         <DivGralBalanza color = {true}>
           <ColuPesoTotal>
           <TotalTitulo>TOTAL</TotalTitulo>  
           <ImporteDiv>
             <IconoCuentaDiv>
               <IconoCuentaImg src={IconoTotals}/>
             </IconoCuentaDiv>
             <H1Importe color = {true}> ${total}</H1Importe>
           </ImporteDiv>
           </ColuPesoTotal>
           <PesoVerde color = {true}>
               <H1PesoVerde color = {true}>{acum} kgs</H1PesoVerde>
             </PesoVerde>
         </DivGralBalanza>
         :
        <DivGralBalanza>
          <ColuPesoTotal>
          <TotalTitulo>TOTAL</TotalTitulo>  
          <ImporteDiv>
            <IconoCuentaDiv>
              <IconoCuentaImg src={IconoTotals}/>
            </IconoCuentaDiv>
            <H1Importe>${total}</H1Importe>
          </ImporteDiv>
          </ColuPesoTotal>
          <PesoVerde>
              <H1PesoVerde>{acum} kgs</H1PesoVerde>
            </PesoVerde>
        </DivGralBalanza>:null} 

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
                  <ProductosDiv selected={itemsSelected} div={element}>
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
                  {/*  { element.isWeighable ? */}
                    <Kilos>1 kgs</Kilos>
                    :{/* 
                    <>
                    <LineaFina />
                    <CantidadSeleccionadaProdu>
                      <CantidadSeleccionadaProduH1>
                        x 1
                      </CantidadSeleccionadaProduH1>
                    </CantidadSeleccionadaProdu>
                    </>
                    } */}
                    {dentro && dentro.includes(idx) ? (
                      <TrashDiv color={true}>
                        <TrashImagen
                          src={Trash}
                          onClick={() => {
                            BotonBasura(idx);
                            handleClick(element);
                            restar(1)
                            valorResta(50)

                          }}
                        />
                      </TrashDiv>
                    ) : (
                      <TrashDiv color={false}>
                        <TrashImagen
                          src={Like}
                          onClick={() => {
                        /*     element.isWeighable?  */
                            BotonOK(idx);
                            handleClick(element); // CUANDO SEA REAL CAMBIARLO POR element.id
                            sumar(1);
                            valorTotal(50)
                          }}
                        />
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
          <Siguiente /* onClick={goToPickSubstitue} */ onClick={()=>Activar(8)}>SIGUIENTE</Siguiente>
        </Botones>
      </ColuDerecha>
    </Container>
    </>
  );
};
