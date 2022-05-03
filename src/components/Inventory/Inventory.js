import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/fruit/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const name = event.target.quantity.value;
        console.log(name);
        event.target.reset();
    }

    const handleManageButton = () => {
        navigate('/manageItems');
    }


    return (
        <div>
            <div className="product mx-auto my-3">
                <div className='image-container'>
                    <img src={product?.img} className="product-image" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <h6 className="card-title">Supplier: {product?.supplierName}</h6>
                    <p
                        className='text-muted'>
                        <small>{product?.description?.length < 100 ? product?.description?.length : product?.description?.slice(0, 100)}
                        </small>
                        ...
                    </p>
                    <h6 className="card-title">Quantity: {product?.quantity}</h6>
                    <h6 className="card-title mb-3">Price: {product?.price}</h6>
                    <button className="delivered-button">Delivered</button>
                </div>
            </div>
            <div className='d-block w-25 mx-auto my-5'>
                <form onSubmit={handleSubmitForm}>
                    <div className="mb-3">
                        <input type="text" name='quantity' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Quantity' />
                    </div>
                    <button type="submit" className="increase-button">Increase Quantity</button>
                </form>
            </div>
            <div className='text-center my-5'>
                <button onClick={handleManageButton} className='manage-all-button'>Manage All Inventories</button>
            </div>
        </div>

    );
};

export default Inventory;