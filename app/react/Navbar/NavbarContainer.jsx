import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  console.log("estado",state)
  return {
    //items: 
  };
};


const NavbarContainer = () => {

  const [time, setTime] = useState({ s: 0, m: 0, h: 0 })
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 })
  };

  let updatedS = time.s, updatedM = time.m, updatedH = time.h;

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
    return setTime({ s: updatedS, m: updatedM, h: updatedH });

  }
  return (
    <Navbar
      time={time}
      start={start} reset={reset} stop={stop} start={start} status={status}

    />
  )
}
export default connect(mapStateToProps)(NavbarContainer);


