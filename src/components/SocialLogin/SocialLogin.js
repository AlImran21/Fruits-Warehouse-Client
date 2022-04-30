import React from 'react';
import './SocialLogin.css';
import GoogleLogo from '../../images/google.svg';


const SocialLogin = () => {
    return (
        <div>
            <div className='horizontal-divider'>
                <div className='left-line'></div>
                <p>or</p>
                <div className='right-line'></div>
            </div>
            <div>
                <button className='btn btn-success w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={GoogleLogo} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;