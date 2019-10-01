import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Header from './Components/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Layout';
import Messenger from './Components/Messenger';
import ChangePassword from './Components/changePassword';
import UserDetails from './Components/UserDetails';
import ForgotPassword from './Components/ForgotPassword';
import './App.css';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="Main">
          <Header/>
          <div className="Routers">
            <Route exact path="/"  component={Layout} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/signup"  component={Signup} />
            <Route exact path="/layout"  component={Layout} />
            <Route exact path="/messenger"  component={Messenger} />
            <Route exact path="/changepassword"  component={ChangePassword} />
            <Route exact path="/profile"  component={UserDetails} />
            <Route exact path="/forgotpassword"  component={ForgotPassword} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
