import React, { useContext, useState } from 'react';
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";
import { FilterContext } from '../../../../filter/FilterContext';

const brands = [
  { id: 1, name: 'Noise', count: 221 },
  { id: 2, name: 'Nothing', count: 173 },
  { id: 3, name: 'Apple', count: 157 },
  { id: 4, name: 'Ambrane', count: 56 },
  { id: 5, name: 'Xiaomi', count: 18 },
  { id: 6, name: 'Croma', count: 9 },
  { id: 7, name: 'Sennheiser', count: 9 },
  { id: 8, name: 'Sony', count: 6 },
  { id: 9, name: 'Oneplus', count: 3 },
  { id: 10, name: 'Sandisk', count: 2 },
  { id: 11, name: 'Realme', count: 2 },
  { id: 12, name: 'Philips', count: 2 },
  { id: 13, name: 'Dell', count: 2 },
  { id: 14, name: 'Bose', count: 2 },
  { id: 15, name: 'Soundrevo', count: 2 },
  { id: 16, name: 'Boult', count: 2 },
  { id: 17, name: 'Asus', count: 2 }
];

function Brands() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const {selectedBrands, handleBrandChange, removeBrand} = useContext(FilterContext);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className='relative'>
      <div className='flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer'>
        <button className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`} onClick={toggleDropdown}>
          Brands
        </button>
        <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className='custom-scrollbar absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
          {brands.map((brand) => (
            <div key={brand.name} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className='form-checkbox h-5 w-5 checked:bg-teal-500'
                checked={selectedBrands.includes(brand.name)}
                onChange={() => handleBrandChange(brand.name)}
              />
              <span className="ml-2 flex whitespace-nowrap uppercase">
                {`${brand.name} (${brand.count})`}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='flex flex-wrap mt-2'>
        {selectedBrands.map((brand) => (
          <div key={brand} className='flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1'>
            <span>{brand}</span>
            <RiCloseCircleLine className='ml-2 cursor-pointer' onClick={() => removeBrand(brand)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;