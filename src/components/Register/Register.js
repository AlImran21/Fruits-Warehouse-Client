import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';


const Register = () => {
    return (
        <div className='w-25 mx-auto my-5 form-container'>
            <form>
                <h3 className='text-center mb-4'>Register</h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="Register-button">Register</button>
            </form>
            <p className='mt-2 alternate-text'>Already have an account? <span>Login</span></p>

            <SocialLogin />
        </div>
    );
};

export default Register;