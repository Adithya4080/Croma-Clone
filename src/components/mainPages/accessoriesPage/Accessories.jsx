import React from 'react'
import Navbar from '../../navbar/Navbar';
import { Helmet } from 'react-helmet';
import FilterOptions from './filterOptions/FilterOptions';
import AccessoriesPage from './accessories/AccessoriesPage';
import Newsletter from '../../footer/Newsletter';
import Footer from '../../footer/Footer';

function Accessories() {
  return (
    <div>
        <Helmet>
            <title>Accessories | Croma</title>
        </Helmet>
        <Navbar />
        <div className='wrapper text-white'>
            <div className='mt-10'>
                <h3 className='font-bold'>Accessories</h3>
                <h2 className='font-bold text-2xl'>Accessories(2024)</h2>
            </div>
            <FilterOptions  />
            <AccessoriesPage />
            <Newsletter />            
        </div>
        <Footer />
    </div>
  )
}

export default Accessories