import React, { useEffect, useState } from 'react';
import {
    DivOmitir,
    ButtonX,
    ImgX2,
    DivBotonOmitir,
    DivBotonFaltante,
    DivBotones,
} from './style';
import XWhite from '../../images/cross_light_White.svg';

export default ({ activePopUp, onCloseClick, PendingPopUp, FaltentePopUp, IdProducto }) => {
    return (
            <DivOmitir active={activePopUp}>
                <ButtonX onClick={onCloseClick}>
                    <ImgX2 src={XWhite} />
                </ButtonX>
                <DivBotones>
                    <DivBotonFaltante onClick={() => FaltentePopUp(IdProducto)}>
                        Faltante
                </DivBotonFaltante>
                    <DivBotonOmitir onClick={() => PendingPopUp(IdProducto)} >
                        Omitir
                </DivBotonOmitir>
                </DivBotones>
            </DivOmitir>
    )
}

