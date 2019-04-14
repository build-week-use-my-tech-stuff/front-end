import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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
        // event.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected');
        })
    }

    render() {
        return (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.login}>
              <input
                type='text'
                name='username'
                placeholder='Username'
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type='password'
                name='password'
                placeholder='......'
                onChange={this.handleChange}
                value={this.state.password}
              />
              <button>Log in</button>
            </form>
          </div>
        );
      }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
})


export default connect(mapStateToProps, { login })(Login);
