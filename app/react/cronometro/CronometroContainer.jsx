import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cronometro from './Cronometro';

const CronometroContainer = ({}) => {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [booleano , setBooleano] = useState(false)

  let updatedS = time.s , updatedM = time.m , updatedH = time.h;

  const start = () => {
    run();
    setInterv(setInterval(run, 1000));
  };

  useEffect(() => {
    return () => {
      clearInterval(interv)
    };
  }, []);

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH })
  };

  localStorage.setItem('cronometro', JSON.stringify(time))

  if (!booleano) {
      start()
      setBooleano(!booleano)
  }


  return (
    <Cronometro time={time}/>
  )
};


export default connect(null, null)(CronometroContainer);
