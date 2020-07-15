import React , {useState} from 'react';
import {connect} from 'react-redux';
import Forgot from './Forgot'
import {setRecuperarPassword} from '../../action/login'

const ForgotContainer = ({setRecuperarPassword}) =>{

    const [email, setEmail] = useState({}) 

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = {
            email:event.target[0].value
        }
        setRecuperarPassword(data)
    };

    const handleChange = (event) =>{
        setEmail({[event.target.name]:event.target.value});
    } 

    return (
        <Forgot handleSubmit={handleSubmit} handleChange={handleChange} />
    )
};

const MapStateToProps = (state) =>{
    return {

    }
};

const MapDispatchToProps = (dispatch) =>{
    return {
        setRecuperarPassword : (obj) => dispatch(setRecuperarPassword(obj))
    }
};

export default connect (MapStateToProps,MapDispatchToProps)(ForgotContainer);