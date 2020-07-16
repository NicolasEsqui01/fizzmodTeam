import React from "react";
import { Header, Cuadro, Img, Marca, Gramaje, ColDerecha, ColIzq, ColuIconos, IconoNum, IconoNumDos, StockLetras, StockCien, Cont, FotoProd, DivFoto, DivGlobos, ImagenGlobo, MarcaH1, Descri, Tachado, Precio, ContBarras, Barritas, CodProdu, ImgBarrita, ImBalanza, PesoProdu, ContImagenes, CuadritoUno, PesoCuadro, CuadritoDos, Instrucciones, Botones, Omitir, Teclado, Siguiente, PlusCircle  } from "./style";
import Sustituto from "../../images/substitute.svg";
import Plus from "../../images/plus_circle.svg";
import BarCode from "../../images/bar_code.svg";
import ImagenBalanza from "../../images/balance.svg";
import ImagenBalanzaMas from "../../images/Balanza +pesable.svg";
import ImagenProdu from "../../images/carne.png";
import ImagenBarrita from "../../images/barrita.png";
import ImagenGlobo1 from "../../images/globoUno.png";
import ImagenGlobo2 from "../../images/globoDos.png";
import Item3 from "../../images/Item3.png";
import Stock from "../../images/stock.png";



export default ()=>{
    return (
        <div>
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
                <IconoNum src={Item3}/>
                <IconoNumDos>
                    <StockLetras>Stock</StockLetras>
                    <StockCien src={Stock}/>
                </IconoNumDos>
                </ColuIconos>    
                <DivFoto><FotoProd src ={ImagenProdu}/></DivFoto>
            </ColIzq>
            
            <ColDerecha>
            
            {/* <DivGlobos>
                <ImagenGlobo src = {ImagenGlobo1}/>
                <ImagenGlobo src = {ImagenGlobo2}/>
            </DivGlobos> */}
            
            <MarcaH1>SANCOR</MarcaH1>
            <Descri>Nombre del producto con doble línea lorem ipsum dolor sit amet</Descri>
            <Tachado>$100.000,00</Tachado>
            <Precio>$100.000,00</Precio>
            
            <ContBarras>
                <Barritas src= {BarCode}/>
                <CodProdu>29BJKDSEF0KKLFNSO</CodProdu>
                <ImgBarrita src= {ImagenBarrita}/>
                <ImBalanza src={ImagenBalanza}/>
                <PesoProdu>20 Kgs</PesoProdu>
            </ContBarras>
            <ContImagenes>
                <CuadritoUno>
                    <ImBalanza src={ImagenBalanza}/>
                    <PesoCuadro>0,00 kgs.</PesoCuadro>
                </CuadritoUno>
                <CuadritoDos>
                <ImBalanza src={ImagenBalanzaMas}/>
                </CuadritoDos>
            </ContImagenes>
            <Instrucciones>Coloca el producto sobre la balanza</Instrucciones>
            <Botones>
                <Omitir>OMITIR</Omitir>
                <Teclado></Teclado>
                <Siguiente>SIGUIENTE</Siguiente>
                <PlusCircle src = {Plus}></PlusCircle>

            </Botones>
           
            </ColDerecha>

            
            </Cont>

            
            
        </div>
    )
}