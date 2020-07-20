import styled from 'styled-components'
import { device } from '../../utils/mediaQuerys';

export const Container = styled.div`
@media ${device.tablet} {
    display: flex;
    flex-direction: column;
  } @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 96vh;
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    body {
      font-family: 'Roboto', sans-serif;
    }
  `;

export const LIzquierdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  @media only screen and (max-width : 768px) {
  	width: 100%;
    height: 95vh;
  }
`
export const LDerecho = styled.div`

background-color:#E8EAF6;
width: 65%;
display: flex;
flex-direction: column;
@media ${device.tablet} {
    width: 100%;
     display: flex;
    flex-direction: column;
  }
  `;