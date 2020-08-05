import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Buscador from "./Buscador";


const BuscadorContainer = ()=> {

    const handleChange = (event) => {
        // setInput(event.target.value);
      };
   
      const handleSubmit = (event) => {
        //event.preventDefault(); 
        
      };  

    return (
        <Buscador 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    );
} 

const MapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = () => {
    
};

  export default connect(null, null)(BuscadorContainer);