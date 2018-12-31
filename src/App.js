import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    
    letterCount: 
      { count: 0 }
    
  }

  inputCountHandler = (event, inputCount) => {
    let wordArray = event.target.value;
    console.log('counting ' + wordArray.length + ' ' + wordArray)
  }

  render() {
    let displayCount = (
    <p>{this.letterCount} K</p>
    )

  return (
    <div className="App">
      <input
      onChange={this.inputCountHandler}></input>

      <div>{displayCount}</div>
    </div>
  );
  }
}

export default App;
