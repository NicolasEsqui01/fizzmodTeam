import React , { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login'

const LoginContainer = () =>{

    const [email, setEmail ] = useState({});
    const [password, setPassword ] = useState({});

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log({email, password})
    };

    const handleChange = (event) =>{
        switch(event.target.name){
            case 'email' : setEmail({[event.target.name]:event.target.value})
            case 'password' : setPassword({[event.target.name]:event.target.value})
        }
    };

    return (
        <Login handleSubmit={handleSubmit} handleChange={handleChange} valor={email , password}/>
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