import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const NavbarContainer = () => {
  return(  
    <Navbar></Navbar>
  )
}
export default connect(null, null)(NavbarContainer);