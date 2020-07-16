import React from "react";
import { connect } from "react-redux";
import ProductoIndividual from "./ProductoIndividual";


const ProductoIndividualcontainer = ()=> {
    return (
        <ProductoIndividual/>
    )

};

const MapStateToProps = (state)=> {
    return {

    }
};

const MapDispatchToProps = (dispatch)=> {
    return {
        
    }
};

export default connect (MapStateToProps, MapDispatchToProps)(ProductoIndividualcontainer)