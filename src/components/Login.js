import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { LoginForm, Inputs, ActionBtn } from './StyledComponents';

class Login extends React.Component {
    state = {
        credentials: {
            username: 'Stevies',
            password: '123'
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
        this.props.login({
          username: this.state.credentials.username, 
          password: this.state.credentials.password,
          email: this.state.credentials.email}).then(() => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
          <LoginForm>
            <h1>Login</h1>
            <form onSubmit={this.login}>
              <Inputs
                type='text'
                name='username'
                placeholder='Username'
                onChange={(e) => {this.handleLoginChange(e)}}
                value={this.state.credentials.username}
              />
              <Inputs
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleLoginChange}
                value={this.state.credentials.password}
              />
              <ActionBtn>Log in</ActionBtn>
            </form>
          </LoginForm>
        );
      }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
})


export default connect(mapStateToProps, { login })(Login);
