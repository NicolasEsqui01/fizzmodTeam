import React , {useState , useEffect} from 'react';
import {connect} from 'react-redux';
import Forgot from './Forgot'
import {setRecuperarPassword as RecuperarPassword} from '../../action/login'

const ForgotContainer = ({setPassword}) =>{

    const [email, setEmail] = useState({});
    const [boolen , setBoolen] = useState(false);

    // useEffect(() =>{
    // },[boolen])

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = {
            email:event.target[0].value
        }
        setPassword(data).then(()=>{
            return setBoolen(!boolen)
        })
    };

    const handleChange = (event) =>{
        setEmail({[event.target.name]:event.target.value});
    } 

    return (
        <Forgot handleSubmit={handleSubmit} handleChange={handleChange} boolen={boolen} valor={email}/>
    )
};

const mapStateToProps = (state) =>{
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPassword : (obj) => dispatch(RecuperarPassword(obj))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotContainer);