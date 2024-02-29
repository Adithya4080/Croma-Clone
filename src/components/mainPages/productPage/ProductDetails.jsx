import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import accessories from '../../../data/accessories/Accessories.json';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/Navbar';
import { AiFillStar } from 'react-icons/ai';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Cart } from '../../context/Context';

function ProductDetails() {
    const { id } = useParams();
    const parseId = parseInt(id)
    const product = accessories.find(item => item.id === parseId);

    const { addToCart } = useContext(Cart)
    const addCart = (item) => {
        addToCart(item)
    }

    return (
        <>
        <Helmet>
            <title>Buy {product.title}</title>
        </Helmet>
        <Navbar />
        <div className='text-white wrapper'>
            <div className='flex mt-20'>
                <div className='w-5/12 p-8 bg-zinc-700 rounded-lg h-3/5'>
                    <img src={product.img} alt={product.name} className='p-7' />
                </div>
                <div className='ml-20'>
                    <h2 className=' text-2xl font-bold'>{product.title}</h2>
                    <div className='text-teal-500 flex items-center mr-1 mt-2'>
                        <p className='mr-1'>{product.rating}</p>
                        <p><AiFillStar /></p>
                        <p className='ml-1'>{product.review} Reviews & Ratings</p>
                    </div>
                    <div className='mt-4 border-b-2 border-stone-500'>
                        <h3 className='font-bold text-2xl mr-3'>₹{product.newPrice}</h3>
                        <small className='mb-1'>(Incl. all Taxes)</small>
                    </div>
                    <div className='flex mt-3'>
                        <del className='mr-2 text-sm'>{product.prevPrice}</del>
                        <small className='mr-2 text-gray-400'>{product.saving}</small>
                        <button className='border border-gray-700 rounded-sm text-xs px-1 font-semibold'>{product.discount}</button>
                    </div>
                    <div className='bg-gray-700 rounded-lg w-full p-2 my-2'>
                        <p className='flex items-center'><IoLocationSharp /> Delivery at: <Link to='' className='text-teal-500 underline ml-2'>Kasaragod 671315</Link></p>
                        <small className='text-xs'>Will be delivered by 4 March 2024.</small>
                    </div>
                    <div className='mt-3'>
                        <button onClick={() => {addCart(product)}} className='bg-teal-700 text-black rounded-lg py-1 px-36 hover:text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>            
        </div>
        </>
    );
}

export default ProductDetails