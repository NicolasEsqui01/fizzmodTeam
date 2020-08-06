import React, { useEffect, useState } from 'react';

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
} from './style';
import XWhite from '../../images/cross_light_White.svg';
import Mensaje from '../../images/comment.svg';
import scanner from '../../images/scanner.svg';
import trash from '../../images/trash.svg';

export default ({ active, onCloseClick, wheights, handleRemoveItem }) => {
  return (
    <>
      <DivZ active={active}>
        <ButtonX>
          <ImgX2 src={XWhite} onClick={onCloseClick} />
        </ButtonX>
        <HeaderDiv>
          <TextB>PRODUCTOS</TextB>
          <TextB2>CANTIDAD</TextB2>
        </HeaderDiv>
        <DivScroll>
          {wheights.map((elem, idx) => (
            <>
              <PopUpProduAcum key={elem.id}>
                <DivR>
                  <ImgM src={elem.img} />
                  <DivX>
                    <Descripcion>
                      {elem.name}
                    </Descripcion>
                    <DivF>
                      <Icono src={scanner} />
                      <Ean>{elem.ean}</Ean>
                    </DivF>
                  </DivX>
                  <Cantidad>{elem.qty} kgs.</Cantidad>
                  <ImgT src={trash} onClick={() => { handleRemoveItem(idx) }} />
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
