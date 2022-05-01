import React from 'react';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import DisplayProductsDetails from '../DisplayProductsDetails/DisplayProductsDetails';
import './DisplayProducts.css';


const DisplayProducts = () => {
    const [displayProducts, setDisplayProducts] = useDisplayProducts();

    if (displayProducts.length) {
        displayProducts.length = 6;
    }


    return (
        <div className='my-5 display-products container'>
            <h2 className='text-center mb-5'>Inventory Section</h2>
            <div className='display-products-container'>
                {
                    displayProducts.map(displayProduct => <DisplayProductsDetails
                        key={displayProduct.id}
                        displayProduct={displayProduct}
                    ></DisplayProductsDetails>)
                }
            </div>
        </div>
    );
};

export default DisplayProducts;