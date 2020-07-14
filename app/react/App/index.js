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

// Header and Footer
import Footer from '../Footer';

import GlobalStyle from '../../global-styles';

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
        {/* <Route exact path="" component={NotFoundPage} /> */}
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
