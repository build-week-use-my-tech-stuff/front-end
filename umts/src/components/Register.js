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
        // event.preventDefault();
        this.props.register(this.state.credentials);
        this.setState({
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
        });
// Pushing to protected rather than to login here.
        this.props.history.push('/protected')
    };

    render() {
        return(
            <div>
                <form onSubmit = {this.register}>
                    <input 
                        name = 'username'
                        placeholder = 'Username'
                        type = 'text'
                        value = {this.state.credentials.username}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'password'
                        placeholder = 'Password'
                        type = 'password'
                        value = {this.state.credentials.password}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'email'
                        placeholder = 'Email Address'
                        type = 'text'
                        value = {this.state.credentials.email}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'firstName'
                        placeholder = 'First Name'
                        type = 'text'
                        value = {this.state.credentials.firstName}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'lastName'
                        placeholder = 'Email Address'
                        type = 'text'
                        value = {this.state.credentials.email}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'location'
                        placeholder = 'Location'
                        type = 'text'
                        value = {this.state.credentials.location}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'phoneNumber'
                        placeholder = 'Phone Number'
                        type = 'text'
                        value = {this.state.credentials.phoneNumber}
                        onChange = {this.handleRegisterChange}
                    />
                    <input 
                        name = 'picture'
                        placeholder = 'Profile Picture'
                        type = 'text'
                        value = {this.state.credentials.picture}
                        onChange = {this.handleRegisterChange}
                    />
                </form>
                <button type = 'submit'>Register</button>
            </div>
        )
    } 
}

const mapStateToProps = state => ({
    isRegistered: state.isRegistered,
    error: state.error,
})

export default connect(mapStateToProps, { register })(Register);