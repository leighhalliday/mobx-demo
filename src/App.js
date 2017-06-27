import React, { Component } from 'react';
// Needed to allow our component to use store and observe changes to store
import {observer, inject} from 'mobx-react';

/*
We will "inject" the ShoeStore into this component. It arrives as a prop,
so you can access it with this.props.ShoeStore
there are examples below in the handleSubmit and the render functions
of how to use the store

it is important to also include @observer, as this makes sure our
component re-renders when the data inside the store (observable properties) change
*/
@inject('ShoeStore')
@observer
class App extends Component {
  // will handle form submission
  handleSubmit = (e) => {
    // prevent form submit
    e.preventDefault();
    // git input value
    const shoe = this.shoeInput.value;
    // call store action function, passing shoe
    this.props.ShoeStore.addShoe(shoe);
    // reset the input to empty so user can enter next shoe
    this.shoeInput.value = '';
  }

  render() {
    return (
      <div className="App">
        <h1>My Shoes</h1>
        {/*
          below is an example of using the store's computed property
        */}
        <h2>I have {this.props.ShoeStore.shoesCount} shoes</h2>

        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <input type="text" ref={(input) => {this.shoeInput = input}}></input>
          <button type="submit">Add Shoe</button>
        </form>

        <ul>
          {/*
            let's map the shoes inside of the store
          */}
          {this.props.ShoeStore.shoes.map((shoe, index) => {
            return (
              <li key={index}>
                {shoe}
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
