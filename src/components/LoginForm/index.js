import {Component} from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

import './index.css'

class LoginForm extends Component {
    state = {
        username:  '',
        password: '', 
    }

    submitForm = async event => {
        event.preventDefault()
        const {username,password} = this.state

        const userDetails = {username,password}
        console.log(userDetails);
        const url = "http://localhost:5000/login"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Added Content-Type header
              },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        const data = await response.json()
        console.log(data)
    }

    onChangeUsername = event => {
        this.setState({username: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password : event.target.value})
    }

    renderPasswordField = () => {
        const {password} = this.state
        return (
            <>
            <label className='input-label' htmlFor='password'>PASSWORD</label>
            <div className='input-contain'>
            <FaUnlock  className='icon'/>            
            <input
            type='password'
            id='password'
            className='input-field'
            value={password}
            onChange={this.onChangePassword}
            />
            </div>
            </>
        )
    }

    renderUsernameField = () => {
        const{username} = this.state
        return(
            <>
            <label className='input-label' htmlFor='username'>USERNAME</label>
            <div className='input-contain'>
            <FaUserAlt  className='icon'/>
            <input
            type='text'
            id='username'
            className='input-field'
            value={username}
            onChange={this.onChangeUsername}
            />
            </div>
            </>
        )
    }

    render () {
        return(
            <div className='login-form-container'>
                    <form className='form-container' onSubmit={this.submitForm}>
                    <img src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg' 
                            className='login-website-logo' 
                                alt='website logo'
                        />
                        <div>
                            <div className='input-container'>{this.renderUsernameField()}</div>
                            <div className='input-container'>{this.renderPasswordField()}</div>
                            <button className='login-button' type='submit'>Login</button>
                            <p>
                                Doesn't have an account yet?{' '}
                                <Link to="/signup" style={{ color: '#4CAF50' }}>Sign Up</Link>
                            </p>
                        </div>
                        
                    </form>
            </div>
        )
    }

}
export default LoginForm;