import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Animation from './Animation';


class App extends Component {
  render() {
    return (
    	<div className="box">
	      <div className="App" id="form">
	        <Form />
	      </div>
	      <span className="animation">
	      	<Animation />
	      </span>
      	</div>
    );
  }
}

export default App;
