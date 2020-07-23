import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  console.log("estado",state)
  return {
    //items: 
  };
};


const NavbarContainer = ({time , status , booleano}) => {
  return (
    <Navbar time={time} status={status} booleano={booleano}/>
  )
}
export default connect(mapStateToProps)(NavbarContainer);


