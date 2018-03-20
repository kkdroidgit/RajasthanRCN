import React, {Component} from 'react';
import Router,{Link} from 'react-router-dom';
import Register from '../ComplainReg/complain.js';
class Navigation extends Component {

	constructor()
{
	super();

	this.renderPage = this.renderPage.bind(this);
	this.handleClick = this.handleClick.bind(this);
}

renderPage(){
return (<Register />);
}

handleClick(){
	const newPage = this.props.newPage;

	newPage();
}
	render() {
		return (
			<div className="header-class">
				<header className="App-header">
					<div className="small-header">
						<h1 className="App-title">Open Complain Network</h1>
						<div className="links">
						<button onClick="{this.handleClick}"></button>
												</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Navigation;
