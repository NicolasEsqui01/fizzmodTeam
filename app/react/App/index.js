/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route , Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { hot } from 'react-hot-loader/root';
// import NotFoundPage from '../NotFoundPage/Loadable';
import LoginContainer from '../login/Loadable'
import InicioContainer from '../Inicio/InicioContainer';
import ProductoIndividual from "../Producto Individual/Loadable"
import ForgotPassword from '../forgotPasseword/Loadable';
// Header and Footer
import GlobalStyle from '../../global-styles';
import SessionConteniner from '../SessionIndividual/SessionConteniner';

function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route path='/login' component={LoginContainer}/>
        <Route path="/inicio" component={InicioContainer} />
        <Route path="/session"  component={SessionConteniner}/>
        <Route path="/productoindividual" component={ProductoIndividual}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        {/* <Route exact path="" component={NotFoundPage} /> */}
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
