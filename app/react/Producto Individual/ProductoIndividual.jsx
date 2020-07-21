import React from "react";
import { ContGral, ContDer, ContMarca, ContInfo, Header, Cuadro, Img, Marca, Gramaje, ColDerecha, ContStock, ColIzq, ColuIconos, IconoNum, IconoNumDos, StockLetras, StockCien, Cont, FotoProd, DivFoto, DivGlobos, ImagenGlobo, MarcaH1, Descri, Tachado, Precio, ContBarras, BarritasCont, Barritas, CodProdu, ImgBarrita, ImBalanza, PesoProdu, ContImagenes, CuadritoUno, PesoCuadro, CuadritoDos, ImgBalanzasUno, ImgBalanzasMas, Instrucciones, RecuadroCantidadNormal, BotonesNormal, Botones, OmitirNormal, TecladoManual, Omitir, Teclado, Siguiente, PlusCircle,ImgH,CuadroGrill,ContainerGrillCuadros,NumCuadrados,Sup,Percentage  } from "./style";
import Sustituto from "../../images/substitute.svg";
import Plus from "../../images/plus_circle.svg";
import BarCode from "../../images/bar_code.svg";
import ImagenBalanza from "../../images/balance.svg";
import ImagenBalanzaMas from "../../images/Balanza +pesable.svg";
import ImagenProdu from "../../images/carne.png";
import bubble from '../../images/icn_bubble.svg'; 
import bubbleExc from '../../images/icn_exclamation.svg';
import Item3 from "../../images/Item3.png";
import Stock from "../../images/stock.png";
import TecladoIcono from "../../images/tecladoIcono.png";
import '../common/styles/main.scss';

export default ()=>{
    return (
        <ContGral>
            <Header>
                <Cuadro>
                <div><Img src={Sustituto}/></div> 
                <div><Marca> = Marca, </Marca></div>
                <div><Gramaje> = Gramaje </Gramaje></div>
                </Cuadro>
            </Header>
            <Cont>
                <ColIzq>
                    <ColuIconos>
                        <Sup>
                            <ContainerGrillCuadros>
                                <CuadroGrill/>
                                <CuadroGrill/>
                            </ContainerGrillCuadros>
                            <ContainerGrillCuadros>
                                <CuadroGrill className="bkgColor"/>
                                <CuadroGrill/>
                            </ContainerGrillCuadros>
                            <ContainerGrillCuadros>
                                <CuadroGrill/>
                                <CuadroGrill/>
                            </ContainerGrillCuadros>
                            <NumCuadrados>3</NumCuadrados>
                        </Sup>
                        <ContStock>
                            Stock
                            <StockCien>+100</StockCien>
                        </ContStock>
                    </ColuIconos>    
                    <DivFoto><FotoProd src ={ImagenProdu}/></DivFoto>
                </ColIzq>
                <ColDerecha>
                    <ContMarca>
                        <ContDer>
                            <MarcaH1>SANCOR</MarcaH1>
                            <Descri>Nombre del producto con doble línea lorem ipsum dolor sit amet</Descri>
                            <ContInfo>
                                <Tachado>$100.000,00</Tachado>
                                <Precio>$100.000,00</Precio>
                            </ContInfo>
                        </ContDer>
                        <DivGlobos>
                            <ImagenGlobo src = {bubble}/>
                            <ImagenGlobo src = {bubbleExc}/>
                        </DivGlobos>
                    </ContMarca>
                    <ContBarras>
                        <BarritasCont>
                        <Barritas src= {BarCode}/>
                        </BarritasCont>
                        <CodProdu>29BJKDSEF0KKLFNSO</CodProdu>
                        <ImgBarrita/>
                        <ImBalanza src={ImagenBalanza}/>
                        <PesoProdu>20,00 Kgs</PesoProdu> 
                    </ContBarras>
                    <ContImagenes>
                        <CuadritoUno>
                            <ImgBalanzasUno src={ImagenBalanza}/>
                            <PesoCuadro>0,00 kgs.</PesoCuadro>
                        </CuadritoUno>
                        <CuadritoDos>
                        <ImgBalanzasMas src={ImagenBalanzaMas}/>
                        </CuadritoDos> 

                        {/* <RecuadroCantidadNormal>Cantidad 6</RecuadroCantidadNormal> */}
                    </ContImagenes>
                     <Instrucciones>Coloca el producto sobre la balanza</Instrucciones> 
                     <Botones>
                        <Omitir>OMITIR</Omitir>
                        <Teclado src ={TecladoIcono}/>
                        <Siguiente>SIGUIENTE</Siguiente>
                        <PlusCircle src = {Plus}></PlusCircle>
                    </Botones> 
           
                    {/* <BotonesNormal>
                        <OmitirNormal>OMITIR</OmitirNormal>
                        <TecladoManual>MANUAL</TecladoManual>
                        <PlusCircle src = {Plus}></PlusCircle>
                    </BotonesNormal>     */}
                </ColDerecha>
            </Cont>
        </ContGral>
    )
}