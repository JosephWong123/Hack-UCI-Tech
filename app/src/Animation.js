import React from 'react';
import './Animation.css';
import logo from './petr.png';

class Animation extends React.Component {
	render() {
		return(
			<div class="animate">
				<img src={logo} />
			</div>
		);
	}
}

export default Animation;