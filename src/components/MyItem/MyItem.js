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
            const url = `https://frozen-island-93381.herokuapp.com/user?email=${email}`;

            try {
                const { data } = await axiosPrivate.get(url)
                setUsers(data);
                // console.log(data);
            }
            catch (error) {
                toast.error(error.message);

                // if (error.response.status === 401 || error.response.status === 403) {
                //     signOut(auth);
                //     navigate('/login');
                // }

            }
        }

        getUsers();

    }, [user]);

    const handleDeleteButton = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://frozen-island-93381.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                    toast.error('Product deleted');
                });
        }
    }


    return (
        <div className='my-5 container'>
            <div className='display-products-container'>
                {
                    users.map(user => <div key={user?._id} className="product">
                        <div className='image-container'>
                            <img src={user?.img} className="product-image" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{user?.name}</h5>
                            <h6 className="card-title">Supplier: {user?.supplierName}</h6>
                            <p
                                className='text-muted'>
                                <small>{user?.description?.length < 100 ? user?.description?.length : user?.description?.slice(0, 100)}
                                </small>
                                ...
                            </p>
                            <h6 className="card-title">Quantity: {user?.quantity}</h6>
                            <h6 className="card-title mb-3">Price: {user?.price}</h6>
                            <button onClick={() => handleDeleteButton(user._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;