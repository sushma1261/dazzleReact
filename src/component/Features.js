import React from 'react';
import './About.css'
class Features extends React.Component {
	render() {
		return (
			<span className = "comp">
					<h3>{this.props.name}</h3>
					<p>{this.props.para}</p>
				</span>
		);
	}
}
export default Features;