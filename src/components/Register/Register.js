import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const navigate = useNavigate();

    const navigateLogin = (event) => {
        navigate('/login');
    }

    if (token) {
        navigate('/');
    }

    // if (loading || updating) {
    //     return <Loading />
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleRegister}>
                <h3 className='text-center mb-4'>Register</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="Register-button">Register</button>
            </form>
            <p className='mt-2 alternate-text'>Already have an account? <span onClick={navigateLogin}>Login</span></p>

            <SocialLogin />
        </div>
    );
};

export default Register;