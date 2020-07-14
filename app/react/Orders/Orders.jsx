import React from 'react';
import {
  ListOrdenes,
  Numero,
  Text,
  Num,
  NumP,
  Img,
  ImgP,
  DivN,
  DivT,
  DivP,
  DivS,
  Peso,
  Frio,
  Aire,
  Marca,
  Marca2,
  Info,
} from './style';
import box from '../../images/24x24/box.svg';
import waves from '../../images/24x24/waves.svg';
import balance from '../../images/24x24/balance.svg';
import snow from '../../images/24x24/snowflake.svg';
import substitute from '../../images/24x24/substitute.svg';
import store from '../../images/24x24/store.svg';

export default () => (
  <>
    <ListOrdenes>
      <Img src={box} />
      <DivN>
        <Numero>Nro. 43782599043789</Numero>
        <DivT>
          <Text>
            <Num>86</Num> Items/
          </Text>
          <Text>
            <Num>16</Num> min
          </Text>
        </DivT>
        <DivP>
          <Peso>
            <ImgP src={balance} />
            <NumP>23</NumP>
          </Peso>
          <Frio>
            <ImgP src={snow} />
            <NumP>23</NumP>
          </Frio>
          <Aire>
            <ImgP src={waves} />
            <NumP>23</NumP>
          </Aire>
        </DivP>
        <DivS>
          <Marca>
            <ImgP src={substitute} />
            <Info>= Marca, = Gramage</Info>
          </Marca>
        </DivS>
        <DivS>
          <Marca2>
            <ImgP src={store} />
            <Info>Retiro por tienda</Info>
          </Marca2>
        </DivS>
      </DivN>
    </ListOrdenes>
  </>
);
