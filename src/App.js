import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  inputCountHandler = (inputCount) => {
    let letterCount = 0; 
    letterCount++;

    //let wordArray[] = letter;

  console.log('counting' + letterCount )
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
