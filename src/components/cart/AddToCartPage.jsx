import React, { useEffect, useContext } from 'react';

import { AiFillStar } from 'react-icons/ai';
import { Cart } from '../context/Context';


const AddToCartPage = ({ items }) => {
    const { removeFromCart } = useContext(Cart);

    const handleRemove = () => {
        removeFromCart(items);
    }
    useEffect(() => {
        document.body.classList.add('white-bg');
    }, []);
    return (
        <div>
            <div className='wrapper'>
                <div className='bg-white my-10 p-2 flex '>
                    <div className='w-1/4'>
                        <img src={items.img} alt={items.name} />
                    </div>
                    <div className='mr-56 ml-10'>
                        <p className='title'>{items.title}</p>
                        <p className='my-4 flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                        <p className='text-sm'>{items.delivery}</p>
                        <p className='text-sm'>24 February 2024 |</p>
                        <p className='text-sm'>Free</p>
                        <div className='my-2 flex'>
                            <button className='border border-black font-bold rounded-lg mr-3 py-1 px-4 whitespace-nowrap hover:bg-teal-500 hover:text-white'>Move to Wishlist</button>
                            <button onClick={() => {handleRemove(items)}} className='border border-black font-bold rounded-lg py-1 px-4 hover:bg-teal-500 hover:text-white'>Remove</button>
                        </div>
                    </div>
                    <div className='text-right'>
                        <p className='font-bold text-2xl'>₹{items.newPrice}</p>
                        <p className='underline underline-offset-8 mb-5 whitespace-nowrap text-base'>(Incl. all Taxes)</p>
                        <del className='font-bold text-2xl'>{items.prevPrice}</del>
                        <p className='text-slate-500 text-sm underline underline-offset-8'>{items.saving}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCartPage