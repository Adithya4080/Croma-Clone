
import React, { useContext, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import accessories from '../../../../data/accessories/Accessories.json';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { AiFillStar } from 'react-icons/ai';
import { Cart } from '../../../context/Context';
import { FilterContext } from '../../../filter/FilterContext';
import { Link } from 'react-router-dom';

function AccessoriesPage() {
    const [itemsToShow, setItemsToShow] = useState(9);
    const { addToCart, cartItems } = useContext(Cart);
    
    const addCart = (item) => {
        addToCart(item)
    }

    const isItemInCart = (itemId) => {
        return cartItems && cartItems.some((cartItem) => cartItem.id === itemId)
    }

    const { selectedCategories, selectedBrands, selectedRanges, selectedModes, searchTerm } = useContext(FilterContext)
    // const filteredAccessories = accessories.filter(item => selectedCategories.length === 0 || selectedCategories.includes(item.category));
    const filteredAccessories = accessories.filter(item =>
        (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
        (selectedRanges.length === 0 || selectedRanges.includes(item.range)) &&
        (selectedModes.length === 0 || selectedModes.includes(item.delivery)) &&
        (searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const showMoreItems = () => {
        setItemsToShow(itemsToShow + 6)
    }

    return (
        <div className='wrapper mt-10 'style={{ marginTop: '60px' }}>
            <div className='grid grid-cols-3 gap-4'>
                {filteredAccessories.slice(0, itemsToShow).map((items) => (
                    <div key={items.id} className='mb-10'>
                        <div >
                        <LazyLoad className='bg-zinc-700 rounded-lg w-10/12 h-3/5'  threshold={0.95}>
                            <img src={items.img} alt={items.name} className='p-14' loading='lazy' />
                        </LazyLoad>
                        </div>
                        <div>
                            <Link key={items.id} to={`/accessories/${items.id}`}><h2 className='title mt-5 font-bold'>{items.title}</h2></Link>
                        </div>
                        <div className='flex mr-1 mb-2'>
                            <div className='text-teal-500 flex items-center mr-1'>
                                <p className='mr-1'>{items.rating}</p>
                                <p><AiFillStar /></p>
                            </div>
                            <p>{items.review}</p>
                        </div>
                        <div className='flex items-center mb-3'>
                            <h3 className='font-bold text-2xl mr-3'>₹{items.newPrice}</h3>
                            <del className='mr-2 text-sm'>{items.prevPrice}</del>
                            <small className='mr-2 text-gray-400'>{items.saving}</small>
                            <button className='border border-gray-700 rounded-sm text-xs px-1 font-semibold'>{items.discount}</button>
                        </div>
                        <div className='flex items-center'>
                            <FaScrewdriverWrench />
                            <p className='ml-2 text-sm'>{items.delivery}</p>
                        </div>
                        <div className='mt-3'>
                            {isItemInCart(items.id) ?(
                                <Link to="/cart">
                                    <button className='bg-teal-500 text-black rounded-lg py-1 px-3 hover:text-white'>
                                        Item added Go to Cart
                                    </button>
                                </Link>
                            ):(
                                <button onClick={() => {addCart(items)}} className='bg-teal-500 text-black rounded-lg py-1 px-3 hover:text-white'>Add to Cart</button>
                            )}
                            
                        </div>
                    </div>
                ))}
            </div>
                {itemsToShow < filteredAccessories.length &&(
                    <div className='flex justify-center items-center'>
                        <button onClick={showMoreItems} className='text-white border border-white bg-teal-800 px-20 rounded-lg py-2'>
                            View More
                        </button>
                    </div>
                )}
        </div>
    )
}

export default AccessoriesPage