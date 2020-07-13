import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LIzquierdo = styled.div`
 
@media ${device.tablet}{
 width:100%;
}
@media ${device.laptop}{
    width : 40%
    background-color: red;
}
`;

export const LDerecho = styled.div`
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    background-color: blue;
    width: 60%;
    height: 500px;
  }
`;

/* const size = {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
  }
  
  
  export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet:`(max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.tablet})`,
  
  }; */
