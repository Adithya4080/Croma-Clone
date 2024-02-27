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
    import Categories from './components/mainPages/accessoriesPage/filterOptions/filterLeft/Categories';

    function App() {

    return (
        <>
            <Context>
                <Router>                
                    <FilterProvider>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/ctc'  element={<Categories />} />
                            <Route path='/accessories' element={<Accessories />} />
                            <Route path='/auth/create' element={<Signup />} />
                            <Route path='/auth/login' element={<Login />} />
                            <Route path='/cart' element={<CartPage />} />
                        </Routes>
                    </FilterProvider>
                </Router>
            </Context>
        </>
    );
    }

    export default App;