import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import './AddItem.css';


const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const url = `http://localhost:5000/fruit`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Product added');
            })

    }



    return (
        <div className='w-25 mx-auto my-5 add-item-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Supplier Name'  {...register("supplierName", { required: true, maxLength: 20 })} />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' {...register("description")} ></textarea>
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder='Quantity' {...register("quantity")} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder='Price' {...register("price")} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Photo URL' {...register("img")} />
                </div>
                <button type="submit" className="item-add-button mb-2">Add Item</button>
            </form>
            <ToastContainer />
        </div>

    );
};

export default AddItem;
