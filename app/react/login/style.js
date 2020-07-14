import styled from 'styled-components';

export const DivContenedor = styled.div`
   background-color:white;
   display:flex;  
`
export const DivImage = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   -webkit-box-pack:center;
   justify-content: space-between;
   opacity: 1;
   height:100vh;
   width:36vw;
   background-image:url('https://fotos.perfil.com/2019/01/01/trim/1280/720/10-toyota-corolla.jpg')
`

export const DivLogoSuperior = styled.div`
   display:flex;
   flex-direction:column;
   -webkit-box-pack: justify;
   justify-content:space-between;
   height:35vh;
   
`


export const DivCuadrado = styled.div`
   background-color: rgb(41, 121, 255);
   height:13px;
   width:150px;
`

export const DivLogoImg = styled.div`
   height: 150px;
   width: 150px;
   background-color: rgb(41, 121, 255);
   border-radius: 150px;
   display:flex;
   align-items:center;
   padding:20px;
`

export const Image = styled.img`
   height:106px;
   width:100%;
`

export const DivLogoLetras = styled.div`

`

export const DivContectForm = styled.div`
   display:flex;
   flex-direction:column;
   position: relative;
   margin: auto;
`

export const DivForm = styled.div`
   display: flex;
   flex-direction: column;
   position:relative
`


export const DivTitle = styled.div`
   display: flex;
   flex-direction: column;
`
export const H1 = styled.h1`
   color: rgb(39, 57, 71);
   font-family: Roboto, sans-serif;
   font-size: 26px;
   font-weight: 500;
   line-height: 36px;
`

export const H3 = styled.h3`
   color: rgb(147, 149, 152);
   font-family: Roboto, sans-serif;
   font-size: 13px;
   line-height: 15px;
   font-weight: normal;
   margin-bottom:20px;
`
export const Form = styled.form`
   display:block;
`

export const FormInput = styled.div`
   display: flex;
   flex-direction: column;
`
export const SubInput = styled.div`
   height: 63px;
   flex-direction: row;
   margin-bottom: 18px;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
`

export const FormButtom = styled.div`
   display:flex
`

export const Forgot = styled.div`
   display: flex;
   flex-direction: row-reverse;
   height: 16px;
   color: rgb(41, 121, 255);
   font-family: Roboto, sans-serif;
   font-size: 13px;
   line-height: 15px;
   margin-bottom: 36px;
`

export const Button = styled.button`
   background-color: rgb(41, 121, 255);
   color: rgb(255, 255, 255);
   border-radius: 50px;
   whidth:100px;
   height:50px;

`

export const TagA = styled.a`
   color: inherit;
   text-decoration: none;

` 

export const Label = styled.label`
   font-size: 13px;
   flex-shrink: 0;
   color: rgb(147, 149, 152);
   width: 100%;
   line-height: 16px;
`
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
`