import React from 'react';

const Logo = () => {
    const imageUrl = 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg';
  return (
    <div className='cursor-pointer'>
        <img src={ imageUrl } alt='Logo' />
    </div>
  )
}

export default Logo