import React from 'react';
import { ListOrdenes, Numero, Text, Num, Img, Div } from './style';
import box from '../../images/24x24/box.svg';

export default () => (
  <>
    <ListOrdenes>
      <Img src={box} />
      <Numero>Nro. 43782599043789</Numero>
      <br></br>
      <Div>
        <Text>
          <Num>86</Num> Items/
        </Text>
        <Text>
          <Num>16</Num> min
        </Text>
      </Div>
    </ListOrdenes>
  </>
);
