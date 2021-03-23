import React from 'react';
import './Form.css'

class Form extends React.Component {
	initialState = {
		name: '',
		email: '',
		fact: '',
		nameError: '',
		emailError: '',
		factError: ''
	};

	state = {
		name: '',
		email: '',
		fact: '',
		nameError: '',
		emailError: '',
		factError: '',
		submitted: ''
	};

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		const valid = this.checkValid();
		if (valid) {
			// let submitted = "Successfully submitted application!";
			this.clear();
			// this.setState({submitted});
			// I think it looks nicer without the above line commented out and no alert, but
			// specifications said to use alert so I used alert.	
			var url = new URL("https://hack-uci-test-endpoint.herokuapp.com/test"),
			    params = {name: this.state.name, email: this.state.email, funfact: this.state.fact};
			Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) 
			fetch(url)
			  .then((response) => {
			  	console.log(response.status)
			    if (response.status === 200) {
			    	alert("Successfully submitted application!");
			    }
			    else {
			    	alert("An error occurred. Please try again.");
			    }
			    return response.json();
			  })
			  .then((data) => {
			    console.log(data);
			  });

		}

	}

	clear = () => {
		this.setState(() => this.initialState)
	}

	checkValid = () => {
		let nameError = "";
		let emailError = "";
		let factError = "";
		let submitted = "";
		if (!this.state.name) {
			nameError = 'Name is required';
		}

		else {
			nameError = '';
		}

		if (!this.validateEmail()) {
			emailError = 'Invalid email';
		}

		else {
			emailError = '';
		}

		if (!this.state.fact) {
			factError = 'Fun Fact is required';
		}

		else {
			factError = '';
		}

		this.setState({nameError});
		this.setState({emailError});
		this.setState({factError});
		this.setState({submitted});
		if (nameError || emailError || factError) {
			return false;
		}
		return true;
	}

	validateEmail = () => {      
	   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	   return emailPattern.test(this.state.email);
 	} 

	render() {
		return (
			<div id="formBox">
				<p id="title"><b>Hack UCI Application</b></p>
				<form id="formFields">
					<br />
					<label htmlFor="nameField"> <b>Name</b> </label>
					<br />
					<textarea
					rows="1" 
					name="name"
					placeholder="Name" 
					value={this.state.name} 
					onChange={e => this.change(e)} 
					className="fields"
					id="nameField"
					/>
					<div className="error">{this.state.nameError}</div>
					<br />
					<label htmlFor="emailField"> <b>Email</b> </label>
					<br />
					<textarea
					rows="1" 
					name="email"
					placeholder="Email" 
					value={this.state.email} 
					onChange={e => this.change(e)}
					className="fields"
					id="emailField" 
					/>
					<div className="error">{this.state.emailError}</div>
					<br />
					<label htmlFor="fact"> <b>Fun Fact</b> </label>
					<br />
					<textarea
					type="text"
					rows="6" 
					name="fact"
					placeholder="Fun Fact" 
					value={this.state.fact} 
					onChange={e => this.change(e)}
					id="fact" 
					/>
					<div className="error">{this.state.factError}</div>
					<div className="success">{this.state.submitted}</div>
					<br />
					<br />
					<button id="submitButton" onClick={e => this.onSubmit(e)}>Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;