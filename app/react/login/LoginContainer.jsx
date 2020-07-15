import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import { setLogin } from "../../action/login"

const LoginContainer = () => {

    const [input, setInput] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(setLogin, "ESTE ES SEEEETLOGIN")
        const data = {
            email: event.target[0].value,
            password: event.target[1].value
        }
        setLogin(data);
    };

    const handleChange = (event) => {
        setInput({ [event.target.name]: event.target.value })
    };

    return (
        <Login handleSubmit={handleSubmit} handleChange={handleChange} valor={input} />
    )
};


const mapStateToProps = (state) => {
    console.log(state, "ESTADOOOO")
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (obj) => dispatch(setLogin(obj))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)