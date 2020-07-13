import React from 'react';
import { connect } from 'react-redux';
import Orders from './Orders';

const OrdersContainer = () => <Orders></Orders>;

export default connect(null, null)(OrdersContainer);
