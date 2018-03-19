import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

class Account extends Component{

  render(){
    return(
      <div class="jumbotron">
        <div>
            <label for="sel">Opperetor:</label>
            <select name="Opperetor" id="sel">
                <option value="Admin">Admin</option>
                <option>Police</option>
                <option value="Complainer">Complainer</option>
            </select>

            <p>
                Opperetor id:
            </p>
            <br/>
            <hr/>
            <br/><br/>

            <div class="jumbotron">
                <form method="get">
                    <label>Name: </label>
                    <input type="text" name="name" id="cname" placeholder="Name" /><br/><br/>
                    <label>Mobile no<sup>.</sup>: </label>
                    <input type="number" name="num" id="cno" placeholder="Mobile Number" /><br/><br/>
                    <label for="add">Address:</label>
                    <textarea rows="5" cols="20" id="add" placeholder="Address"></textarea><br/><br/>
                    <div>
                        <label for="date">Date</label>
                        <input type="date" id="datepicker"/>
                    </div>
                </form>
            </div>

        </div>
    </div>
        );
      }
}

export default Account;
