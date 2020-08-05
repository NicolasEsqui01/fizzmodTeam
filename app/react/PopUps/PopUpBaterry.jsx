import React from 'react';

import { DIV9, Color2, Cuerpo, Bat, ImgBat, Adver, Porcentaje, Entendido } from './style';
import NoBattery from '../../images/icn_no-battery.svg';

export default ({ Bateria, closeAlert, cerrar }) => {
  let porcentaje = (Bateria * 100).toString()

  return Bateria !== null && Bateria === 0.3 ? (
    <DIV9 cerrar={cerrar} >
      <Color2>
        <Cuerpo Bate={Bateria}>
          <ImgBat src={NoBattery} />
          <Bat>Batería Baja</Bat>
          <Adver>
            Favor ir a Zona de red de Descarga para descargala la informacion
            antes del bloqueo{' '}
          </Adver>
          <Porcentaje>{porcentaje}%</Porcentaje>
          <Entendido onClick={closeAlert} Bate={Bateria}>ENTENDIDO</Entendido>
        </Cuerpo>
      </Color2>
    </DIV9>
  ) : Bateria === 0.2 ? (
    <DIV9 cerrar={cerrar}>
      <Color2>
        <Cuerpo Bate={Bateria}>
          <ImgBat src={NoBattery} />
          <Bat>Batería Baja</Bat>
          <Adver>
            Enchufe el equipo o cambielo por otro en la área de stage{' '}
          </Adver>
          <Porcentaje>{porcentaje}%</Porcentaje>
          <Entendido onClick={closeAlert} Bate={Bateria}>ENTENDIDO</Entendido>
        </Cuerpo>
      </Color2>
    </DIV9>) : null
};
