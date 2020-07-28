import React from 'react';
import { DivReloj , ImageReloj ,H1Tiempo } from './style';
import Reloj from '../../images/clockWhite.svg';

export default ({ time }) => {
    return (
        <DivReloj>
          <ImageReloj src={Reloj} />
          <H1Tiempo>
            <H1Tiempo>{time.h >= 10 ? time.h : '0' + time.h}</H1Tiempo>
            <H1Tiempo>{time.m >= 10 ? time.m : '0' + time.m}</H1Tiempo>
            <H1Tiempo>{time.s >= 10 ? time.s : '0' + time.s}</H1Tiempo>
          </H1Tiempo>
        </DivReloj>
    )
};