import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SeleccionCanastos from "./SeleccionCanastos";


const SeleccionContainer = ()=> {
    return (
        <SeleccionCanastos/>
    );
}

const MapStateToProps = () => {

};

const mapDispatchToProps = () => {
    
  };

  export default connect(null, null)(SeleccionContainer);