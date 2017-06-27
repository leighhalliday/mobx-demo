import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';
import ShoeStore from './stores/ShoeStore';

import './index.css';

/*
This seems a little weird below, but we are wrapping our App component
in a special component which comes from mobx-react... this allows us
to access our ShoeStore from within the App component
*/
const Root = (
  <Provider ShoeStore={ShoeStore}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
