import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            location: '',
            phoneNumber: '',
            picture: ''
        }
    }

    handleRegisterChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    register = event => {
        event.preventDefault();
        this.props.register(this.state.credentials);
        this.setState({
            credentials: {
                username: '',
                password: '',
                email: '',
                firstName: '',
                lastName: '',
                country: '',
                state: '',
                phoneNumber: '',
                picture: ''
            }
        });
// Pushing to protected rather than to login here.
        this.props.history.push('/protected')
    };

    render() {
        return(
            <div className = 'registerForm'>
                <h1>Register Your Account</h1>
                <form >
                    <input 
                        className = 'input'
                        name = 'username'
                        placeholder = 'Username'
                        type = 'text'
                        value = {this.state.credentials.username}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'password'
                        placeholder = 'Password'
                        type = 'password'
                        value = {this.state.credentials.password}
                        onChange = {this.handleRegisterChange}
                    />
                    <input
                        className = 'input' 
                        name = 'email'
                        placeholder = 'Email Address'
                        type = 'text'
                        value = {this.state.credentials.email}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'firstName'
                        placeholder = 'First Name'
                        type = 'text'
                        value = {this.state.credentials.firstName}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'lastName'
                        placeholder = 'Last Name'
                        type = 'text'
                        value = {this.state.credentials.lastName}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'country'
                        placeholder = 'Country'
                        type = 'text'
                        value = {this.state.credentials.country}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'state'
                        placeholder = 'State'
                        type = 'text'
                        value = {this.state.credentials.state}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'phoneNumber'
                        placeholder = 'Phone Number'
                        type = 'text'
                        value = {this.state.credentials.phoneNumber}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        className = 'input'
                        name = 'picture'
                        placeholder = 'Profile Picture'
                        type = 'text'
                        value = {this.state.credentials.picture}
                        onChange = {this.handleRegisterChange}
                    />
                </form>
                <button onClick={(e) => this.register(e)} className = 'actionBtn'>Register</button>
            </div>
        )
    } 
}

const mapStateToProps = state => ({
    isRegistered: state.isRegistered,
    error: state.error,
})

export default connect(mapStateToProps, { register })(Register);