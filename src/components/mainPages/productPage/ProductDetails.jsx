import React from 'react';
import { useParams } from 'react-router-dom';
import accessories from '../../../data/accessories/Accessories.json'
import Navbar from '../../navbar/Navbar';

function ProductDetails() {
    const { id } = useParams();
    const parseId = parseInt(id)
    const product = accessories.find(item => item.id === parseId);

    return (
        <>
        <Navbar />
        <div className='text-white'>
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.name} />
        </div>
        </>
    );
}

export default ProductDetails