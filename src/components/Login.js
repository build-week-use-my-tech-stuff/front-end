import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '1user',
            password: 'pass'
        }
    };

    handleLoginChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        })
    }

    render() {
        return (
          <div className = 'form'>
            <h1>Login</h1>
            <form onSubmit={this.login}>
              <input
                className = 'input'
                type='text'
                name='username'
                placeholder='Username'
                onChange={(e) => {this.handleLoginChange(e)}}
                value={this.state.credentials.username}
              />
              <input
                className = 'input'
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleLoginChange}
                value={this.state.credentials.password}
              />
              <button className = 'actionBtn'>Log in</button>
            </form>
          </div>
        );
      }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
})


export default connect(mapStateToProps, { login })(Login);
