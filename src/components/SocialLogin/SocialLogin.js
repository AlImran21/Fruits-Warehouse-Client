import React from 'react';
import './SocialLogin.css';
import GoogleLogo from '../../images/google.svg';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';


const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(googleUser);

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    /* if (googleLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    } */

    return (
        <div>
            <div className='horizontal-divider'>
                <div className='left-line'></div>
                <p>or</p>
                <div className='right-line'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={GoogleLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                {
                    googleError &&
                    <p className='text-danger mt-3 social-error'>Error: {googleError?.message}</p>
                }
            </div>
        </div>
    );
};

export default SocialLogin;