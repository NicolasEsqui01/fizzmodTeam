import styled from 'styled-components';
import fondoImag from '../../images/Janis-login-image.jpg'

export const DivContenedor = styled.div`
  background-color: white;
  display: flex;
  @media screen and (max-width: 1023px){
    flex-direction: column;
  }
`;
export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: space-between;
  opacity: 1;
  height: 100vh;
  width: 36vw;
  background-image: url('${fondoImag}');
  @media screen and (max-width: 1023px){
    width: 100vw;
    height: 180px;
    background-size: 100%;
    background-position: center center;
`;

export const DivLogoSuperior = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 35vh;
  @media screen and (max-width: 1023px){
    height: 70%;
    -webkit-box-pack: start;
    justify-content: flex-start;
`;

export const DivCuadrado = styled.div`
  background-color: rgb(41, 121, 255);
  height: 13px;
  width: 150px;
  @media screen and (max-width: 1023px){
    height: 8px;
    width: 70px;
    margin-bottom: 24px;
`;

export const DivLogoImg = styled.div`
  height: 150px;
  width: 150px;
  background-color: rgb(41, 121, 255);
  border-radius: 150px;
  display: flex;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 1023px){
    height: 70px;
    width: 70px;
  `;

export const Image = styled.img`
  height: 106px;
  width: 100%;
`;

export const DivLogoLetras = styled.div``;

export const DivContectForm = styled.div`
   display: flex;
   flex-direction: column;
   -webkit-box-pack: center;
   justify-content: center;
   width: 64vw;
   position: relative;
   margin: auto;
   min-height: 425px;
   padding: 0px 10%;
`;

export const DivForm = styled.div`
   display: flex;
   flex-direction: column;
   -webkit-box-pack: center;
   justify-content: center;
   position: relative;
   height: 480px;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1023px){
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 39px;
}
`;
export const H1 = styled.h1`
  color: rgb(39, 57, 71);
  font-family: Roboto, sans-serif;
  //font-size: 26px;
  font-weight: bold;
  line-height: 36px;
  @media screen and (max-width:1023){
    margin-top:20px;
  }
`;



export const H3 = styled.h3`
  color: rgb(147, 149, 152);
  font-family: Roboto, sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: normal;
  margin-bottom: 20px;
  @media screen and (max-width:1023){
    margin-top:6px;
  }
`;
export const Form = styled.form`
  display: block;
`;

export const FormInput = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 46px;
`;
export const SubInput = styled.div`
   // display: flex;
   // -webkit-box-align: center;
   // align-items: center;
    height: 58px;
    margin-bottom: 26px;
`;

export const DivInput = styled.div`
   width: 100%;
`;
export const DivInput1 = styled.div`
   position: relative;
   width: 100%;
`;
export const DivInput2 = styled.div`
   position: relative;
   width: 100%;
`;
export const DivInput3 = styled.div`
   position: absolute;
   font-size: 14px;
   font-weight: 400;
   color: rgb(147, 149, 152);
   height: 30px;
   line-height: 30px;
   bottom: 0px;
   left: 0px;
   pointer-events: none;
   transform-origin: left top;
   transform: translate(0px, -18px) scale(0.75);
   transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

export const FormButtom = styled.div`
  display: flex;
  flex-direction:column;
  @media screen and (max-width: 1023px){
    align-self: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column-reverse;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;}
`;

export const Forgot = styled.div`
  display: flex;
  flex-direction: column;
  height: 16px;
  color: rgb(41, 121, 255);
  font-family: Roboto, sans-serif;
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 36px;
`;

export const Button = styled.button`
  background-color: rgb(41, 121, 255);
  color: rgb(255, 255, 255);
  font-family: Roboto, sans-serif;
  border-radius: 50px;
  border: 1px solid rgb(41, 121, 255);
  width: 135px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 42px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  position: relative;
  z-index: 0;
  padding: 0px 16px;
  outline:none;
  @media screen and (max-width: 1023px){
    margin-bottom: 18px;
    width: 160px;
    height: 42px;}
`;

export const TagA = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Label = styled.label`
  font-size: 13px;
  font-family: Roboto, sans-serif;
  flex-shrink: 0;
  color: ${props => props.colors === '' ? 'rgb(255, 67, 67)' : 'rgb(147, 149, 152)'};
  width: 100%;
  line-height: 16px;
`;
export const Input = styled.input`
  box-shadow: white 0px 0px 0px 30px inset;
  height: 30px;
  border-top-width: initial;
  border-right-width: initial;
  border-left-width: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  border-style: none none solid;
  border-image: initial;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border-bottom: ${props => props.colors === '' ? '1px solid rgb(255, 67, 67)' : '1px solid rgb(213, 215, 219)' };
  border-radius: 0px;
  outline:none;
`;

export const LabelForgot = styled.label`
  color: rgb(41, 121, 255);
  text-transform: uppercase;
  height: 11px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.77px;
  line-height: 11px;
  @media screen and (max-width:1023){
    margin-top:10px;
  }  
`
export const Span = styled.span`
  color: rgb(255, 67, 67);
  font-size: 12px;
  line-height: 14px;
  transform: translateY(-6px);
  word-break: break-word;
`