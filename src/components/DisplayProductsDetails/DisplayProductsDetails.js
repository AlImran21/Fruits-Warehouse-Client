import React from 'react';
import './DisplayProductsDetails.css';


const DisplayProductsDetails = ({ displayProduct }) => {
    const { img, name, supplierName, quantity, description, price } = displayProduct;

    return (
        <div className="product">
            <div className='image-container'>
                <img src={img} className="product-image" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-title">Supplier: {supplierName}</h6>
                <p
                    className='text-muted'>
                    <small>{description.length < 100 ? description.length : description.slice(0, 100)}
                    </small>
                    ...
                </p>
                <h6 className="card-title">Quantity: {quantity}</h6>
                <h6 className="card-title mb-3">Price: {price}</h6>
                <button className="update-button">Update</button>
            </div>
        </div>
    );
};

export default DisplayProductsDetails;
