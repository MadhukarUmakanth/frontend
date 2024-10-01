import {Component} from 'react'
import { IoMdContact } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineScreenLockPortrait } from "react-icons/md";

import './index.css'

class Signup extends Component {
    constructor(props) {
        super(props);
    this.state = {
        username:  '',
        password: '', 
        email: '',
        showSubmitError: false
    
    }
};
   onSubmitFailure = () => {
    this.setState({
        showSubmitError: true,
    })
   }


    onChangeUsername = (username) => {
        this.setState({username: username.target.value});
      };
    
      onChangeEmail = (email) => {
        this.setState({email: email.target.value});
      };

    onChangePassword = (password) => {
        this.setState({password: password.target.value});
      };

    onSubmitForm = async (e) => {
        e.preventDefault()
        const {username,email,password} = this.state
        console.log('Form Data Submitted:', this.state);
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST', // Specify POST method
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({ username, email, password}), // Send the form data in the body
          });
          console.log(response)
          if(response.ok === true) {
            this.onSubmitForm()
          }else{
            this.onSubmitFailure()
          }

    }

    renderPasswordField = () => {
        const {password} = this.state
        return (
            <>
            <label className='input-label' htmlFor='password'>PASSWORD</label>
            <div className='input-contain'>
            <MdOutlineScreenLockPortrait className='icon'/>            
            <input
            type='password'
            id='password'
            className='input-field'
            value={password}
            onChange={this.onChangePassword}
            placeholder = 'Create Password'
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
            <IoMdContact className='icon'/>
            <input
            type='text'
            id='username'
            className='input-field'
            value={username}
            onChange={this.onChangeUsername}
            placeholder='Create Username'
            />
            </div>
            </>
        )
    }
    renderEmailField = () => {
        const{email} = this.state
        return (
            <>
            <label className='input-label' htmlFor='email'>Email</label>
            <div className='input-contain'>
            <MdMarkEmailRead  className='icon'/>
            <input
            type='text'
            id='email'
            className='input-field'
            value={email}
            onChange={this.onChangeEmail}
            placeholder='Your e-mail'
            />
            </div>
            
            </>
        )
    }

    render () {
        const {showSubmitError} = this.state;
        return(
            <div className='login-form-container'>
                    <form className='form-container' onSubmit={this.onSubmitForm}>
                    <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg' 
                            className='login-website-logo' 
                                alt='website logo'
                            />
                            <div className='card'>
                                <h1>Welcome!</h1>
                                <div className='input-container'>{this.renderUsernameField()}</div>
                                <div className='input-container'>{this.renderEmailField()}</div>
                                <div className='input-container'>{this.renderPasswordField()}</div>
                                <button className='signup-button' type='submit'>SignUp</button>
                                {showSubmitError && <p className='error'>* username already exits</p>}
                                
                        </div>
                        
                        
                    
                </form>
                </div>
            
        )
    }

}
export default Signup;