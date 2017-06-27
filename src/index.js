import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';
import shoes from './stores/shoes';

import './index.css';

const Root = (
  <Provider shoes={shoes}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
