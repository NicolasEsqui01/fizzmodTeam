import React from 'react';
import { Link } from 'react-router-dom';
import {
  BuscadorDiv,
  DivImagenBuscador,
  ImagenLupa,
  FormBusqueda,
  InputBusqueda,
  DivGeneral,
  ProductoPreciodiv,
  ProductoTitulo,
  PrecioTitulo,
  ProductosDiv,
  DivIzqProducto,
  ImgProdu,
  ImagenProdu,
  DescriProducto,
  H1Descri,
  DivFilaBarritas,
  ImagenBarritasProdu,
  H1codBarras,
  H1Precio,
} from './style';

import carne from '../../images/carne.png';
import Barritas from '../../images/bar_code.svg';
import Lupita from '../../images/search.svg';

export default () => {
  return (
    <div>
      <BuscadorDiv>
        <DivImagenBuscador type= "submit">
          <ImagenLupa src={Lupita} 
          // handleSubmit={handleSubmit} 
          />
        </DivImagenBuscador>
        <FormBusqueda>
          <InputBusqueda 
            // handleChange={handlerChange}
                
                type="text" placeholder="Buscar productos por nombre, EAN..."></InputBusqueda>
        </FormBusqueda>
      </BuscadorDiv>
      <DivGeneral>
          <ProductoPreciodiv>
          <ProductoTitulo>PRODUCTO</ProductoTitulo>
          <PrecioTitulo>PRECIO</PrecioTitulo>
          </ProductoPreciodiv>
        {[1, 2, 3].map((Element) => {
          return (
            <>
              <ProductosDiv >
                <DivIzqProducto>
                  <ImgProdu>
                    <ImagenProdu src={carne} />
                  </ImgProdu>
                  <DescriProducto>
                    <H1Descri>
                      Nombre del producto con doble linea lorem ipsum dolor sit
                      amet
                    </H1Descri>
                    <DivFilaBarritas>
                      <ImagenBarritasProdu src={Barritas} />
                      <H1codBarras>4676283905037772</H1codBarras>
                    </DivFilaBarritas>
                  </DescriProducto>
                </DivIzqProducto>
                <H1Precio>$1.000,00</H1Precio>
              </ProductosDiv>
            </>
          );
        })}
      </DivGeneral>
    </div>
  );
};
