import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import './MyItem.css';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getUsers = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/user?email=${email}`;

            try {
                const { data } = await axiosPrivate.get(url)
                setUsers(data);
            }
            catch (error) {
                toast.error(error.message);

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }

            }
        }

        getUsers();

    }, [user]);


    return (

        <div>
            <h1>My Item: {users.length}</h1>
        </div>

        /*  <div className="product">
             <div className='image-container'>
                 <img src='' className="product-image" alt="..." />
             </div>
             <div className="card-body">
                 <h5 className="card-title"></h5>
                 <h6 className="card-title">Supplier: </h6>
                 <p
                     className='text-muted'>
                     <small>{ }
                     </small>
                     ...
                 </p>
                 <h6 className="card-title">Quantity: </h6>
                 <h6 className="card-title mb-3">Price: </h6>
                 <button className="btn btn-danger">Delete</button>
             </div>
         </div> */
    );
};

export default MyItem;