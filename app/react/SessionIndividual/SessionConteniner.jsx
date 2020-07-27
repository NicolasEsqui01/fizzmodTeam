import React , {useEffect }from 'react';
import Session from './Session';
import { connect } from 'react-redux';

const SessionConteiner = () => {
  return <Session />;
};


export default connect(null, null)(SessionConteiner);

/* mapStateToProps, mapDispatchToProps */
