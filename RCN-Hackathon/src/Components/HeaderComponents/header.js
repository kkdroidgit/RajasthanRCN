import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom'

import './header.css'

import mainlogo from './mainlogo.svg';
//import logo2 from '../../img/logo.svg'

class Header extends Component {
	render() {
		return (
			<div className="header-class">


				<header className="App-header">
					<div className="small-header">
						<img src={mainlogo} width="100px" height="100px"/>
						<h1 className="App-title">Rajasthan Complain Network</h1>
						<div className="links">
							<Link to="/Register">Register</Link>
							<Link to="/View">View</Link>
						</div>
					</div>
				</header>


			</div>
		);
	}
}

	export default Header;
