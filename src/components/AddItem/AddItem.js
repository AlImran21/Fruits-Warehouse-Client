import React from 'react';
import './AddItem.css';


const AddItem = () => {

    const handleAddItemForm = (event) => {
        event.preventDefault();
        const productName = event.target.name.value;
        const supplier = event.target.supplierName.value;
        const productDescription = event.target.description.value;
        const productQuantity = event.target.quantity.value;
        const productPrice = event.target.price.value;
        const photoUrl = event.target.img.value;
        console.log(productName, supplier, productDescription, productQuantity, productPrice, photoUrl);

        event.target.reset();
    }

    return (
        <div className='w-25 mx-auto my-5 add-item-container'>
            <form onSubmit={handleAddItemForm}>
                <div className="mb-3">
                    <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Product Name' />
                </div>
                <div className="mb-3">
                    <input type="text" name='supplierName' className="form-control" id="exampleInputPassword1" placeholder='Supplier Name' />
                </div>
                <div className="mb-3">
                    <input type="text" name='description' className="form-control" id="exampleInputPassword1" placeholder='Description' />
                </div>
                <div className="mb-3">
                    <input type="number" name='quantity' className="form-control" id="exampleInputPassword1" placeholder='Quantity' />
                </div>
                <div className="mb-3">
                    <input type="number" name='price' className="form-control" id="exampleInputPassword1" placeholder='Price' />
                </div>
                <div className="mb-3">
                    <input type="text" name='img' className="form-control" id="exampleInputPassword1" placeholder='Photo URL' />
                </div>
                <button type="submit" className="item-add-button mb-5">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;