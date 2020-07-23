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
  return (
    <Navbar/>
  )
}
export default connect(mapStateToProps)(NavbarContainer);


