import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


import './App.css';

import Header from './Components/HeaderComponents/header'
import Register from './Components/Pages/Register/register'
import View from './Components/Pages/View/view'
import Accounts from './Components/Pages/Accounts/accounts'

import Web3 from 'web3'

import ContractsABIJSON from './OpenComplainNetwork.json'

console.log(ContractsABIJSON)

window.abi = ContractsABIJSON.abi
window.add = ContractsABIJSON.networks['4447'].address

class App extends Component {

	constructor(props) {
		super(props)
		this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		window._web3 = this.web3;

		this.complainContract = new this.web3.eth.Contract(window.abi, window.add, {
			from: '0x627306090abab3a6e1400e9345bc60c78a8bef57',
			gasPrice: '20000000000',
			gas: 2000000
		})

		console.log(JSON)

		window._contact = this.complainContract
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Route exact path='/Register' render={(props) => ( <Register contractObject={this.complainContract} web3Obj={this.web3}/> )} />
					<Route exact path='/View' render={(props) => ( <View contractObject={this.complainContract} web3Obj={this.web3} /> )} />
	Object.size = function(context) {
    var size = 0, key;
    for (key in context) {
        if (context.hasOwnProperty(key)) size++;
    }
    return size;
	};
					<Route exact path='/Accounts' render={(props) => ( <Accounts contractObject={this.complainContract} web3Obj={this.web3} /> )} />

				</div>
			</Router>
			);
		}
	}

	export default App;
