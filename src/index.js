import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CustomersService from './services/customers-service';
import CustomersServiceContext from './components/customers-service-context';

import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';

import './index.css';

import store from './redux/store';

const customersService = new CustomersService(); 

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CustomersServiceContext.Provider value={customersService}>
        <Router>
          <App/>
        </Router>
      </CustomersServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
, document.getElementById('root'));