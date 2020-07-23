import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
  console.log("estado",state)
  return {
    items: state.sessionReducer.sessionPicking.items,
    //state: state
  };
};

const NavbarContainer = (props) => {
  return (
    <Navbar {...props}/>
  )
}
export default connect(mapStateToProps, null)(NavbarContainer);


