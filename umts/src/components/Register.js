import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';


class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            location: '',
            phonenumber: '',
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
        this.props.register({
            username: this.state.credentials.username, password: this.state.credentials.password,
            email: this.state.credentials.email, firstname: this.state.credentials.firstname,
            lastname: this.state.credentials.lastname, country: this.state.credentials.country,
            state: this.state.credentials.state, phonenumber: this.state.credentials.phonenumber, 
            picture: this.state.credentials.picture 
        });
        this.setState({
            credentials: {
                username: '',
                password: '',
                email: '',
                firstname: '',
                lastname: '',
                country: '',
                state: '',
                phonenumber: '',
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
                <form onSubmit={this.register}>
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
                <button onClick = {this.register} className = 'actionBtn'>Register</button>
            </div>
        )
    } 
}

const mapStateToProps = state => ({
    isRegistered: state.isRegistered,
    error: state.error,
})

export default connect(mapStateToProps, { register })(Register);