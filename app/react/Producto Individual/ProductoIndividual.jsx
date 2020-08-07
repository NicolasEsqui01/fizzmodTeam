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
  StockCien,
  Cont,
  FotoProd,
  DivFoto,
  DivGlobos,
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
  QtyPesables,
  PesoCuadroInput,
  ContImagenes,
  CuadritoUno,
  PesoCuadro,
  PesoCuadroWarining,
  CuadritoDos,
  ImgBalanzasUno,
  Form,
  ImgBalanzasMas,
  Instrucciones,
  InstruccionesWarning,
  RecuadroCantidadNormal,
  H1Cantidad,
  H1CantidadNum,
  FlechitaDesplegable,
  DivImageStock,
  Botones,
  CruzOmitir,
  Omitir,
  Teclado,
  Siguiente,
  PlusCircle,
  CuadroGrill,
  ContainerGrillCuadros,
  NumCuadrados,
  Sup,
  ContFlechitas,
  ImgAmarilla,
  BotonTeclado,
  BotIzq,
  BotDer,
  Button,
  Button2,
  FlechitaDesplegableNone,
  DivStatus,
  StatusP,
  DivImgTilde,
  NoSus,
  CantiSus,
  NumeroAzul,
} from './style';
import Sustituto from '../../images/substitute.svg';
import masBlanco from '../../images/masBlanco.svg';
import BarCode from '../../images/bar_code.svg';
import ImagenBalanza from '../../images/balance.svg';
import ImagenBalanzaMas from '../../images/Balanza +pesable.svg';
import bubble from '../../images/icn_bubble.svg';
import bubbleExc from '../../images/icn_exclamation.svg';
import flechaDesplegableAbajo from '../../images/arrow_down_flat.svg';
import flechaDesplegableArriba from '../../images/arrow_up_flat.svg';
import ImageCruzOmitir from '../../images/cross_bold.svg';
import TecladoIcono from '../../images/tecladoIcono.png';
import '../common/styles/main.scss';
import PopUpPesables from '../PopUps/PopUpPesables';
import PopUpOmitir from '../PopUps/PopUpOmitir';
import Tilde from '../../images/check_bold.svg';

export default ({
  session,
  pickeado,
  Pending,
  setCount,
  count,
  indice,
  Activar,
  active,
  showInput,
  setShowInput,
  onCloseClick,
  inputRef,
  handleChange,
  handleSubmit,
  wheights,
  pesoTotal,
  handleRemoveItem,
  date,
  next,
  despickear,
  sustituyendo,
  prepickear,
  Faltente,
}) => {
  let criterioSustitucion;
  let igualGramaje;

  session[indice] &&
  (session[indice].substitutionCriteria == 'doNotSubstitute' )
    ? (criterioSustitucion = 'No sustituir,')
    : null,
    session[indice] && ( session[indice].substitutionCriteria == 'sameBrand' || !session[indice].substitutionCriteria ) 
      ? (criterioSustitucion = '= Marca,')
      : null,
    session[indice] &&
    session[indice].isWeighable &&
    !session[indice].substitutionCriteria == 'doNotSubstitute'
      ? (igualGramaje = '= Gramaje,')
      : null;

  let cuadrados =
    localStorage.getItem('cuadradoChico') &&
    localStorage
      .getItem('cuadradoChico')
      .split(',')
      .map((Element) => (Element === 'true' ? true : false));

  return (
    <>
      {/*   /////////////////////////////// vista producto normal //////////////////////////////////////// */}
      <ContGral>
        <Header>
          <Cuadro>
            <div>
              <Button onClick={() => Activar(1)}>
                <Img src={Sustituto} />
              </Button>
            </div>
            {sustituyendo ? (
              <NoSus>No Sustituible</NoSus>
            ) : (
              <>
                <div>
                  <Marca>{criterioSustitucion}</Marca>
                </div>
                <div>
                  <Gramaje>{igualGramaje}</Gramaje>
                </div>
              </>
            )}
          </Cuadro>
        </Header>

        {session.length === 0 ? (
          <div>Cargando</div>
        ) : session[indice].status === 'picked' ||
          session[indice].status === 'omitido' ? (
          <DivStatus status={session[indice].status} despickear={despickear}>
            {despickear === false ? (
              <StatusP>PICKEADO</StatusP>
            ) : (
              <StatusP>OMITIDO</StatusP>
            )}
            <Cont>
              {session[indice].isWeighable ? (
                ///////////////// PRODUCTO PESABLE /////////////////
                <>
                  <ColIzq>
                    <PopUpPesables
                      active={active}
                      onCloseClick={onCloseClick}
                      wheights={wheights}
                      handleRemoveItem={handleRemoveItem}
                      qtyPurch={session[indice].purchasedQuantity}
                    />
                    <ColuIconos>
                      <Sup>
                        <ContainerGrillCuadros>
                          {cuadrados.map((Element, indice) => {
                            return (
                              <CuadroGrill
                                key={indice}
                                numeros={indice}
                                datos={date.value}
                              >
                                {Element === true && indice !== date.value ? (
                                  <DivImgTilde src={Tilde} />
                                ) : null}
                              </CuadroGrill>
                            );
                          })}
                        </ContainerGrillCuadros>
                        <NumCuadrados>{date.value + 1}</NumCuadrados>
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
                          Nombre del producto con doble linea lorem ipsum dolor
                          sit amet
                        </Descri>
                        <ContInfo>
                          <Tachado>${session[indice].purchasedPrice}</Tachado>
                          <Precio>${session[indice].purchasedPrice}</Precio>
                        </ContInfo>
                      </ContDer>
                      <DivGlobos>
                        {session[indice].customerNote ? (
                          <Button onClick={() => Activar(2)}>
                            {' '}
                            <ImgAmarilla src={bubble} />
                          </Button>
                        ) : null}
                        <Button2 onClick={() => Activar(6)}>
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
                      <PesoProdu>
                        {' '}
                        {session[indice].purchasedQuantity}Kgs
                      </PesoProdu>
                    </ContBarras>
                    {despickear === false ? (
                      <ContImagenes>
                        <CuadritoUno>
                          <ImgBalanzasUno src={ImagenBalanza} />
                          <PesoCuadro>
                            {session[indice].purchasedQuantity}
                            kgs.
                          </PesoCuadro>
                        </CuadritoUno>
                      </ContImagenes>
                    ) : (
                      <>
                        <ContImagenes>
                          {pesoTotal > session[indice].purchasedQuantity ? (
                            <CuadritoUno color={true}>
                              {wheights.length > 0 ? (
                                <QtyPesables
                                  onClick={() => Activar(3)}
                                  color={true}
                                >
                                  {wheights.length}
                                </QtyPesables>
                              ) : null}
                              <ImgBalanzasUno src={ImagenBalanza} />
                              <PesoCuadroWarining>
                                {pesoTotal}
                                kgs.
                              </PesoCuadroWarining>
                            </CuadritoUno>
                          ) : (
                            <CuadritoUno>
                              {wheights.length > 0 ? (
                                <QtyPesables onClick={() => Activar(3)}>
                                  {wheights.length}
                                </QtyPesables>
                              ) : null}
                              <ImgBalanzasUno src={ImagenBalanza} />

                              <PesoCuadro>
                                {pesoTotal}
                                kgs.
                              </PesoCuadro>
                            </CuadritoUno>
                          )}
                          <Form
                            onSubmit={() => {
                              handleSubmit(
                                event,
                                session[indice].id,
                                session[indice].name,
                                session[indice].ean,
                                session[indice].imageUrl,
                              );
                            }}
                          >
                            <PesoCuadroInput
                              type="number"
                              step="any"
                              ref={inputRef}
                              showInput={showInput}
                              active={active}
                              placeholder="Kgs."
                              onChange={handleChange}
                            />
                          </Form>
                          <CuadritoDos>
                            <ImgBalanzasMas
                              src={ImagenBalanzaMas}
                              onClick={() => setShowInput(true)}
                            />
                          </CuadritoDos>
                        </ContImagenes>
                        {pesoTotal > session[indice].purchasedQuantity ? (
                          <InstruccionesWarning>
                            Superaste el umbral de peso por{' '}
                            {pesoTotal - session[indice].purchasedQuantity} kgs.
                          </InstruccionesWarning>
                        ) : (
                          <Instrucciones>
                            Coloca el producto sobre la balanza
                          </Instrucciones>
                        )}
                      </>
                    )}
                    <Botones>
                      {despickear === false ? (
                        <>
                          <BotIzq>
                            <Siguiente onClick={() => next()}>
                              {' '}
                              SIGUIENTE
                            </Siguiente>{' '}
                          </BotIzq>
                          <BotDer onClick={() => Activar(4)}>
                            <PlusCircle src={masBlanco}></PlusCircle>
                          </BotDer>
                        </>
                      ) : (
                        <>
                          <PopUpOmitir
                            activePopUp={active}
                            onCloseClick={onCloseClick}
                            PendingPopUp={Pending}
                            IdProducto={session[indice].id}
                            FaltentePopUp={Faltente}
                          />
                          <BotIzq>
                            <Omitir onClick={() => Activar(10)}>
                              <CruzOmitir src={ImageCruzOmitir} />
                              OMITIR
                            </Omitir>
                            <BotonTeclado>
                              <Teclado
                                src={TecladoIcono}
                                onClick={() => setShowInput(true)}
                              />
                            </BotonTeclado>
                            {sustituyendo === true ? (
                              <Siguiente
                                onClick={() => {
                                  prepickear(session[indice].id, count, true);
                                }}
                              >
                                PRE-PICKEAR
                              </Siguiente>
                            ) : (
                              <Siguiente
                                onClick={() =>
                                  pickeado(session[indice].id, null, true)
                                }
                              >
                                SIGUIENTE
                              </Siguiente>
                            )}
                          </BotIzq>
                          <BotDer onClick={() => Activar(4)}>
                            <PlusCircle src={masBlanco}></PlusCircle>
                          </BotDer>
                        </>
                      )}
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
                          {cuadrados.map((Element, indice) => {
                            return (
                              <CuadroGrill
                                key={indice}
                                numeros={indice}
                                datos={date.value}
                              >
                                {Element === true && indice !== date.value ? (
                                  <DivImgTilde src={Tilde} />
                                ) : null}
                              </CuadroGrill>
                            );
                          })}
                        </ContainerGrillCuadros>
                        <NumCuadrados>{date.value + 1}</NumCuadrados>
                      </Sup>
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
                          Nombre del producto con doble linea lorem ipsum dolor
                          sit amet
                        </Descri>
                        <ContInfo>
                          <Tachado>${session[indice].purchasedPrice}</Tachado>
                          <Precio>${session[indice].purchasedPrice}</Precio>
                        </ContInfo>
                      </ContDer>
                      <DivGlobos>
                        {session[indice].customerNote ? (
                          <Button onClick={() => Activar(2)}>
                            {' '}
                            <ImgAmarilla src={bubble} />
                          </Button>
                        ) : null}
                        <Button2 onClick={() => Activar(6)}>
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
                    {despickear === false ? (
                      <ContImagenes></ContImagenes>
                    ) : (
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
                            ) : count >= session[indice].purchasedQuantity ? (
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
                    )}

                    <Botones>
                      {despickear === false ? (
                        <>
                          <BotIzq>
                            <Siguiente onClick={() => next()}>
                              SIGUIENTE
                            </Siguiente>
                          </BotIzq>
                          <BotDer onClick={() => Activar(4)}>
                            <PlusCircle src={masBlanco}></PlusCircle>
                          </BotDer>
                        </>
                      ) : (
                        <>
                          <PopUpOmitir
                            activePopUp={active}
                            onCloseClick={onCloseClick}
                            PendingPopUp={Pending}
                            IdProducto={session[indice].id}
                            FaltentePopUp={Faltente}
                          />

                          <BotIzq>
                            <Omitir onClick={() => Activar(10)}>
                              <CruzOmitir src={ImageCruzOmitir} />
                              OMITIR
                            </Omitir>
                            <BotonTeclado>
                              <Teclado src={TecladoIcono} />
                            </BotonTeclado>
                            {sustituyendo === true ? (
                              <Siguiente
                                onClick={() => {
                                  prepickear(session[indice].id, count, false);
                                }}
                              >
                                PRE-PICKEAR
                              </Siguiente>
                            ) : (
                              <Siguiente
                                onClick={() =>
                                  pickeado(session[indice].id, count, false)
                                }
                              >
                                SIGUIENTE
                              </Siguiente>
                            )}
                          </BotIzq>
                          <BotDer onClick={() => Activar(4)}>
                            <PlusCircle src={masBlanco}></PlusCircle>
                          </BotDer>
                        </>
                      )}
                    </Botones>
                  </ColDerecha>
                </>
              )}
            </Cont>
          </DivStatus>
        ) : (
          <Cont>
            {session[indice].isWeighable ? (
              ///////////////// PRODUCTO PESABLE /////////////////
              <>
                <ColIzq>
                  <PopUpPesables
                    active={active}
                    onCloseClick={onCloseClick}
                    wheights={wheights}
                    handleRemoveItem={handleRemoveItem}
                  />
                  <ColuIconos>
                    <Sup>
                      <ContainerGrillCuadros>
                        {cuadrados.map((Element, indice) => {
                          return (
                            <>
                              <CuadroGrill
                                key={indice}
                                numeros={indice}
                                datos={date.value}
                              >
                                {Element === true && indice !== date.value ? (
                                  <DivImgTilde src={Tilde} />
                                ) : null}
                              </CuadroGrill>
                            </>
                          );
                        })}
                      </ContainerGrillCuadros>
                      <NumCuadrados>{date.value + 1}</NumCuadrados>
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
                        Nombre del producto con doble linea lorem ipsum dolor
                        sit amet
                      </Descri>
                      <ContInfo>
                        <Tachado>${session[indice].purchasedPrice}</Tachado>
                        <Precio>${session[indice].purchasedPrice}</Precio>
                      </ContInfo>
                    </ContDer>
                    <DivGlobos>
                      {session[indice].customerNote ? (
                        <Button onClick={() => Activar(2)}>
                          {' '}
                          <ImgAmarilla src={bubble} />
                        </Button>
                      ) : null}
                      <Button2 onClick={() => Activar(6)}>
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
                    <PesoProdu>
                      {' '}
                      {session[indice].purchasedQuantity}Kgs
                    </PesoProdu>
                  </ContBarras>
                  <ContImagenes>
                    {pesoTotal > session[indice].purchasedQuantity ? (
                      <CuadritoUno color={true}>
                        {wheights.length > 0 ? (
                          <QtyPesables onClick={() => Activar(3)} color={true}>
                            {wheights.length}
                          </QtyPesables>
                        ) : null}
                        <ImgBalanzasUno src={ImagenBalanza} />
                        <PesoCuadroWarining>
                          {pesoTotal}
                          kgs.
                        </PesoCuadroWarining>
                      </CuadritoUno>
                    ) : (
                      <CuadritoUno>
                        {wheights.length > 0 ? (
                          <QtyPesables onClick={() => Activar(3)}>
                            {wheights.length}
                          </QtyPesables>
                        ) : null}
                        <ImgBalanzasUno src={ImagenBalanza} />

                        <PesoCuadro>
                          {pesoTotal}
                          kgs.
                        </PesoCuadro>
                      </CuadritoUno>
                    )}
                    <Form
                      onSubmit={() => {
                        handleSubmit(
                          event,
                          session[indice].id,
                          session[indice].name,
                          session[indice].ean,
                          session[indice].imageUrl,
                        );
                      }}
                    >
                      <PesoCuadroInput
                        type="number"
                        step="any"
                        ref={inputRef}
                        showInput={showInput}
                        active={active}
                        placeholder="Kgs."
                        onChange={handleChange}
                      />
                    </Form>
                    <CuadritoDos>
                      <ImgBalanzasMas
                        src={ImagenBalanzaMas}
                        onClick={() => {
                          setShowInput(true);
                        }}
                      />
                    </CuadritoDos>
                  </ContImagenes>
                  {pesoTotal > session[indice].purchasedQuantity ? (
                    <InstruccionesWarning>
                      Superaste el umbral de peso por{' '}
                      {pesoTotal - session[indice].purchasedQuantity} kgs.
                    </InstruccionesWarning>
                  ) : (
                    <Instrucciones>
                      Coloca el producto sobre la balanza
                    </Instrucciones>
                  )}
                  <PopUpOmitir
                    activePopUp={active}
                    onCloseClick={onCloseClick}
                    PendingPopUp={Pending}
                    FaltentePopUp={Faltente}
                    IdProducto={session[indice].id}
                  />
                  <Botones>
                    <BotIzq>
                      <Omitir onClick={() => Activar(10)}>
                        <CruzOmitir src={ImageCruzOmitir} />
                        OMITIR
                      </Omitir>
                      <BotonTeclado>
                        <Teclado
                          src={TecladoIcono}
                          onClick={() => {
                            setShowInput(true);
                          }}
                        />
                      </BotonTeclado>
                      {sustituyendo === true ? (
                        <Siguiente
                          onClick={() => {
                            prepickear(session[indice].id, count, true);
                          }}
                        >
                          PRE-PICKEAR
                        </Siguiente>
                      ) : (
                        <Siguiente
                          onClick={() =>
                            pickeado(session[indice].id, null, true)
                          }
                        >
                          SIGUIENTE
                        </Siguiente>
                      )}
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
                        {cuadrados.map((Element, indice) => {
                          return (
                            <>
                              <CuadroGrill
                                key={indice}
                                numeros={indice}
                                datos={date.value}
                              >
                                {Element === true && indice !== date.value ? (
                                  <DivImgTilde src={Tilde} />
                                ) : null}
                              </CuadroGrill>
                            </>
                          );
                        })}
                      </ContainerGrillCuadros>
                      <NumCuadrados>{date.value + 1}</NumCuadrados>
                    </Sup>
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
                        Nombre del producto con doble linea lorem ipsum dolor
                        sit amet
                      </Descri>
                      <ContInfo>
                        <Tachado>${session[indice].purchasedPrice}</Tachado>
                        <Precio>${session[indice].purchasedPrice}</Precio>
                      </ContInfo>
                    </ContDer>
                    <DivGlobos>
                      {session[indice].customerNote ? (
                        <Button onClick={() => Activar(2)}>
                          {' '}
                          <ImgAmarilla src={bubble} />
                        </Button>
                      ) : null}
                      <Button2 onClick={() => Activar(6)}>
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
                        ) : count >= session[indice].purchasedQuantity ? (
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
                  <PopUpOmitir
                    activePopUp={active}
                    onCloseClick={onCloseClick}
                    PendingPopUp={Pending}
                    IdProducto={session[indice].id}
                    FaltentePopUp={Faltente}
                  />
                  <Botones>
                    <BotIzq>
                      <Omitir onClick={() => Activar(10)}>
                        <CruzOmitir src={ImageCruzOmitir} />
                        OMITIR
                      </Omitir>
                      <BotonTeclado>
                        <Teclado src={TecladoIcono} />
                      </BotonTeclado>
                      {sustituyendo === true ? (
                        <Siguiente
                          onClick={() => {
                            prepickear(session[indice].id, count, true);
                          }}
                        >
                          PRE-PICKEAR
                        </Siguiente>
                      ) : (
                        <Siguiente
                          onClick={() =>
                            pickeado(session[indice].id, count, true)
                          }
                        >
                          SIGUIENTE
                        </Siguiente>
                      )}
                    </BotIzq>
                    <BotDer onClick={() => Activar(4)}>
                      <PlusCircle src={masBlanco}></PlusCircle>
                    </BotDer>
                  </Botones>
                </ColDerecha>
              </>
            )}
          </Cont>
        )}
      </ContGral>
    </>
  );
};
