import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import { CiPercent } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";


function AddToCartPage() {
    useEffect(() => {
        document.body.classList.add('white-bg');
        return () => {
          document.body.classList.remove('white-bg');
        };
    }, []);
    return (
        <div>
            <Navbar />
            <div className='wrapper'>
                <h2 className='font-bold uppercase mt-10'>Your Cart</h2>
                <div className='bg-white flex justify-between items-center mt-12 py-6 w-8/12 rounded-sm'>
                    <div className='flex items-center ml-10'>
                        <CiPercent className='text-2xl mr-4' />
                        <h2 className='font-bold text-3xl'>Apply Coupon</h2>
                    </div>
                    <MdArrowForwardIos className='mr-10' />
                </div>
                <div>
                    <div>
                        img
                    </div>
                    <div>
                        <p>title</p>
                        <p>icon</p>
                        <p>delivery</p>
                        <p>date</p>
                        <p>free</p>
                        <div>
                            <button>move to wishlist</button>
                            <button>remove</button>
                        </div>
                    </div>
                    <div>
                        <p>newprice</p>
                        <p>(Incl. all Taxes)</p>
                        underline
                        <p>oldprice</p>
                        <p>save</p>
                        underline
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCartPage