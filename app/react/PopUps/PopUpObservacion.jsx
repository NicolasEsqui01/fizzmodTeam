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

export default ({ active, onCloseClick }) => {
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
            <Text>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptates est officia fuga quos a, enim vero labore ipsa quae,
              praesentium, harum porro eaque soluta delectus autem repellat?
              Sit, magni? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Exercitationem harum, tempora nisi quasi tenetur, nobis
              adipisci laborum recusandae quidem aliquid alias cupiditate quod,
              culpa delectus ratione porro minus unde minima.
            </Text>
          </DivP>
        </DivO>
      </DIV2>
    </>
  );
};
