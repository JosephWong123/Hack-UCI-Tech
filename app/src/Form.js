import React from 'react';
import './Form.css'

class Form extends React.Component {
	state = {
		name: '',
		email: '',
		fact: '',
		errors: {}
	};

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div id="formBox">
				<p id="title"><b>Hack UCI Application</b></p>
				<form>
					<label for="nameField"> <b>Name</b> </label>
					<br />
					<input 
					name="name"
					placeholder="Name" 
					value={this.state.name} 
					onChange={e => this.change(e)} 
					class="fields"
					id="nameField"
					/>
					<br />
					<label for="emailField"> <b>Email</b> </label>
					<br />
					<input 
					name="email"
					placeholder="Email" 
					value={this.state.email} 
					onChange={e => this.change(e)}
					class="fields"
					id="emailField" 
					/>
					<br />
					<label for="fact"> <b>Fun Fact</b> </label>
					<br />
					<textarea
					type="text"
					rows="3" 
					name="fact"
					placeholder="Fun Fact" 
					value={this.state.fact} 
					onChange={e => this.change(e)}
					id="fact" 
					/>
					<br />
					<button id="submitButton" onClick={e => this.onSubmit(e)}>Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;