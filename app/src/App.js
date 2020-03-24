import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Animation from './Animation';


class App extends Component {
  render() {
    return (
    	<div class="box">
	      <div className="App" id="form">
	        <Form />
	      </div>
	      <span class="animation">
	      	<Animation />
	      </span>
      	</div>
    );
  }
}

export default App;
