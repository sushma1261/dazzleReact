import React from 'react';
import {HashRouter , Link , Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import Testing from './Testing';
import Download from './Download';

import './NavigationBar.css';


class NavigationBar extends React.Component{
	scrollToH = (e) => {
		const x = document.getElementById("h");
		console.log(x.offsetTop);
		window.scrollTo({
			top : x.offsetTop,
			left : 0,
			behavior : 'smooth'
		});
	}
	scrollToA = (e) => {
		const x = document.getElementById("a");
		const x1 = x.offsetTop+100;
		window.scrollTo({
			top : x1,
			left : 0,
			behavior : 'smooth'
		});
	}
	scrollToP = (e) => {
		const x = document.getElementById("p");
		const x1 = x.offsetTop-120;
		window.scrollTo({
			top : x1,
			left : 0,
			behavior : 'smooth'
		});
	}
	scrollToT = (e) => {
		const x = document.getElementById("t");
		console.log(x.offsetTop);
		window.scrollTo({
			top : x.offsetTop,
			left : 0,
			behavior : 'smooth'
		});
	}
	scrollToD = (e) => {
		const x = document.getElementById("d");
		console.log(x.offsetTop);
		window.scrollTo({
			top : x.offsetTop,
			left : 0,
			behavior : 'smooth'
		});
	}

	render() {
		return (
			<HashRouter>
			<div>	

					<div className = "nav-bar-a list-bar" style = {{position: 'sticky', top : '0' }}>
					<h1>Dazzle</h1>
						<ol >
							<div className = "nav-bar-aa ui secondary menu"> 
								<li className = "item"><Link to = "/" className = "navlink-item" onClick = {this.scrollToH}>Home</Link></li>
								<li className = "item"><Link to = "/" className = "navlink-item" onClick = {this.scrollToA}>About</Link></li>
								<li className = "item"><Link to = "/" className = "navlink-item" onClick = {this.scrollToP}>Pricing</Link></li>
								<li className = "item"><Link to = "/" className = "navlink-item" onClick = {this.scrollToT}>Testing</Link></li>
								<li className = "item"><Link to = "/" className = "navlink-item" onClick = {this.scrollToD}>Download</Link></li>
							</div>
						</ol>
					</div>
					<div className = "content">
						<p id = "h" />
						<Route path = "/" component = {Home} />
						<p id = "a"></p>
						<Route path = "/" component = {About}/>
						<p id = "p"></p>
						<Route path = "/" component = {Pricing}/>
						<p id = "t"></p>
						<Route path = "/" component = {Testing}/>
						<p id = "d"></p>
						<Route path = "/" component = {Download}/>
					</div>
			</div>
			</HashRouter>
		);
	}
}
export default NavigationBar;