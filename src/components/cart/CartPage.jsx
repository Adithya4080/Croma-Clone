import Navbar from '../navbar/Navbar';
import { Helmet } from 'react-helmet';
import React, { useContext, useEffect, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CiPercent } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { Cart } from '../context/Context';
import AddToCartPage from './AddToCartPage';
import {loadStripe} from '@stripe/stripe-js';
import StripeCheckoutButton from './StripeCheckout';

function CartPage() {
  useEffect(() => {
    document.body.classList.add('white-bg');
    return () => {
      document.body.classList.remove('white-bg');
    };
  }, []);

  const { total, products } = useContext(Cart);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleCheckoutClick = () => {
    setShowPaymentForm(true);
  }

  // const makePayment = async()=>{
  //   const stripe = await loadStripe("pk_test_51OmSv7SIMoZdtIVGwp3YpB2qa4SB4kKIkTgckHdzjbZMavTqYFGpG0OjUN1Gf53Kxudh8rnwZtze8zLnnYCdKTut00I2qUIzoe");

  //   const body = {
  //     products: products
  //   }
  //   const headers = {
  //     "Content-Type":"application/json"
  //   }
  //   const response = await fetch("http://localhost:6000/api/create-checkour-session",{
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body)
  //   });

  //   const session = await response.json();
    
  //   const result = stripe.redirectToCheckout({
  //     sessionId:session.id
  //   })

  //   if(result.error){
  //     console.log(result.error);
  //   }
  // }

    return (
      <>
      <Helmet>
        <title>Cart | Croma</title>
      </Helmet>
        <div>
            <Navbar />
            <div className='wrapper w-full'>
              <h2 className='font-bold uppercase mt-10'>Your Cart</h2>
              {products.length === 0 ? <div className='flex justify-center items-center  my-20'>
                  <div>
                      <IoCartOutline className='text-9xl'/>
                      <p className='font-bold my-4'>Your Cart is Empty</p>
                      <Link to='/accessories' className='text-teal-500 underline'>continue shopping</Link>
                  </div>
              </div>:
              <div>
                  <div className='flex justify-between mt-12'>
                    <div className='w-8/12'>
                        <div className='bg-white flex justify-between items-center  py-6 rounded-sm'>
                            <div className='flex items-center ml-10'>
                                <CiPercent className='text-2xl mr-4' />
                                <h2 className='font-bold text-3xl'>Apply Coupon</h2>
                            </div>
                            <MdArrowForwardIos className='mr-10' />
                        </div>
                        <div>
                        {products.map((items,index)=>
                            <AddToCartPage
                                key={index}
                                items={items}
                            />
                        )}
                        </div>                        
                    </div>
                    <div className='bg-white px-4 py-3 h-56 w-3/12'>
                        <h3 className='mb-3 font-bold text-xl'>Order Summary ({products.length} items)</h3>
                        <div className='flex justify-between my-4'>
                            <p>Original Price:</p>
                            <p>₹{total.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between my-4'>
                            <p>Total:</p>
                            <p>₹{total.toFixed(2)}</p>
                        </div>
                        <button onClick={handleCheckoutClick} className='bg-teal-500 px-20 py-2 rounded-lg cursor-pointer mb-1'>Checkout</button>
                        {showPaymentForm && <StripeCheckoutButton price={total} clearCart={() => setShowPaymentForm(false)} />}
                    </div>
                  </div>
              </div>
              }
            </div>
            <Footer />
        </div>
      </>
    )
  }

export default CartPage