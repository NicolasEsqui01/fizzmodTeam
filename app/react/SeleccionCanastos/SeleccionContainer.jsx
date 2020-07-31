import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SeleccionCanastos from "./SeleccionCanastos";


const SeleccionContainer = ()=> {

    const [value , setValue ] = useState('')
    const [nameCanasto , setNameCanasto] = useState('')

    const handleClick = (id) =>{
        setValue(id)
    };

    const handleSubmit = (event) =>{
        event.preventDefault(); 
        setNameCanasto(event.target[0].value)
        event.target[0].value=''
    };


    return (
        <SeleccionCanastos handleClick={handleClick} valor={value} handleSubmit={handleSubmit} />
    );
} 

const MapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = () => {
    
};

  export default connect(MapStateToProps, null)(SeleccionContainer);