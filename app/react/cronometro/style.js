import styled from 'styled-components';
import { device } from '../../utils/mediaQuerys';

export const DivReloj = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const ImageReloj = styled.img`
height: 24px;
width: auto;
@media ${device.tablet} {
  height: 20px;
}
`;


export const H1Tiempo = styled.div`
display:flex;
margin-left: 10px;
height: 19px;
//width: 65px;
color: #FFFFFF;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
letter-spacing: 0;
line-height: 19px;
@media ${device.tablet} {
  margin-left: 5px;  
  margin-left: 6px;
}
`;
