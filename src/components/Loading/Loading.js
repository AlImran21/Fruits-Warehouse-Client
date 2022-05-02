import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '450px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;