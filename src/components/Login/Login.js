import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'


const Login = () => {
    return (
        <div className='w-25 mx-auto my-5 login-form'>
            <form>
                <h3 className='text-center mb-4 login-text'>Login</h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="login-button">Login</button>
            </form>
            <p className='mt-2'><span className='register-text'>Please Register</span></p>
            <p className='mt-2 forget-text'>Forget Password? <span className='register-text'>Reset Password</span></p>

            <SocialLogin />
        </div>
    );
};

export default Login;