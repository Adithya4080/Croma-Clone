import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

function Success() {
  useEffect(() => {
    document.body.classList.add('whites-bg');
    return () => {
      document.body.classList.remove('whites-bg');
    };
  }, []);
  const currentDate = new Date()
  const formattedDateTime = currentDate.toLocaleString()

  return (
    <>
      <Helmet>
        <title>Success | Payment Successful | Croma</title>
      </Helmet>
      <Navbar />
      <div className='my-7'>
        <div className='flex justify-center text-center'>
          <div className='w-4/12'>
            <img src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" alt="Payment GIF" />            
          </div>
        </div>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-2'>Payment Succesfull!</h2>
          <p>The Payment has been done succesfully.</p>
          <p>Thanks for being here with us.</p>
          <p className='text-xm mt-10 text-gray-500'>Payment ID: 123456, {formattedDateTime}</p>
          <div className='text-teal-500 underline text-xl'>
            <Link to='/accessories'><small className='mr-4'>Continue Shopping</small></Link>
            <Link to='/'><small>Go Home</small></Link>
          </div>          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Success