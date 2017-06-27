import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

@inject('shoes')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
