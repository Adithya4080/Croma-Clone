import React from 'react'
import FooterLeft from './FooterLeft';
import FooterMiddle from './FooterMiddle';
import FooterRight from './FooterRight';

function Footer() {
    return (
        <div className='wrapper flex justify-between py-5'>
            <FooterLeft />
            <FooterMiddle />
            <FooterRight />
        </div>
    )
}

export default Footer