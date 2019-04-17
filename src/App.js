import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingItems, logout } from './actions';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UserAccount from './components/UserAccount';
import SignedIn from './components/navlinks/SignedIn';
import SignedOut from './components/navlinks/SignedOut';
import { AppHeader, AppContainer } from './components/StyledComponents';
import BuildLogo from './BuildLogo.JPG';

class App extends Component {
  componentDidMount() {
    this.props.fetchingItems();
  }

  logout = event => {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <Router>
        <AppContainer>
          <AppHeader>
            <img src = {BuildLogo} alt = 'logo'/>
            {this.props.isLoggedIn ? <SignedIn logout = {this.logout}/> : <SignedOut /> }
          </AppHeader>
          <Route 
            path = '/login'
            component = {Login}
          />
          <Route 
            path = '/register'
            component = {Register}
          />
          <Route 
            exact path = '/'
            component = {Dashboard}
          />
          <Route 
            path = '/profile'
            component = {UserAccount}
          />
        </AppContainer>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    tech: state.tech,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { fetchingItems, logout })(App);
