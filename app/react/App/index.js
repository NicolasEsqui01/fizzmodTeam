/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {connect } from 'react-redux';

// import { hot } from 'react-hot-loader/root';
// import NotFoundPage from '../NotFoundPage/Loadable';
import LoginContainer from '../login/Loadable'
import InicioContainer from '../Inicio/Loadable';
import ProductoIndividual from "../Producto Individual/Loadable"
import ForgotPassword from '../forgotPasseword/Loadable';
import SessionConteniner from '../SessionIndividual/SessionConteniner';
import GlobalStyle from '../../global-styles';
import PopUpContainer from '../PopUps/PopUpContainer'
import Navbar from '../Navbar/Navbar'



function App({location }) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
       <PopUpContainer/> 
      { location !== '/' ? <Navbar/> : null }
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route path="/inicio" component={InicioContainer} />
        <Route path="/session" component={SessionConteniner} />
        <Route path="/productoindividual/:id" component={ProductoIndividual} />
        <Route path="/forgotPassword" component={ForgotPassword} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    location:state.router.location.pathname
  }
};

export default connect(mapStateToProps,null)(App);
