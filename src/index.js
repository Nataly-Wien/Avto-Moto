import './../public/sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import {reducer} from './store/reducer';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import {createAPI} from './services/api';

import App from './components/app/app';

// const api = createAPI();

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

// ReactDOM.render(<Provider store={store}>
//   <App />
// </Provider>, document.querySelector(`#root`)
// );

ReactDOM.render(<App />, document.querySelector(`#root`));
