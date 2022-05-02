import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }

    // if (loading) {
    //     return <Loading />
    // }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = (event) => {
        navigate('/register');
    }

    const resetPassword = async (event) => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.info('sent email');
        } else {
            toast.error('please enter your email');
        }

        // await sendPasswordResetEmail(email);
    }


    return (
        <div className='w-25 mx-auto my-5 login-form'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-center mb-4 login-text'>Login</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                {
                    error &&
                    <p className='text-danger error-style'>Error: {error?.message}</p>
                }
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className='mt-2'><span onClick={navigateRegister} className='register-text'>Please Register</span></p>
            <p className='mt-2 forget-text'>Forget Password? <span onClick={resetPassword} className='register-text'>Reset Password</span></p>

            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;