import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PickingLibre from "./PickingLibre";


const PickingLibreContainer = ()=> {

    


    return (
        <PickingLibre  />
    );
} 

const MapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = () => {
    
};

  export default connect(null, null)(PickingLibreContainer);