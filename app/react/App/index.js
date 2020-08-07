import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';

// import { hot } from 'react-hot-loader/root';
// import NotFoundPage from '../NotFoundPage/Loadable';
import LoginContainer from '../login/Loadable'
import InicioContainer from '../Inicio/Loadable';
import ProductoIndividual from "../Producto Individual/Loadable"
import ForgotPassword from '../forgotPasseword/Loadable';
import SeleccionContainer from '../SeleccionCanastos/Loadable';
import ConfirmacionContainer from '../ConfirmacionCanasto/Loadable';
import CanastosContainer from '../Canastos/CanastosContainer';
import SessionConteniner from '../SessionIndividual/Loadable';
import GlobalStyle from '../../global-styles';
import PopUpContainer from '../PopUps/PopUpContainer';
import Navbar from '../Navbar/NavbarContainer';
import BuscadorContainer from "../Buscador/Loadable";
import PickingLibreContainer from '../PickingLibre/PickingLibreContainer'
import SustitutosContainer from '../Sustitutos/Loadable';


function App({ location }) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <PopUpContainer/>

      {location !== '/' ? <Navbar /> : null}
      <Switch>
        <Route exact path='/' component={LoginContainer} />
        <Route path="/inicio" component={InicioContainer} />
        <Route path="/session/:id" component={SessionConteniner} />
        <Route exact path="/productoindividual/:id/:indice" component={ProductoIndividual} />
        <Route path="/sustitutos/:id/:indice" component={SustitutosContainer} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/canastos" component={CanastosContainer} />
        <Route path="/seleccion" component={SeleccionContainer} />
        <Route path="/confirmacion" component={ConfirmacionContainer} />
        <Route path="/buscador" component={BuscadorContainer} />
        <Route path="/pickinglibre/:id" component={PickingLibreContainer} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.router.location.pathname
  }
};

export default connect(mapStateToProps, null)(App);
