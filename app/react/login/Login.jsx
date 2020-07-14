import React from 'react';
import {
  DivContenedor,
  DivImage,
  DivLogoLetras,
  DivLogoImg,
  DivCuadrado,
  DivLogoSuperior,
  Image,
  DivContectForm,
  DivTitle,
  DivForm,
  H1,
  H3,
  Form,
  FormInput,
  SubInput,
  FormButtom,
  Forgot,
  Button,
  Label,
  Input,
  TagA,
  DivInput,
  DivInput1,
  DivInput2,
  DivInput3,
} from './style';

import logoJanis from '../../images/logo_janis.svg';

export default ({ handleSubmit, handleChange, valor }) => {
  console.log(valor)
  return (
    <DivContenedor>
      <DivImage>
        <DivLogoSuperior>
          <DivCuadrado />
          <DivLogoImg>
            <Image src={logoJanis} alt="#" />
          </DivLogoImg>
        </DivLogoSuperior>
        <DivLogoLetras>janis</DivLogoLetras>
      </DivImage>
      <DivContectForm>
        <DivForm>
          <DivTitle>
            <H1>Connect to janis</H1>
            <H3>Enter your data</H3>
          </DivTitle>
          <Form onSubmit={handleSubmit}>
            <FormInput>
              <SubInput>
                  <Label>Email</Label>
                  <DivInput>
                    <DivInput1>
                      <DivInput2>
                        <DivInput3></DivInput3>
                        <Input type='text' name='email' onChange={handleChange}/>
                      </DivInput2>
                    </DivInput1>
                  </DivInput>
              </SubInput>
              <SubInput>
                  <Label>Password</Label>
                  <DivInput>
                    <DivInput1>
                      <DivInput2>
                        <DivInput3></DivInput3>
                        <Input type='password' name='password' onChange={handleChange}/>
                      </DivInput2>
                    </DivInput1>
                  </DivInput>
              </SubInput>
            </FormInput>
            <FormButtom>
              <Forgot>
                <TagA href='#'>Forgot Password</TagA>
              </Forgot>
              <Button>Enter</Button>
            </FormButtom>
          </Form>
        </DivForm>
      </DivContectForm>
    </DivContenedor>
  );
};

