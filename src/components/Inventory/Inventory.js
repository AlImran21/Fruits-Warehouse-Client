import React from 'react';
import { useParams } from 'react-router-dom';
import useDisplayProducts from '../../hooks/useDisplayProducts';
import './Inventory.css';

const Inventory = () => {
    const { productId } = useParams();


    return (
        <div>
            <h2>Welcome to detail: {productId}</h2>
        </div>
    );
};

export default Inventory;