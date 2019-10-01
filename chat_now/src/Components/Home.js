import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import '../App.css';
class Home extends Component{
  render() {
    return(
      <ul className="Home">
        <li>
          <NavLink exact to="/login"><button className="ButtonStyle">Login</button></NavLink>
        </li>
        <li>
          <NavLink exact to="/signup"><button className="ButtonStyle">Signup</button></NavLink>
        </li>
      </ul>
    );
  }
}
export default Home;
