import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ConfirmacionCanasto from "./ConfirmacionCanasto";


const ConfirmacionContainer = ()=> {
    return (
        <ConfirmacionCanasto/>
    );
}

const MapStateToProps = () => {

};

const mapDispatchToProps = () => {
    
  };

  export default connect(null, null)(ConfirmacionContainer);