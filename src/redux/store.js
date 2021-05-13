// import {createStore} from 'redux';
import reducer from './reducers'

// const store = createStore(reducer);

import {createStore, compose} from 'redux';

const store = createStore(reducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;