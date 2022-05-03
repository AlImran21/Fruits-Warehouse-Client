import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import './ManageItems.css';

const ManageItems = () => {
    const [displayProducts, setDisplayProducts] = useDisplayProducts();
    const navigate = useNavigate();

    const handleAddItemButton = () => {
        navigate('/addItem');
    }

    return (
        <div className=''>
            <div className='container my-5'>
                <div className='display-products-container'>
                    {
                        displayProducts.map(displayProduct => <div key={displayProduct?._id} className="product">
                            <div className='image-container'>
                                <img src={displayProduct?.img} className="product-image" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{displayProduct?.name}</h5>
                                <h6 className="card-title">Supplier: {displayProduct?.supplierName}</h6>
                                <p
                                    className='text-muted'>
                                    <small>{displayProduct?.description?.length < 100 ? displayProduct?.description?.length : displayProduct?.description?.slice(0, 100)}
                                    </small>
                                    ...
                                </p>
                                <h6 className="card-title">Quantity: {displayProduct?.quantity}</h6>
                                <h6 className="card-title mb-3">Price: {displayProduct?.price}</h6>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className='add-button-container'>
                    <button onClick={handleAddItemButton} className='add-item-button my-5'>Add New Item</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;