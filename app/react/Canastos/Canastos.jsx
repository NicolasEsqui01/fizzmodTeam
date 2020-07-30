import React from 'react';
import {
    Container,
    Lizquierdo,
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
    SectorCongelado,
    Lderecho,
    DivCanastos,
    FilaA,
    FilaB,
    FilaC,
    DivCanastoIndividual,
    OrdenFooter,
    Button,
    DivInternoCanasto1,
    DivInternoCanasto2,
    DivInternoCanasto3,
    DivInternoCanasto4,
    Divh1,
    DivBox,
    NumeroCanasto,
    DivOvalo,
    DivInternoCanastoVacio1,
    Divh1vacio,
    DivImaCanastoVacio,
    DivOvaloVacio,
    DivInternoCanastoVacio3,
    DivImagenCanastoVacio

} from './style';
import box from '../../images/boxGrey.svg';
import canastoGris from '../../images/basket_dashed_grey.svg';
import stadic from '../../images/square_chart_line_dark.svg';

export default () => {
    return (
        <Container>
            <Lizquierdo>
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
                            <NumeroOrden>Nro. 83567289</NumeroOrden>
                        </IconoOrden>
                    </ParteSuperior>
                </ContainerIzquierdo>
                <TitleOrden>ESTADO RONDA</TitleOrden>
                <ParteInferior>
                    <Pedidos>
                        <ImageBox src={stadic} alt="stadic" />
                        <SectorCongelado>Pickeados: 47 / 86</SectorCongelado>
                    </Pedidos>
                </ParteInferior>
            </Lizquierdo>

            <Lderecho>
                <DivCanastos>
                    <FilaA>
                        <DivCanastoIndividual>
                            <DivInternoCanasto1></DivInternoCanasto1>
                            <DivInternoCanasto2>
                                <Divh1>1.</Divh1>
                                <DivBox src={box} alt="box" />
                            </DivInternoCanasto2>
                            <DivInternoCanasto3>
                                <NumeroCanasto>89735647387692</NumeroCanasto>

                            </DivInternoCanasto3>
                            <DivInternoCanasto4>
                                <DivOvalo><b>38 </b>/ 149</DivOvalo>
                                <div></div>
                            </DivInternoCanasto4>
                        </DivCanastoIndividual>
                        <DivCanastoIndividual>
                            <DivInternoCanasto1></DivInternoCanasto1>
                            <DivInternoCanasto2>
                                <Divh1>2.</Divh1>
                                <DivBox src={box} alt="box" />
                            </DivInternoCanasto2>
                            <DivInternoCanasto3>
                                <NumeroCanasto>89735647387692</NumeroCanasto>

                            </DivInternoCanasto3>
                            <DivInternoCanasto4>
                                <DivOvalo><b>38 </b>/ 149</DivOvalo>
                                <div></div>
                            </DivInternoCanasto4>
                        </DivCanastoIndividual>

                    </FilaA>
                    <FilaB>
                        <DivCanastoIndividual>
                            <DivInternoCanasto1></DivInternoCanasto1>
                            <DivInternoCanasto2>
                                <Divh1>3.</Divh1>
                                <DivBox src={box} alt="box" />
                            </DivInternoCanasto2>
                            <DivInternoCanasto3>
                                <NumeroCanasto>89735647387692</NumeroCanasto>

                            </DivInternoCanasto3>
                            <DivInternoCanasto4>
                                <DivOvalo><b>38 </b>/ 149</DivOvalo>
                                <div></div>
                            </DivInternoCanasto4>
                        </DivCanastoIndividual>
                        <DivCanastoIndividual>
                            <DivInternoCanasto1></DivInternoCanasto1>
                            <DivInternoCanasto2>
                                <Divh1>4.</Divh1>
                                <DivBox src={box} alt="box" />
                            </DivInternoCanasto2>
                            <DivInternoCanasto3>
                                <NumeroCanasto>89735647387692</NumeroCanasto>

                            </DivInternoCanasto3>
                            <DivInternoCanasto4>
                                <DivOvalo><b>38 </b>/ 149</DivOvalo>
                                <div></div>
                            </DivInternoCanasto4>
                        </DivCanastoIndividual>

                    </FilaB>
                    <FilaC>
                        <DivCanastoIndividual>
                            <DivInternoCanastoVacio1></DivInternoCanastoVacio1>
                            <DivInternoCanasto2>
                                <Divh1vacio>5.</Divh1vacio>
                                <div></div>
                            </DivInternoCanasto2>
                            <DivInternoCanastoVacio3>
                                <DivImagenCanastoVacio>
                                    <DivImaCanastoVacio src={canastoGris} alt="canastoGris" />
                                </DivImagenCanastoVacio>
                            </DivInternoCanastoVacio3>
                            <DivInternoCanasto4>
                                <DivOvaloVacio></DivOvaloVacio>
                                <div></div>
                            </DivInternoCanasto4>
                        </DivCanastoIndividual>
                        <DivCanastoIndividual>
                            <DivInternoCanastoVacio1></DivInternoCanastoVacio1>
                            <DivInternoCanasto2>
                                <Divh1vacio>6.</Divh1vacio>
                                <div></div>
                            </DivInternoCanasto2>
                            <DivInternoCanastoVacio3>
                                <DivImagenCanastoVacio>
                                    <DivImaCanastoVacio src={canastoGris} alt="canastoGris" />
                                </DivImagenCanastoVacio>
                            </DivInternoCanastoVacio3>
                            <DivInternoCanasto4>
                                <DivOvaloVacio></DivOvaloVacio>
                                <div></div>
                            </DivInternoCanasto4>
                        </DivCanastoIndividual>
                    </FilaC>
                </DivCanastos>
                <OrdenFooter>
                    <Button>COMENZAR</Button>
                </OrdenFooter>
            </Lderecho>
        </Container>
    )
};