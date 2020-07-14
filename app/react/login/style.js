import styled from 'styled-components';
import fondoImag from '../../images/Janis-login-image.jpg'

export const DivContenedor = styled.div`
  background-color: white;
  display: flex;
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
`;

export const DivLogoSuperior = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 35vh;
`;

export const DivCuadrado = styled.div`
  background-color: rgb(41, 121, 255);
  height: 13px;
  width: 150px;
`;

export const DivLogoImg = styled.div`
  height: 150px;
  width: 150px;
  background-color: rgb(41, 121, 255);
  border-radius: 150px;
  display: flex;
  align-items: center;
  padding: 20px;
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

export const DivTitle = styled.div``;
export const H1 = styled.h1`
  color: rgb(39, 57, 71);
  font-family: Roboto, sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 36px;
`;

export const H3 = styled.h3`
  color: rgb(147, 149, 152);
  font-family: Roboto, sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: normal;
  margin-bottom: 20px;
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
`;

export const Forgot = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
  border-radius: 50px;
  border: 1px solid rgb(41, 121, 255);
  width: 100px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 36px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  z-index: 0;
  padding: 0px 16px;
`;

export const TagA = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Label = styled.label`
  font-size: 13px;
  flex-shrink: 0;
  color: rgb(147, 149, 152);
  width: 100%;
  line-height: 16px;
`;
export const Input = styled.input`
  box-shadow: white 0px 0px 0px 30px inset;
  min-width: 400px;
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
  border-bottom: 1px solid rgb(213, 215, 219);
  border-radius: 0px;
`;
