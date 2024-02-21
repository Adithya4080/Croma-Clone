import React, { useContext } from 'react';
import { BiSolidCart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Cart } from '../context/Context';

function Carticon() {
    const {products} = useContext(Cart)
    return (
        <Link to='/cart'>
            <div className='text-2xl cursor-pointer'>
                <BiSolidCart />
                <span className="text-sm absolute top-4 ml-3 bg-teal-500 text-black px-1 rounded-lg  text-center">{products.length}</span>
            </div>
        </Link>
    )
}

export default Carticon