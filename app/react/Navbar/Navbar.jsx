import React from 'react';
import {
  Img,
  Img2,
  NavCont,
  ImgLogo,
  ContenedorFlecha,
  FlechaAtras,
  OvaloCantidad,
  H1Cantidades,
} from './style';
import MenuHamburguesa from '../../images/icn_menu-irregular.svg';
import Nubee from '../../images/icn_cloud.svg';
import Janis from '../../images/janis_logo.svg';
import flechaAtras from '../../images/arrow_short_prev.svg';
import history from '../../utils/history';
import CronometroContainer from '../cronometro/Loadable';

export default ({ booleano,
  totalItems,
  qtyPicked,
  sessionId,
  final,
  volverDelFinal,
  Activar,
}) => {
  return (
    <NavCont>
      {booleano ? (
        <ContenedorFlecha>
          <FlechaAtras
            src={flechaAtras}
            onClick={() => {
              volverDelFinal();
            }}
          />
          {final ?
            null
            :
            <OvaloCantidad onClick={() => history.push(`/session/${sessionId}`)}>
              <H1Cantidades>
                {qtyPicked}/{totalItems}
              </H1Cantidades>
            </OvaloCantidad>
          }
        </ContenedorFlecha>
      ) : (
          <div title="Manual de Usuario" onClick={() => Activar(11)}>
            <Img src={MenuHamburguesa}  alt="3" />
          </div>
        )}
      <div>
        <ImgLogo src={Janis} alt="3" />
      </div>
      {booleano ? (
        <CronometroContainer />
      ) : (
          <div>
            <Img2 src={Nubee} alt="3" />
          </div>
        )}
    </NavCont>
  );
};
