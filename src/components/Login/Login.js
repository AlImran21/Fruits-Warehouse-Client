import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'


const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }

    const navigateRegister = (event) => {
        navigate('/register');
    }


    return (
        <div className='w-25 mx-auto my-5 login-form'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-center mb-4 login-text'>Login</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className='mt-2'><span onClick={navigateRegister} className='register-text'>Please Register</span></p>
            <p className='mt-2 forget-text'>Forget Password? <span className='register-text'>Reset Password</span></p>

            <SocialLogin />
        </div>
    );
};

export default Login;