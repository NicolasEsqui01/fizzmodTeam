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
  ButtonX,
  ButtonX4,
  ImgX,
  ImgX2,
  ImgM,
  ImgT,
  DivV,
  DivC,
  DivP,
  DivO,
  DivZ,
  DivX,
  DivR,
  DivF,
  DivM,
  DivN,
  DivG,
  DivQ,
  DivS,
  DIV,
  DIV2,
  DIV4,
  DIV5,
  TituloOb,
  Text,
  TextB,
  TextB2,
  PopUpProdu,
  PopUpProduAcum,
  HeaderDiv,
  DivScroll,
  Descripcion,
  Icono,
  Ean,
  Cantidad,
  Espacio,
  Espacio4,
  Color,
  Logout,
  FlechitaDesplegableNone,
  Atencion
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
import Navbar from '../Navbar/NavbarContainer';
import X from '../../images/cross_light.svg';
import XWhite from '../../images/cross_light_White.svg';
import Mensaje from '../../images/comment.svg';
import trash from '../../images/trash.svg';
import Salir from '../../images/cross_small_circle.svg';

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
  const Prueba = [1,2,3,4]
  return (
    <>
      {/* /////////////////////////////// vista PoPSusticion //////////////////////////////////////// */}
      <DIV active={active}>
        <Color></Color>
        <DivV>
          <DivC>
            <ImgM src={Mensaje} />
            <TituloOb> Sustitutos </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivC>
          <DivP>
            {Prueba.map((element) => {
              return <PopUpProdu key={element}>{element}</PopUpProdu>;
            })}
          </DivP>
        </DivV>
      </DIV>

      {/* /////////////////////////////// vista PoPObservaciones //////////////////////////////////////// */}
      <DIV2 active={active}>
        <Color></Color>
        <DivO>
          <DivC>
            <ImgM src={Mensaje} />
            <TituloOb> Observaciones </TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivC>
          <DivP>
            <Text>
              {' '}
              Un elemento posicionado es un elemento cuyo valor computado de
              position es relative, absolute, fixed, o sticky. (En otras
              palabras, cualquiera excepto static). Un elemento posicionado
              relativamente es un elemento cuyo valor computado de position es
              relative. Las propiedades top y bottom especifican el
              desplazamiento vertical desde su posición original; las
              propiedades left y right especifican su desplazamiento horizontal.
              Un elemento posicionado absolutamente es un elemento cuyo valor
              computado de position es absolute o fixed. Las propiedades top,
              right, bottom, y left especifican el desplazamiento desde los
              bordes del bloque contenedor del elemento. (El bloque contenedor
              es el ancestro relativo al cual el elemento está posicionado). Si
              el elemento tiene márgenes, se agregarán al desplazamiento. el
              elemento establece un nuevo contexto de formato de bloque para su
              contenido Un elemento posicionado fijamente es un elemento cuyo
              valor de position computado es sticky. Es tratado como un elemento
              posicionado relativamente hasta que su bloque contenedor cruza un
              límite establecido (como por ejemplo dando a top cualquier valor
              distinto de auto), dentro de su flujo principal (o el contenedor
              dentro del cual se mueve), desde el cual es tratado como "fijo"
              hasta que alcance el borde opuesto de su bloque contenedor. La
              mayoría de las veces, los elementos absolutamente posicionados que
              tienen su height y width establecidos en auto son ajustados hasta
              acomodarse a su contenido. Sin embargo, elementos non-replaced y
              absolutamente posicionados se pueden crear para llenar el espacio
              vertical disponible, especificando tanto top como bottom, y
              dejando height sin especificar (es decir, auto). De igual manera
              se pueden utilizar para llenar el espacio horizontal disponible
              especificando tanto left como right, y dando a width el valor de
              auto.
            </Text>
          </DivP>
        </DivO>
      </DIV2>

      {/* /////////////////////////////// vista PoPOpciones //////////////////////////////////////// */}
      <DIV4 active={active}>
        <Color></Color>
        <DivO>
          <DivC>
            <ButtonX4 onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX4>
          </DivC>
          <DivM></DivM>
          <Espacio4></Espacio4>
          <DivN></DivN>
          <Espacio4></Espacio4>
          <DivG>
            <ImgX src={Salir} />
            <Logout> Logout </Logout>
          </DivG>
        </DivO>
      </DIV4>

      {/* /////////////////////////////// vista PoPInfo ORDER //////////////////////////////////////// */}
      <DIV5 active={active}>
        <Color></Color>
        <DivO>
          <DivC>
            <ImgM src={Mensaje} />
            <TituloOb> Nro. 12345675436</TituloOb>
            <ButtonX onClick={onCloseClick}>
              <ImgX src={X} />
            </ButtonX>
          </DivC>

          <DivQ></DivQ>

          <DivS></DivS>

          <DivG></DivG>
        </DivO>
      </DIV5>

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
                <DivZ active={active}>
                  <HeaderDiv>
                    <TextB>PRODUCTOS</TextB>
                    <TextB2>CANTIDAD</TextB2>
                    <ButtonX onClick={onCloseClick}>
                      <ImgX2 src={XWhite} />
                    </ButtonX>
                  </HeaderDiv>
                  <DivScroll>
                    {Prueba.map((elem) => (
                      <>
                        <PopUpProduAcum>
                          <DivR>
                            <ImgM src={Mensaje} />
                            <DivX>
                              <Descripcion>
                                DESCRIPCION DEL PRODUCTO
                              </Descripcion>
                              <DivF>
                                <Icono src={scanner} />
                                <Ean>1234456112</Ean>
                              </DivF>
                            </DivX>
                            <Cantidad>8 Kg</Cantidad>
                            <ImgT src={trash} />
                          </DivR>
                        </PopUpProduAcum>
                        <Espacio></Espacio>
                      </>
                    ))}
                  </DivScroll>
                </DivZ>
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
                    <Descri></Descri>
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
                        pickeado(session[idx].id, count);
                        idx++;
                      }}
                    >
                      {' '}
                      SIGUIENTE
                    </Siguiente>{' '}
                    {/*CHEQUEAR QUE SUME 1 BIEN*/}
                  </BotIzq>
                  <BotDer>
                    <PlusCircle src={masBlanco}></PlusCircle>
                  </BotDer>
                </Botones>
              </ColDerecha>
            </>
          ) : (
            ////////////////// PRODUCTO NORMAL //////////////////
            <>
              <ColIzq>
                <DivZ active={active}>
                  <HeaderDiv>
                    <TextB>PRODUCTOS</TextB>
                    <TextB2>CANTIDAD</TextB2>
                    <ButtonX onClick={onCloseClick}>
                      <ImgX2 src={XWhite} />
                    </ButtonX>
                  </HeaderDiv>
                  <DivScroll>
                    {Prueba.map((elem) => (
                      <>
                        <PopUpProduAcum key={elem}>
                          <DivR>
                            <ImgM src={Mensaje} />
                            <DivX>
                              <Descripcion>
                                DESCRIPCION DEL PRODUCTO
                              </Descripcion>
                              <DivF>
                                <Icono src={scanner} />
                                <Ean>1234456112</Ean>
                              </DivF>
                            </DivX>
                            <Cantidad>8 Kg</Cantidad>
                            <ImgT src={trash} />
                          </DivR>
                        </PopUpProduAcum>
                        <Espacio></Espacio>
                      </>
                    ))}
                  </DivScroll>
                </DivZ>
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
                    <Descri></Descri>
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

                    {count == 0 ? (
                      <ContFlechitas>
                        <FlechitaDesplegable
                          src={flechaDesplegableArriba}
                          onClick={() => setCount(count + 1)}
                        />
                        <FlechitaDesplegableNone />
                      </ContFlechitas>
                    ) : (
                      <ContFlechitas>
                        <FlechitaDesplegable
                          src={flechaDesplegableArriba}
                          onClick={() => setCount(count + 1)}
                        />
                        <FlechitaDesplegable
                          src={flechaDesplegableAbajo}
                          onClick={() => setCount(count - 1)}
                        />
                      </ContFlechitas>
                    )}
                  </RecuadroCantidadNormal>
                  {count > session[idx].purchasedQuantity ? (
                    <Atencion>Supera la Cantidad Pedida</Atencion>
                  ) : (
                    <div></div>
                  )}
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
                        pickeado(session[idx].id, count);
                        idx++;
                      }}
                    >
                      {' '}
                      SIGUIENTE
                    </Siguiente>{' '}
                    {/*CHEQUEAR QUE SUME 1 BIEN*/}
                  </BotIzq>
                  <BotDer>
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


