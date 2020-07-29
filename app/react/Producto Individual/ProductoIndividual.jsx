import React from 'react';
import {
  ContGral,
  ContMarca,
  ContInfo,
  ContDer,
  ContStock,
  Header,
  Cuadro,
  Img,
  Marca,
  Gramaje,
  ColDerecha,
  ColIzq,
  ColuIconos,
  IconoNum,
  IconoNumDos,
  StockLetras,
  StockCien,
  Cont,
  FotoProd,
  DivFoto,
  DivGlobos,
  ImagenGlobo,
  ImgH,
  MarcaH1,
  Descri,
  Tachado,
  Precio,
  ContBarras,
  BarritasCont,
  Barritas,
  CodProdu,
  ImgBarrita,
  ImBalanza,
  PesoProdu,
  ContImagenes,
  CuadritoUno,
  PesoCuadro,
  CuadritoDos,
  ImgBalanzasUno,
  ImgBalanzasMas,
  Instrucciones,
  RecuadroCantidadNormal,
  H1Cantidad,
  H1CantidadNum,
  FlechitaDesplegable,
  DivImageStock,
  BotonesNormal,
  Botones,
  OmitirNormal,
  CruzOmitir,
  Omitir,
  Teclado,
  Siguiente,
  PlusCircle,
  CuadroGrill,
  ContainerGrillCuadros,
  NumCuadrados,
  Sup,
  Percentage,
  ContFlechitas,
  ImgAmarilla,
  BotonTeclado,
  BotIzq,
  BotDer,
  Button,
  Button2,
  FlechitaDesplegableNone,
  Atencion,
} from './style';
import scanner from '../../images/scanner.svg';
import Sustituto from '../../images/substitute.svg';
import masBlanco from '../../images/masBlanco.svg';
import BarCode from '../../images/bar_code.svg';
import ImagenBalanza from '../../images/balance.svg';
import ImagenBalanzaMas from '../../images/Balanza +pesable.svg';
import ImagenProdu from '../../images/carne.png';
import ImagenSancor from '../../images/sancor.png';
import ImagenBarrita from '../../images/barrita.png';
import bubble from '../../images/icn_bubble.svg';
import bubbleExc from '../../images/icn_exclamation.svg';
import flechaDesplegableAbajo from '../../images/arrow_down_flat.svg';
import flechaDesplegableArriba from '../../images/arrow_up_flat.svg';
import ImageCruzOmitir from '../../images/cross_bold.svg';
import Item3 from '../../images/Item3.png';
import Stock from '../../images/stock.png';
import TecladoIcono from '../../images/tecladoIcono.png';
import '../common/styles/main.scss';
import PopUpPesables from '../PopUps/PopUpPesables';

export default ({
  session,
  pickeado,
  setCount,
  count,
  indice,
  Activar,
  active,
  onCloseClick,
}) => {
  let idx = 0;

  console.log(session[indice]);

  return (
    <>
      {/*   /////////////////////////////// vista producto normal //////////////////////////////////////// */}
      <ContGral>
        <Header>
          <Cuadro>
            <div>
              <Img src={Sustituto} />
            </div>
            <div>
              <Marca> = Marca, </Marca>
            </div>
            <div>
              <Gramaje> = Gramaje </Gramaje>
            </div>
          </Cuadro>
        </Header>
        <Cont>
          {session === undefined ? (
            <div>Cargando</div>
          ) : session[indice].isWeighable ? (
            ///////////////// PRODUCTO PESABLE /////////////////
            <>
              <ColIzq>
                <PopUpPesables active={active} onCloseClick={onCloseClick} />

                <ColuIconos>
                  <Sup>
                    <ContainerGrillCuadros>
                      <CuadroGrill />
                      <CuadroGrill />
                    </ContainerGrillCuadros>
                    <ContainerGrillCuadros>
                      <CuadroGrill className="bkgColor" />
                      <CuadroGrill />
                    </ContainerGrillCuadros>
                    <ContainerGrillCuadros>
                      <CuadroGrill />
                      <CuadroGrill />
                    </ContainerGrillCuadros>
                    <NumCuadrados>3</NumCuadrados>
                  </Sup>
                  <ContStock>
                    Stock
                    <StockCien>+100</StockCien>
                  </ContStock>
                </ColuIconos>
                <DivFoto>
                  <FotoProd src={session[indice].imageUrl} />
                </DivFoto>
              </ColIzq>
              <ColDerecha>
                <ContMarca>
                  <ContDer>
                    <MarcaH1>{session[indice].name}</MarcaH1>
                    <Descri>
                      Nombre del producto con doble linea lorem ipsum dolor sit
                      amet
                    </Descri>
                    <ContInfo>
                      <Tachado>${session[indice].purchasedPrice}</Tachado>
                      <Precio>${session[indice].purchasedPrice}</Precio>
                    </ContInfo>
                  </ContDer>
                  <DivGlobos>
                    <Button onClick={() => Activar(1)}>
                      {' '}
                      <ImgAmarilla src={bubble} />
                    </Button>
                    <Button2 onClick={() => Activar(2)}>
                      <ImgAmarilla src={bubbleExc} />
                    </Button2>
                  </DivGlobos>
                </ContMarca>
                <ContBarras>
                  <BarritasCont>
                    <Barritas src={BarCode} />
                  </BarritasCont>
                  <CodProdu>{session[indice].ean}</CodProdu>
                  <ImgBarrita />
                  <ImBalanza src={ImagenBalanza} />
                  <PesoProdu> {session[indice].purchasedQuantity}Kgs</PesoProdu>
                </ContBarras>
                <ContImagenes>
                  <CuadritoUno>
                    <ImgBalanzasUno src={ImagenBalanza} />
                    <PesoCuadro>
                      {session[indice].purchasedQuantity}
                      kgs.
                    </PesoCuadro>
                  </CuadritoUno>
                  <CuadritoDos>
                    <ImgBalanzasMas src={ImagenBalanzaMas} />
                  </CuadritoDos>
                </ContImagenes>
                <Instrucciones>
                  Coloca el producto sobre la balanza
                </Instrucciones>
                <Botones>
                  <BotIzq>
                    <Omitir>
                      <CruzOmitir src={ImageCruzOmitir} />
                      OMITIR
                    </Omitir>
                    <BotonTeclado>
                      <Teclado src={TecladoIcono} />
                    </BotonTeclado>
                    <Siguiente
                      onClick={() => {
                        pickeado(
                          session[indice].id,
                          session[indice].purchasedQuantity,
                        );
                      }}
                    >
                      {' '}
                      SIGUIENTE
                    </Siguiente>{' '}
                  </BotIzq>
                  <BotDer onClick={() => Activar(4)}>
                    <PlusCircle src={masBlanco}></PlusCircle>
                  </BotDer>
                </Botones>
              </ColDerecha>
            </>
          ) : (
            ////////////////// PRODUCTO NORMAL //////////////////
            <>
              <ColIzq>
                <ColuIconos>
                  <Sup>
                    <ContainerGrillCuadros>
                      <CuadroGrill />
                      <CuadroGrill />
                    </ContainerGrillCuadros>
                    <ContainerGrillCuadros>
                      <CuadroGrill className="bkgColor" />
                      <CuadroGrill />
                    </ContainerGrillCuadros>
                    <ContainerGrillCuadros>
                      <CuadroGrill />
                      <CuadroGrill />
                    </ContainerGrillCuadros>
                    <NumCuadrados>3</NumCuadrados>
                  </Sup>
                </ColuIconos>
                {/*<DivFoto><FotoProd src ={ImagenSancor}/></DivFoto>*/}
                <DivFoto>
                  <FotoProd src={session[indice].imageUrl} />
                </DivFoto>
              </ColIzq>
              <ColDerecha>
                <ContMarca>
                  <ContDer>
                    <MarcaH1>{session[indice].name}</MarcaH1>
                    <Descri>
                      Nombre del producto con doble linea lorem ipsum dolor sit
                      amet
                    </Descri>
                    <ContInfo>
                      <Tachado>${session[indice].purchasedPrice}</Tachado>
                      <Precio>${session[indice].purchasedPrice}</Precio>
                    </ContInfo>
                  </ContDer>
                  <DivGlobos>
                      <Button onClick={() => Activar(1)}>
                        {' '}
                        <ImgAmarilla src={bubble} />
                      </Button>
                    <Button2 onClick={() => Activar(2)}>
                      <ImgAmarilla src={bubbleExc} />
                    </Button2>
                  </DivGlobos>
                </ContMarca>

                <ContBarras>
                  <BarritasCont>
                    <Barritas src={BarCode} />
                  </BarritasCont>
                  <CodProdu>{session[indice].ean}</CodProdu>
                </ContBarras>
                <ContImagenes>
                  <RecuadroCantidadNormal>
                    <H1Cantidad>Cantidad</H1Cantidad>
                    <H1CantidadNum>{count}</H1CantidadNum>
                    <H1CantidadNum>
                      / {session[indice].purchasedQuantity}
                    </H1CantidadNum>
                    <ContFlechitas>
                      {count == 0 ? (
                        <>
                          <FlechitaDesplegable
                            src={flechaDesplegableArriba}
                            onClick={() => setCount(count + 1)}
                          />
                          <FlechitaDesplegableNone />
                        </>
                      ) : count >= session[idx].purchasedQuantity ? (
                        <>
                          <FlechitaDesplegableNone />
                          <FlechitaDesplegable
                            src={flechaDesplegableAbajo}
                            onClick={() => setCount(count - 1)}
                          />
                        </>
                      ) : (
                        <>
                          <FlechitaDesplegable
                            src={flechaDesplegableArriba}
                            onClick={() => setCount(count + 1)}
                          />
                          <FlechitaDesplegable
                            src={flechaDesplegableAbajo}
                            onClick={() => setCount(count - 1)}
                          />
                        </>
                      )}
                    </ContFlechitas>
                  </RecuadroCantidadNormal>
                  <DivImageStock>
                    <ContStock>
                      Stock
                      <StockCien>+100</StockCien>
                    </ContStock>
                  </DivImageStock>
                </ContImagenes>
                <Botones>
                  <BotIzq>
                    <Omitir>
                      <CruzOmitir src={ImageCruzOmitir} />
                      OMITIR
                    </Omitir>
                    <BotonTeclado>
                      <Teclado src={TecladoIcono} />
                    </BotonTeclado>
                    <Siguiente
                      onClick={() => {
                        pickeado(session[indice].id, count);
                      }}
                    >
                      {' '}
                      SIGUIENTE
                    </Siguiente>{' '}
                    {/*CHEQUEAR QUE SUME 1 BIEN*/}
                  </BotIzq>
                  <BotDer onClick={() => Activar(4)}>
                    <PlusCircle src={masBlanco}></PlusCircle>
                  </BotDer>
                </Botones>
              </ColDerecha>
            </>
          )}
        </Cont>
      </ContGral>
    </>
  );
};
