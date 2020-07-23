import React, { useState } from "react";
import { connect } from "react-redux";
import ProductoIndividual from "./ProductoIndividual";



const ProductoIndividualcontainer = ()=> {

    const[active, setActive] = useState(0)


const  handleBtnClick = (n) => {
          setActive(n)
      };


const  handleCloseClick = () => {
       setActive(0)
     };


    return (
        <>
        <ProductoIndividual
        Activar = {handleBtnClick}
        active = {active}
        onCloseClick = {handleCloseClick}
      
        />
        </>
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