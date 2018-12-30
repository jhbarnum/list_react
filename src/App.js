import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  inputCountHandler = (event, inputCount) => {

    let wordArray = event.target.value;

  console.log('counting ' + wordArray.length + ' ' + wordArray)
}

  render() {
let count = (
  <p>Hello</p>
)

    return (
      <div className="App">
        <input
        onChange={this.inputCountHandler}></input>

        <div>{count}</div>
      </div>
    );
  }
}

export default App;
