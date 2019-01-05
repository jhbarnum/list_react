import React, { Component } from 'react';
import './App.css';
import output from './output/output.js';

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


  return (
    <div className="App">
      <input
      onChange={this.inputCountHandler}></input>
      <div><output 
        count={this.inputCountHandler} />
      </div>
    </div>
  );
  }
}

export default App;
