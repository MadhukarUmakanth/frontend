import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import './index.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook

    const submitForm = async event => {
        event.preventDefault();
        const userDetails = { username, password };
        console.log(userDetails);
        
        const url = "http://localhost:5001/login";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);

            if (data.message === "Login Successfully!") {
                navigate('/'); // Navigate to home page
            } else {
                console.error("Login Failed");
            }

        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className='login-form-container'>
            <form className='form-container' onSubmit={submitForm}>
                <img src='https://img.freepik.com/free-vector/news-concept-landing-page_23-2148203325.jpg'
                    className='login-website-logo-desktop-img image-logo'
                    alt='website logo'
                />
                
                <div>
                    <div className='input-container'>
                        <label className='input-label' htmlFor='username'>USERNAME</label>
                        <div className='input-contain'>
                            <FaUserAlt className='icon' />
                            <input
                                type='text'
                                id='username'
                                className='input-field'
                                value={username}
                                autoComplete='username'
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='input-container'>
                        <label className='input-label' htmlFor='password'>PASSWORD</label>
                        <div className='input-contain'>
                            <FaUnlock className='icon' />
                            <input
                                type='password'
                                id='password'
                                className='input-field'
                                value={password}
                                autoComplete='current-password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className='login-button' type='submit'>Login</button>
                    <p>
                        Doesn't have an account yet?{' '}
                        <Link to="/signup" style={{ color: '#4CAF50' }}>Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
