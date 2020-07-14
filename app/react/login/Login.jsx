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
  TagA
} from './style';

import logoJanis from '../../images/logo_janis.svg';

export default ({ handleSubmit, handleChange, valor }) => {
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
          <Form>
            <FormInput>
              <SubInput>
                  <Label>Email</Label>
                  <Input type='text'/>
              </SubInput>
              <SubInput>
                  <Label>Password</Label>
                  <Input type='password'/>
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

{
  /* <form onSubmit={handleSubmit}>
                <label>Codigo Manual</label>
                <br/>
                <input type="text" name='codigo' placeholder='ingresar el codigo' onChange={handleChange} value={valor}/>
                <input type="submit" value="ingresar"/>
</form> */
}
