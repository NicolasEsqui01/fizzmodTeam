import React from 'react'
import {
    DivZ,
    HeaderDiv,
    TextB,
    TextB2,
    ButtonX,
    ImgX2,
    ImgM,
    ImgT,
    DivScroll,
    PopUpProduAcum,
    DivR,
    DivX,
    Descripcion,
    Icono,
    DivF,
    Ean,
    Cantidad,
    Espacio,
 } from './style'
 import XWhite from '../../images/cross_light_White.svg'
 import Mensaje from '../../images/comment.svg'
 import scanner from '../../images/scanner.svg'
 import trash from '../../images/trash.svg'


 export default ({active, onCloseClick})=>{
    const Prueba = [1,2,3,4]
     return(
         <>
            <DivZ active={active}>
                  <HeaderDiv>
                    <TextB>PRODUCTOS</TextB>
                    <TextB2>CANTIDAD</TextB2>
                    <ButtonX onClick={onCloseClick}>
                      <ImgX2 src={XWhite} />
                    </ButtonX>
                  </HeaderDiv>
                  <DivScroll>
                    {Prueba.map((elem) => (
                      <>
                        <PopUpProduAcum key={elem.id}>
                          <DivR>
                            <ImgM src={Mensaje} />
                            <DivX>
                              <Descripcion>
                                DESCRIPCION DEL PRODUCTO
                              </Descripcion>
                              <DivF>
                                <Icono src={scanner} />
                                <Ean>1234456112</Ean>
                              </DivF>
                            </DivX>
                            <Cantidad>8 Kg</Cantidad>
                            <ImgT src={trash} />
                          </DivR>
                        </PopUpProduAcum>
                        <Espacio></Espacio>
                      </>
                    ))}
                  </DivScroll>
                </DivZ>
         </>
     )
 }
