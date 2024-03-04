import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './components/mainPages/accessoriesPage/Accessories';
import HomePage from './components/mainPages/homePage/HomePage';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import CartPage from './components/cart/CartPage';
import { Context } from './components/context/Context';
import { FilterProvider } from './components/filter/FilterContext';
import NoMatch from './components/mainPages/error/NoMatch';
import ProductDetails from './components/mainPages/productPage/ProductDetails';
import Success from './components/payment/Success';
import Cancel from './components/payment/Cancel';

    function App() {

    return (
        <>
            <Context>
                <Router>                
                    <FilterProvider>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/accessories' element={<Accessories />} />
                            <Route path='/accessories/:id' element={<ProductDetails />} />
                            <Route path='/auth/create' element={<Signup />} />
                            <Route path='/auth/login' element={<Login />} />
                            <Route path='/cart' element={<CartPage />} />
                            <Route path='/success' element={<Success />} />
                            <Route path='/cancel' element={<Cancel />} />
                            <Route path='*' element={<NoMatch />} />
                        </Routes>
                    </FilterProvider>
                </Router>
            </Context>
        </>
    );
    }

    export default App;