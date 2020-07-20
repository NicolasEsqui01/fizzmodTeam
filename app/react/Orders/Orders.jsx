import React from 'react';
import {Link} from 'react-router-dom'
import {
  ListOrdenes,
  Numero,
  Text,
  Num,
  NumP,
  Img,
  ImgP,
  DivN,
  DivT,
  DivP,
  DivS,
  Peso,
  Frio,
  Aire,
  Marca,
  Marca2,
  Info,
  DivScroll,
} from './style';
import box from '../../images/boxWhite.svg';
import waves from '../../images/wavesCelest.svg';
import balance from '../../images/balanceCelest.svg';
import snow from '../../images/snowflakeCelest.svg';
import substitute from '../../images/substitute.svg';
import store from '../../images/store.svg';



export default ({sessions, permiso, status, cambio}) =>  {
  //element.startPickingTime - element.endPickingTime
  return(
  <>

  <DivScroll>
    {
    
    sessions.filter(e => e.status === status).map(element =>{ 
     
 return (
   <ListOrdenes key={element.id} permitir={permiso} onClick ={cambio}>
 <Img src={box} />
 <DivN>
  <Numero>Nro.{element.id} </Numero>
   <DivT>
     <Text>
    <Num>{element.totalItems}</Num> Items/
     </Text>
     <Text>
       <Num>16</Num> min
     </Text>
   </DivT>
   <DivP>
     <Peso>
       <ImgP src={balance} />
       <NumP>23</NumP>
     </Peso>
     <Frio>
       <ImgP src={snow} />
       <NumP>23</NumP>
     </Frio>
     <Aire>
       <ImgP src={waves} />
       <NumP>23</NumP>
     </Aire>
   </DivP>
   <DivS>
     <Marca>
       <ImgP src={substitute} />
       <Info>= Marca, = Gramage</Info>
     </Marca>
   </DivS>
   <DivS>
     <Marca2>
       <ImgP src={store} />
       <Info>Retiro por tienda</Info>
     </Marca2>
   </DivS>
 </DivN>
</ListOrdenes>


)}  )}
    
    </DivScroll>
  </>
)};
