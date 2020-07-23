import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const NavbarContainer = () => {
  return (
    <Navbar/>
  )
}
export default connect(null, null)(NavbarContainer);


