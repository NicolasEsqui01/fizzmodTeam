import React from 'react';
import {
  DIV2,
  DivO,
  DivC,
  ImgM,
  ImgX,
  TituloOb,
  ButtonX,
  DivP,
  Text,
  Color,
} from './style';
import Mensaje from '../../images/comment.svg';
import X from '../../images/cross_light.svg';

export default ({ active, onCloseClick , idSession , idItems}) => {

  const items = idSession.items && idSession.items.filter(Element => Element.id === idItems )

  return (
    <>
      <DIV2 active={active}>
        <Color></Color>
        <DivO>
          <DivC>
            <ImgM src={Mensaje} />
            <TituloOb> Observaciones </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivC>
          <DivP>
            {items === undefined || items.length === 0 ? null : <Text>{items[0].customerNote}</Text>}
          </DivP>
        </DivO>
      </DIV2>
    </>
  );
};
