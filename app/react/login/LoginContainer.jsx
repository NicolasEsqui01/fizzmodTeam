import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setLogin as funcionDeLogin } from '../../action/login';
import history from '../../utils/history';

const LoginContainer = ({ setLogin }) => {
  const [input, setInput] = useState({});
  const [err, setError] = useState(false);
  const [inicio, setInicio] = useState(false);
  const [message, setMesssage] = useState('');
  const [ active , setActive ] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    setLogin(data).then((data) => {
      if (data && data.message) {
        setMesssage(data.message);
        setError(!err);
      } else {
        return history.push('/inicio');
      }
    });
  };

  const handleClick = () => {
    setInicio(!inicio);
    setActive(1);
  };
  
  const handleChange = (event) => {
    setInput({ [event.target.name]: event.target.value });
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleClick={handleClick}
      valor={input}
      error={err}
      mensaje={message}
      inicio={inicio}
      active={active}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (obj) => dispatch(funcionDeLogin(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
