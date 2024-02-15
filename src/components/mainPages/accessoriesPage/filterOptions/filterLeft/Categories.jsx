import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const categories = [
  { id: 1, name: 'Mobile Cases & Covers', count: 1080 },
  { id: 2, name: 'Truly Wireless Earbuds', count: 714 },
  { id: 3, name: 'Bluetooth Earphones', count: 296 },
  { id: 4, name: 'USB Cables & Connectors', count: 241 },
  { id: 5, name: 'Tablet Covers, Cases & Sleeves', count: 208 },
  { id: 6, name: 'Mice', count: 190 },
  { id: 7, name: 'Power Banks', count: 177 },
  { id: 8, name: 'Wearable Device Straps/Belts', count: 176 },
  { id: 9, name: 'Bluetooth Headphones', count: 170},
  { id: 10, name: 'Earphones', count: 170},
  { id: 11, name: 'Laptop Bags', count: 152},
  { id: 12, name: 'KeyBoards', count: 102},
  { id: 13, name: 'Memory Cards', count: 68},
  { id: 14, name: 'Headphones', count: 66},
  { id: 15, name: 'Gaming Headset', count: 63},
  { id: 16, name: 'Mobile Accessories', count: 55}
];

function Categories() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  return (
    <div className='relative'>
      <div className='flex items-center mr-4 bg-slate-700 px-3 py-1 rounded-lg cursor-pointer'>
        <button className={`focus:outline-none ${isDropdownOpen ? 'text-teal-500' : ''}`} onClick={toggleDropdown}>
          Categories
        </button>
        <RiArrowDropDownLine className='text-xl' onClick={toggleDropdown} />
      </div>
      {isDropdownOpen && (
        <div className='absolute top-9 left-8 bg-slate-700 border-none cursor-pointer rounded-lg py-2 px-7 max-h-60 overflow-y-auto'>
          {categories.map((category) => (
            <div key={category.name} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className='h-5 w-5 checked:bg-teal-500'
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
              />
              <span className="ml-2 flex whitespace-nowrap uppercase">
                {`${category.name} (${category.count})`}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className='flex flex-wrap mt-2'>
        {selectedCategories.map((category) => (
          <div key={category} className='flex items-center bg-teal-500 text-white rounded-full px-2 py-1 m-1'>
            <span>{category}</span>
            <RiCloseCircleLine className='ml-2 cursor-pointer' onClick={() => removeCategory(category)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;



  
