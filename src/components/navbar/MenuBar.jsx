import React from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2'

function MenuBar() {
    return (
        <div className='flex items-center cursor-pointer'>
            <HiOutlineBars3 className='text-3xl mr-1'/>
            <small>Menu</small>
        </div>
    )
}

export default MenuBar