import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cronometro from './Cronometro';

const CronometroContainer = ({}) => {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [booleano , setBooleano] = useState(false)

  if(localStorage.getItem('cronometro')) {
    let {s,m,h} = JSON.parse(localStorage.getItem('cronometro'))
    var updatedS = s, updatedM = m , updatedH = h;
  } else {var updatedS = time.s, updatedM = time.m , updatedH = time.h}

  const start = () => {
    if(localStorage.getItem('cronometro')) {
      let tiempoEnStorage = JSON.parse(localStorage.getItem('cronometro'))
      setTime(tiempoEnStorage)
      run(tiempoEnStorage);
      setInterv(setInterval(run, 1000));
    } else {
      run();
      setInterv(setInterval(run, 1000));
    }
  };

  useEffect(() => {
    start();
    return () => {
      clearInterval(interv)
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('cronometro', JSON.stringify(time))
  }, [time]);

  const run = (timer) => {

    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;

    if(timer) {
      return setTime(timer)
    }
      else return setTime({ s: updatedS, m: updatedM, h: updatedH })
  };

  return (
    <Cronometro time={time}/>
  )
};


export default connect(null, null)(CronometroContainer);
