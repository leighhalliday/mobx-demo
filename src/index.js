import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the Provider from mobx-react, used below
import {Provider} from 'mobx-react';
// Import our store
import ShoeStore from './stores/ShoeStore';

// import our styles produced from sass
import './css/styles.css';

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

// Render the Root variable we created above, not <App/>
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
