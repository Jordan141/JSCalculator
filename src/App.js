import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/button';
import Display from './components/display';
import './App.css';

const numbers = ['9','8','7','6','5','4','3','2','1','+','0','-','*','/','=']

class App extends Component {
  constructor(props){
    super(props)

    this.state = {expression: 0}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({expression: this.state.expression += event.target.innerHTML });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          
          <div className='buttonContainer'>
            <Display value={this.state.expression} onChange={this.handleChange}/>
            {numbers.map(i => <Button value={i} click={this.handleChange}/> )}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
