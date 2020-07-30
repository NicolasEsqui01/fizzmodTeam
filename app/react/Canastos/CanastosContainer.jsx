import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Canastos from "./Canastos"

const CanastosContainer = () => {
    return (
        <Canastos />
    );
}

const MapStateToProps = () => {

};

const mapDispatchToProps = () => {

};

export default connect(null, null)(CanastosContainer);