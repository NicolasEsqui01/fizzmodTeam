import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListOrdenes,
  Numero,
  Text,
  Num,
  NumP,
  Img,
  ImgPicked,
  ImgPicking,
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
import fraction from "../../images/fraction.svg";
import store from '../../images/store.svg';
import moment from 'moment';

export default ({ pendSessions, pickedAndPikcingSessions, status, handleClick, valor }) => {
  let start;
  let end;
  let duration;
  let durationDias;
  let tiempo;
  let arrFractionable = 0;
  let arrWeighable = 0;
  let arrFresh = 0;
  let arrFrozen = 0;
  
 
  





  return (
    <>
      <DivScroll>
        {status == 'pending' ?
          (pendSessions.map((element) => {
            arrFractionable = 0;
            arrWeighable = 0;
            arrFresh = 0;
            arrFrozen = 0;
            start = moment(element.startPickingTime);
            end = moment(element.endPickingTime);
            duration = moment.duration(end.diff(start)).asMinutes();
           

            element.items.map((el) => {

              el.isFresh == true ? arrFresh += 1 : null;
              el.isWeighable == true ? arrWeighable += 1 : null;
              el.isFractionable == true ? arrFractionable += 1 : null;
              el.isFrozen==true? arrFrozen +=1 : null;

            })

           
            return (
              <ListOrdenes
                key={element.id}
                permitir={valor}
                div={element.id}
                estadoOrden={element.status}
                onClick={() => handleClick(element.id, 'pending')}
              >
                <Img src={box} />
                <DivN>
                  <Numero>Nro.{element.id} </Numero>
                  <DivT>
                    <Text>
                      <Num>{element.totalItems}</Num> Items/
                    </Text>
                    <Text>
                      <Num>{parseInt(duration * 10, 10)}</Num>min
                    </Text>
                  </DivT>
                  <DivP>
                    <Peso>
                      <ImgP src={balance} />
                      <NumP>{arrWeighable}</NumP>
                    </Peso>
                    <Frio>
                      <ImgP src={snow} />
                    <NumP>{arrFrozen}</NumP>
                    </Frio>
                    <Aire>
                      <ImgP src={waves} />
                      <NumP>{arrFresh}</NumP>
                    </Aire>
                    <Aire>
                      <ImgP src={fraction} />
                    <NumP>{arrFractionable}</NumP>
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
          })
          )
          :
          (pickedAndPikcingSessions.map((element) => {
            arrFractionable = 0;
            arrWeighable = 0;
            arrFresh = 0;
            arrFrozen = 0;

            element.items.map((el)=>{
              
              el.isFresh==true? arrFresh +=1 : null;
              el.isWeighable==true? arrWeighable += 1: null;
              el.isFractionable==true? arrFractionable +=1 : null;
              el.isFrozen==true? arrFrozen +=1 : null;
              
           })

            start = moment(element.startPickingTime);
            end = moment(element.endPickingTime);
            duration = moment.duration(end.diff(start)).asMinutes();
            durationDias = moment.duration(end.diff(start)).asDays();

            parseInt(duration * 10, 10) < 1440? tiempo= parseInt(duration * 10, 10) + " min" : tiempo= parseInt(durationDias * 10, 10) + " días"

            
           
            return element.status == "picked" ?
              (

                <ListOrdenes
                  className="picked"
                  key={element.id}
                  permitir={valor}
                  div={element.id}
                  estadoOrden={element.status}
                  onClick={() => handleClick(element.id, 'picked')}>
                  <ImgPicked src={box} />
                  <DivN>
                    <Numero>Nro.{element.id} </Numero>
                    <DivT>
                      <Text>
                        <Num>{element.totalItems}</Num> Items/
                        </Text>
                      <Text>
                        <Num>{tiempo}</Num>
                        </Text>
                    </DivT>
                    <DivP>
                      <Peso>
                        <ImgP src={balance} />
                        <NumP>{arrWeighable}</NumP>
                        </Peso>
                        <Frio>
                          <ImgP src={snow} />
                        <NumP>{arrFrozen}</NumP>
                        </Frio>
                        <Aire>
                          <ImgP src={waves} />
                          <NumP>{arrFresh}</NumP>
                        </Aire>
                        <Aire>
                      <ImgP src={fraction} />
                    <NumP>{arrFractionable}</NumP>
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
                  </ListOrdenes>)
                :
                (<ListOrdenes
                  className="picking"
                  key={element.id}
                  permitir={valor}
                  div={element.id}
                  estadoOrden={element.status}
                  onClick={() => handleClick(element.id,'picking')}>
                    <ImgPicking src={box} />
                    <DivN>
                      <Numero>Nro.{element.id} </Numero>
                      <DivT>
                        <Text>
                          <Num>{element.totalItems}</Num> Items/
                        </Text>
                    <Text>
                      <Num>{tiempo}</Num>
                        </Text>
                      </DivT>
                      <DivP>
                        <Peso>
                          <ImgP src={balance} />
                          <NumP>{arrWeighable}</NumP>
                        </Peso>
                        <Frio>
                          <ImgP src={snow} />
                          <NumP>{arrFrozen}</NumP>
                        </Frio>
                        <Aire>
                          <ImgP src={waves} />
                          <NumP>{arrFresh}</NumP>
                        </Aire>
                        <Aire>
                      <ImgP src={fraction} />
                    <NumP>{arrFractionable}</NumP>
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
                )
               }
              )
          
          )
          
        }
      </DivScroll>
    </>
  );
};
