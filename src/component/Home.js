import React from 'react';
import './Home.css';
import './images/iphone-app-470.png';

class Home extends React.Component {
	render() {
		return (
			<div className = "home-main">
				<div className = "caption-head">
					<p style = {{fontSize : '20px'}}>Welcome To Dazzle</p>
					<p>Creative Landing Page to Showcase Your Amazing App.</p>
				</div>
				<div className = "image-phone">
					<img src = {require('./images/iphone-app-470.png')} alt = "not found" />
				</div>

			</div>
		);
	}
}

export default Home;