import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { setLogin as funcionDeLogin } from '../../action/login';

const LoginContainer = ({setLogin}) => {
  const [input, setInput] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    setLogin(data);
  };

  const handleChange = (event) => {
    setInput({ [event.target.name]: event.target.value });
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      valor={input}
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