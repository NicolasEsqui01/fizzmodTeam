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

export default ({ pendSessions, pickSessiones, status, handleClick, valor }) => {
  let start;
  let end;
  let duration;
  let durationDias;
  let tiempo;
  let hoy = new Date().toISOString();
  let arrFractionable = 0;
  let arrWeighable = 0;
  let arrFresh = 0;
  let arrFrozen = 0;
  let IgualMarca=0;
  let NoSustituir=0;


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
            
              IgualMarca=0;
              NoSustituir=0;  

            element.items.map((el) => {

              el.isFresh == true ? arrFresh += 1 : null;
            arrFrozen = 0
              el.isWeighable == true ? arrWeighable += 1 : null;
              el.isFractionable == true ? arrFractionable += 1 : null;
              el.isFrozen == true ? arrFrozen += 1 : null;
              
              el.substitutionCriteria == "sameBrand"? IgualMarca+= 1 : null;
              el.substitutionCriteria == "doNotSubstitute"? NoSustituir+= 1 : null;
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
                       <Info>{IgualMarca>0? " = Marca, " : null}{NoSustituir>0? " = No sustituir, " : null}</Info>
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
          (pickSessiones.map((element) => {
            arrFractionable = 0;
            arrWeighable = 0;
            arrFresh = 0;
            arrFrozen = 0;
             
            
              IgualMarca=0;
              NoSustituir=0;  

            element.items.map((el) => {
              el.isFresh == true ? arrFresh += 1 : null;
              el.isWeighable == true ? arrWeighable += 1 : null;
              el.isFractionable == true ? arrFractionable += 1 : null;
              el.isFrozen == true ? arrFrozen += 1 : null;

              el.substitutionCriteria == "sameBrand"? IgualMarca+= 1 : null;
              el.substitutionCriteria == "doNotSubstitute"? NoSustituir+= 1 : null;

            })

            start = moment(element.startPickingTime);
            end = moment(element.endPickingTime? element.endPickingTime : hoy);
            duration = moment.duration(end.diff(start)).asMinutes();
            durationDias = moment.duration(end.diff(start)).asDays();
            parseInt(duration * 10, 10) < 1440 ? tiempo = parseInt(duration * 10, 10) + " min" : tiempo = Math.ceil(durationDias) + " días"

            return (
              <ListOrdenes
                className="picking"
                key={element.id}
                permitir={valor}
                div={element.id}
                estadoOrden={element.status}
                onClick={() => handleClick(element.id, 'picking')}>
                <ImgPicking src={box} />
                <DivN>
                  <Numero>Nro.{element.id} </Numero>
                  <DivT>
                    <Text>
                      <Num>{element.totalItems}</Num> Items/
                    </Text>
                    <Text>
                      <Num>{tiempo}
                      </Num>
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
                      <Info> = Marca, = Gramaje </Info>
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
        }
      </DivScroll>
    </>
  );
};
