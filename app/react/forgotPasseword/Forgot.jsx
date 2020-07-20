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
  Button,
  Label,
  Input,
  DivInput,
  DivInput1,
  DivInput2,
  DivInput3,
  LabelForgot,
  Span
} from './style';

import logoJanis from '../../images/logo_janis.svg';

export default ({ handleSubmit, handleChange, boolen ,valor}) => {
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
        {boolen ? (
          <DivTitle>
            <LabelForgot>Forgot Password</LabelForgot>
            <H1>Connect to janis</H1>
            <H3>Email sent <LabelForgot>{valor.email}</LabelForgot></H3>
            <H3>Check your email</H3>
          </DivTitle>
        ) : (
          <DivForm>
            <DivTitle>
              <LabelForgot>Forgot Password</LabelForgot>
              <H1>Connect to janis</H1>
              <H3>Enter your data</H3>
            </DivTitle>
            <Form onSubmit={handleSubmit}>
              <FormInput>
                <SubInput>
                  <Label colors={valor.email}>Email</Label>
                  <DivInput>
                    <DivInput1>
                      <DivInput2>
                        <DivInput3></DivInput3>
                        <Input
                          colors={valor.email}
                          type="text"
                          name="email"
                          onChange={handleChange}
                        />
                        {valor.email === '' ? <Span>In required</Span> : null}
                      </DivInput2>
                    </DivInput1>
                  </DivInput>
                </SubInput>
                <SubInput></SubInput>
              </FormInput>
              <FormButtom>
                <Button>Enter</Button>
              </FormButtom>
            </Form>
          </DivForm>
        )}
      </DivContectForm>
    </DivContenedor>
  );
};
