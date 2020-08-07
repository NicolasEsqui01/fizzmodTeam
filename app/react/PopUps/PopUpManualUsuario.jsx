import React from 'react';

import {
    DIV11,
    Color,
    DivContenedorManual,
    DivC,
    ImgM,
    ImgX,
    TituloManual,
    ButtonX,
    DivInferior,
    DivManual1,
    ImgManual1,
    DivTitleManual1,
    DivDesManual1,
    ImgManual2,
    DivDesManual2,
} from './style';
import X from '../../images/cross_light.svg';
import bubbleExc from '../../images/exclamation_circle.svg';
import ImgInicioOrderNews from '../../images/OrderNews.jpg'
import ImgComenzar from '../../images/ComenzarInicio.jpg'
import seleccionCanastos from '../../images/seleccionCanastos.jpg'
import nombreAlCanasto from '../../images/nombreAlCanasto.jpg'
import productoPesable1 from '../../images/productoPesable1.jpg'
import productoPesable2 from '../../images/productoPesable2.jpg'
import productoNormal from '../../images/productoNormal.jpg'
import sesionFinalizada from '../../images/sesionFinalizada.jpg'
import productoOmitido from '../../images/productoOmitido.jpg'
import botonMenu1 from '../../images/botonMenu1.jpg'
import botonMenu2 from '../../images/botonMenu2.jpg'

export default ({ active, onCloseClick }) => {
    const Prueba = [1, 2, 3, 4];

    return (
        <>
            <DIV11 active={active}>
                <Color></Color>
                <DivContenedorManual>

                    <DivC>
                        <ImgM src={bubbleExc} />
                        <TituloManual> Manual de Usuario </TituloManual>
                        <ButtonX onClick={onCloseClick}>
                            <ImgX src={X} />
                        </ButtonX>
                    </DivC>
                    <DivInferior>
                        <DivTitleManual1> <b>Paso 1)</b> Iniciar Una Orden Nueva</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={ImgInicioOrderNews} />
                            <DivDesManual1>
                                Lo primero que debe realizar el Picker es "Seleccionar" la Opcion de "ORDENES NUEVAS", Luego elegir la Orden que quiera comenzar a pickear.
                            </DivDesManual1>
                        </DivManual1>
                        <DivManual1>
                            <DivDesManual2>
                                Una vez seleccionada la Orden que quiere comenzar a pickear, tendra un borde color Verde, el siguiente paso es presionar el Boton "COMENZAR" para dar inicio a la Sesion de la Orden Seleccionada.
                           </DivDesManual2>
                            <ImgManual2 src={ImgComenzar} />
                        </DivManual1>
                        <DivTitleManual1> <b>Paso 2)</b> Elección de Canasto</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={seleccionCanastos} />
                            <DivDesManual1>
                                Seleccione el canasto de su preferencia.
                            </DivDesManual1>
                        </DivManual1>
                        <DivManual1>
                            <DivDesManual2>
                                Ingrese el nombre del canasto seleccionado para identificarlo, y preseione "ENTER".
                           </DivDesManual2>
                            <ImgManual2 src={nombreAlCanasto} />
                        </DivManual1>
                        <DivManual1>
                            <ImgManual1 src={seleccionCanastos} />
                            <DivDesManual1>
                                Con el canasto ya identificado, es momento de iniciar la Orden, a continuación, puede "COMENZAR" la nueva orden.
                            </DivDesManual1>
                        </DivManual1>
                        <DivTitleManual1> Pickear Producto Pesable</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={productoPesable1} />
                            <DivDesManual1>
                                1)Se debe seleccionar manualmente los kilos solicitados, 2)Este Aviso te indicara que podras presionar "SIGUIENTE" y confirmar el picking del producto.
                            </DivDesManual1>
                        </DivManual1>
                        <DivManual1>
                            <DivDesManual2>
                                En caso de exceder el peso solicitado, tendras la opcion de eliminar la cantidad excedente y asi continuar con el picking del producto.
                           </DivDesManual2>
                            <ImgManual2 src={productoPesable2} />
                        </DivManual1>
                        <DivTitleManual1> Prickear Producto Normal</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={productoNormal} />
                            <DivDesManual1>
                                Para pickear un producto normal, solo debes seleccionar la cantidad solicitada y presionar "SIGUIENTE".
                            </DivDesManual1>
                        </DivManual1>
                        <DivTitleManual1> Finalizar Picking</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={sesionFinalizada} />
                            <DivDesManual1>
                                Una vez se realiza el picking de todos los productos, se debe "FINALIZAR" la orden para confirmar el Picking.
                            </DivDesManual1>
                        </DivManual1>
                        <DivTitleManual1> Producto Omitido</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={productoOmitido} />
                            <DivDesManual1>
                                Si el producto no esta disponible al momento, podras "OMITIR" para realizar el picking luego, en caso de no disponer stock, se aplica directamente "FALTANTE".
                            </DivDesManual1>
                        </DivManual1>

                        <DivTitleManual1> Menu</DivTitleManual1>
                        <DivManual1>
                            <ImgManual1 src={botonMenu1} />
                            <DivDesManual1>
                                Aca encontraras el acceso al "MENU".
                            </DivDesManual1>
                        </DivManual1>
                        <DivManual1>
                            <DivDesManual2>
                                Desde el "MENU", podras encontrar las distintas opciones que te facilitaran el trabajo, desde la informacion a tu perfil, hasta la opcion para "LOGOUT".
                           </DivDesManual2>
                            <ImgManual2 src={botonMenu2} />
                        </DivManual1>

                    </DivInferior>

                </DivContenedorManual>

            </DIV11>
        </>
    );
};
