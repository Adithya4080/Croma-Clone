import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './components/mainPages/accessoriesPage/Accessories';
import HomePage from './components/mainPages/homePage/HomePage';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import React, { useState } from 'react';
import CartPage from './components/cart/CartPage';
import { Context } from './components/context/Context';

import { FilterContext } from './components/filter/FilterContext';
import Categories from './components/mainPages/accessoriesPage/filterOptions/filterLeft/Categories';

function App() {
    const [selectedCategories, setSelectedCategories] = useState([])

  return (
      <>
          <Context>
              <Router>                
                <FilterContext.Provider value={{selectedCategories, setSelectedCategories }}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/ctc'  element={<Categories />} />
                        <Route path='/accessories' element={<Accessories />} />
                        <Route path='/auth/create' element={<Signup />} />
                        <Route path='/auth/login' element={<Login />} />
                        <Route path='/cart' element={<CartPage />} />
                    </Routes>
                </FilterContext.Provider>
              </Router>
          </Context>
      </>
  );
}

export default App;