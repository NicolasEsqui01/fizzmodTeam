import React from 'react';
import { Link } from 'react-router-dom';
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
import moment from 'moment';

export default ({ sessions, status, handleClick, valor }) => {
  let start;
  let end;
  let duration;
  // let arrFractionable = [];
  //let arrWeighable = [];
  // let arrFresh = [];

  //element.startPickingTime - element.endPickingTime
  return (
    <>
      <DivScroll>
        {sessions
         

          .filter((e) => e.status === status)
          .map((element) => {
            let arrFractionable = [];
            let arrWeighable = [];
            let arrFresh = [];
            start = moment(element.startPickingTime);
            end = moment(element.endPickingTime);
            duration = moment.duration(end.diff(start)).asMinutes();
            //console.log("element es: " + element.totalItems)
              element.items.map((el)=>{
              
                el.isFresh==true? arrFresh.push(el.name) : null;
                el.isWeighable==true? arrWeighable.push(el.name) : null;
                el.isFractionable==true? arrFractionable.push(el.name) : null;
                
             })

            return (
              <ListOrdenes
                key={element.id}
                permitir={valor}
                div={element.id}
                onClick={() => handleClick(element.id)}
              >
                <Img src={box} />
                <DivN>
                  <Numero>Nro.{element.id} </Numero>
                  <DivT>
                    <Text>
                      <Num>{element.totalItems}</Num> Items/
                    </Text>
                    <Text>
                      <Num>{parseInt(duration * 10 ,10)}</Num>min
                    </Text>
                  </DivT>
                  <DivP>
                    <Peso>
                      <ImgP src={balance} />
                    <NumP>{arrWeighable.length}</NumP>
                    </Peso>
                    <Frio>
                      <ImgP src={snow} />
                    <NumP>{arrFractionable.length}</NumP>
                    </Frio>
                    <Aire>
                      <ImgP src={waves} />
                    <NumP>{arrFresh.length}</NumP>
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
            );
          })}
      </DivScroll>
    </>
  );
};
