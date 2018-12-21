import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
inputCountHandler = (inputCount) => {
  console.log('counting')
}

  render() {
let count = (
  <div>Hello</div>
)

    return (
      <div className="App">
        <input
        onChange={this.inputCountHandler}></input>
        <p>{count}</p>
      </div>
    );
  }
}

export default App;
