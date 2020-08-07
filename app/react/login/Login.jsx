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
  ErrorLabel,
  Span,
  ImgLogo,
  DivLoading,
  Loadingg,
} from './style';

import logoJanis from '../../images/logo_janis.svg';
import janisLogoInf from '../../images/janis_logo.svg';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import Loading from '../../Lotties/7774-loading.json';

export default ({
  handleSubmit,
  handleChange,
  error,
  mensaje,
  valor,
  inicio,
  handleClick,
  active,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <DivContenedor>
      <DivImage>
        <DivLogoSuperior>
          <DivCuadrado />
          <DivLogoImg>
            <Image src={logoJanis} alt="Logo" />
          </DivLogoImg>
        </DivLogoSuperior>
        <DivLogoLetras>
          <ImgLogo src={janisLogoInf} alt="logoJanis" />
        </DivLogoLetras>
      </DivImage>
      <DivContectForm>
        <DivForm>
          <DivTitle>
            <H1>Connect to janis</H1>
            <H3>Enter your data</H3>
            {error ? <ErrorLabel>{mensaje}</ErrorLabel> : null}
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
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                      {valor.email === '' ? <Span>In required</Span> : null}
                    </DivInput2>
                  </DivInput1>
                </DivInput>
              </SubInput>
              {inicio ? (
                <DivLoading active={active}>
                  <Loadingg>
                    <Lottie
                      options={defaultOptions}
                      width={100}
                      height={100}
                      isStopped={false}
                      isPaused={false}
                    />
                  </Loadingg>
                </DivLoading>
              ) : null}
              <SubInput>
                <Label colors={valor.password}>Password</Label>
                <DivInput>
                  <DivInput1>
                    <DivInput2>
                      <DivInput3></DivInput3>
                      <Input
                        colors={valor.password}
                        type="password"
                        name="password"
                        onChange={handleChange}
                      />
                      {valor.password === '' ? <Span>In required</Span> : null}
                    </DivInput2>
                  </DivInput1>
                </DivInput>
              </SubInput>
            </FormInput>
            <FormButtom>
              <Forgot>
                <Link to="/forgotPassword" style={{ textDecoration: 'none' }}>
                  <TagA href="#">Forgot Password</TagA>{' '}
                </Link>
              </Forgot>
              <Button onClick={() => handleClick()}>Enter</Button>
            </FormButtom>
          </Form>
        </DivForm>
      </DivContectForm>
    </DivContenedor>
  );
};
