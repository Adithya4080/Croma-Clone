import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './components/mainPages/accessoriesPage/Accessories';
import HomePage from './components/mainPages/homePage/HomePage';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import CartPage from './components/cart/CartPage';
import { Context } from './components/context/Context';

// export const UserContext = React.createContext();
// const stripePromise = loadStripe('pk_test_51OmSv7SIMoZdtIVGwp3YpB2qa4SB4kKIkTgckHdzjbZMavTqYFGpG0OjUN1Gf53Kxudh8rnwZtze8zLnnYCdKTut00I2qUIzoe')

function App() {

  return (
      <>
          <Context>
          {/* <Elements stripe={stripePromise}> */}
              <Router>
                  <Routes>
                      <Route path='/' element={<HomePage />} />
                      <Route path='/accessories' element={<Accessories />} />
                      <Route path='/auth/create' element={<Signup />} />
                      <Route path='/auth/login' element={<Login />} />
                      <Route path='/cart' element={<CartPage />} />
                  </Routes>
              </Router>
            {/* </Elements> */}
          </Context>
      </>
  );
}

export default App;