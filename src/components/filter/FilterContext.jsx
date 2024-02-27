// import React from 'react'

// export const FilterContext = React.createContext();

// FilterContext.js
import React from 'react';

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedBrands, setSelectedBrands] = React.useState([]);

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

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };
  const removeBrand = (brand) => {
    setSelectedBrands((prev) => prev.filter((b) => b !== brand));
  };


  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        selectedBrands,
        handleCategoryChange,
        handleBrandChange,
        removeCategory,
        removeBrand
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
