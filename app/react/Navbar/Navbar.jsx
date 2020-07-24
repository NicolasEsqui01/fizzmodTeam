import React from 'react';
import {
  Nav,
  Img,
  Img2,
  NavCont,
  ImgLogo,
  ContenedorFlecha,
  FlechaAtras,
  OvaloCantidad,
  H1Cantidades,
} from './style';
import Imagen from '../../images/check_circle_bold.svg';
import MenuHamb from '../../images/hamburguesa.png';
import MenuHamburguesa from '../../images/icn_menu-irregular.svg';
import Nubee from '../../images/icn_cloud.svg';
import Janis from '../../images/janis_logo.svg';
import flechaAtras from '../../images/arrow_short_prev.svg';
import history from '../../utils/history';
import CronometroContainer from '../cronometro/Loadable';


export default ({ booleano , booleano1, items, state  }) => {
  let itemsPicked = 0;
  let totalItems= 0;
  
  if(items){
  totalItems= items.length;
  items.find(item=>{
    if (item.status == "picked") {itemsPicked = (itemsPicked+1)};
  })}
  return (

    //////////////// NAVBAR PARA INICIO /////////////////
    //<NavCont>
    //  <div><Img src={MenuHamburguesa} alt= "3"/></div>
    //  <div><ImgLogo src={Janis} alt= "3"/></div>
    //  <div><Img2 src={Nubee} alt= "3"/></div>
    // </NavCont>

    //////////////// NAVBAR PICKING INICIADO /////////////////
    <NavCont>
      {booleano1 || booleano ? (
        <ContenedorFlecha>
          <FlechaAtras src={flechaAtras} onClick={history.goBack} />
          <OvaloCantidad onClick={() => history.push('/session')}>
              <H1Cantidades>{itemsPicked}/{totalItems}</H1Cantidades>
          </OvaloCantidad>
        </ContenedorFlecha>
      ) : (
        <div>
          <Img src={MenuHamburguesa} alt="3" />
        </div>
      )}
      <div>
        <ImgLogo src={Janis} alt="3" />
      </div>
      {booleano ? (
        <CronometroContainer  />
      ) : (
        <div>
          <Img2 src={Nubee} alt="3" />
        </div>
      )}
    </NavCont>
  );
};
