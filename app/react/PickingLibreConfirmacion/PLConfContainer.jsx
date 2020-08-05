import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PLConfirmacion from "./PLConfirmacion";


const PLConfContainer = ()=> {

    


    return (
        <PLConfirmacion  />
    );
} 

const MapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = () => {
    
};

  export default connect(null, null)(PLConfContainer);