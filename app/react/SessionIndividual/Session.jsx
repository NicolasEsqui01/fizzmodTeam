import React from 'react'
import {
    Container,
    LIzquierdo,
    LDerecho,
    ContainerIzquierdo,
    ParteSuperior,
    IconoCanasta,
    DivA,
    Div1,
    IconoOrden,
    TitleOrden,
    NumeroOrden,
    ParteInferior,
    Pedidos,
    ImageBox,
    ImageTriangle,
    TitlePedidos,
    BorderNumeroPedido,
    NumeroPedidos
} from './style'

import box from '../../images/box.svg';
import triangleCircle from '../../images/triangle_circle.svg';
import Navbar from '../Navbar/NavbarContainer';


export default () => {


    return (
        <>
            <Navbar />
            <Container>
                <LIzquierdo>
                    <ContainerIzquierdo>
                        <ParteSuperior>
                            <IconoCanasta>
                                <DivA>
                                    <Div1></Div1>
                                    <Div1></Div1>
                                </DivA>
                                <DivA>
                                    <Div1></Div1>
                                    <Div1></Div1>
                                </DivA>

                            </IconoCanasta>
                            <IconoOrden>
                                <TitleOrden>Ronda</TitleOrden>
                                <NumeroOrden>NRO.837289</NumeroOrden>
                            </IconoOrden>
                        </ParteSuperior>
                    </ContainerIzquierdo>
                    <ParteInferior>
                        <Pedidos>
                            <ImageBox src={box} />
                            <TitlePedidos>Pedidos</TitlePedidos>
                            <BorderNumeroPedido>
                                <NumeroPedidos>6</NumeroPedidos>
                            </BorderNumeroPedido>
                        </Pedidos>
                        <Pedidos>
                            <ImageTriangle src={triangleCircle} />
                            <TitlePedidos>Productos</TitlePedidos>
                            <BorderNumeroPedido>
                                <NumeroPedidos>6</NumeroPedidos>
                            </BorderNumeroPedido>
                        </Pedidos>

                    </ParteInferior>


                </LIzquierdo>


                <LDerecho>
                    lado derecho

    </LDerecho>



            </Container>

        </>

    )

}