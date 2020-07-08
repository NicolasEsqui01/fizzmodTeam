import React , { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login'

const LoginContainer = () =>{

    const [input , setInput ] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();
        setInput({
            [event.target[0].name]:''
        })
    };

    const handleChange = (event) =>{
        setInput({[event.target.name]:event.target.value})
    };

    return (
        <Login handleSubmit={handleSubmit} handleChange={handleChange} valor={input.codigo}/>
    )
};


const mapStateToProps = (state) =>{
    return {

    };
};

const mapDispatchToProps = (dispatch) =>{
    return {

    };
};


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)