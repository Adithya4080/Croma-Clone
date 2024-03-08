import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

function Cancel() {
  useEffect(() => {
    document.body.classList.add('red-bg');
    return () => {
      document.body.classList.remove('red-bg');
    };
  }, []);
  const currentDate = new Date()
  const formattedDateTime = currentDate.toLocaleString()
  return (
    <>
      <Helmet>
        <title>Failed! Transaction Failed | Croma</title>
      </Helmet>
      <Navbar />
      <div className='my-7'>
        <div className='flex justify-center text-center'>
          <div className='w-4/12'>
            <img src="https://tppr.s3.eu-central-1.amazonaws.com/uploads/e46108d03ece178ea8b977aa068e7471.gif" alt="Payment GIF" />            
          </div>
        </div>
        <div className='text-center text-white'>
          <h2 className='text-2xl font-bold mb-2'>Payment Failed!</h2>
          <p>We were Unable to process your request.</p>
          <p>Please Try Again.</p>
          <p className='text-xm mt-10 text-gray-800'>Payment ID: 123456, {formattedDateTime}</p>
          <div className='text-yellow-400 underline text-xl'>
            <Link to='/cart'><small className='mr-4'>Back to Cart</small></Link>
            <Link to='/'><small>Go Home</small></Link>
          </div>          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cancel