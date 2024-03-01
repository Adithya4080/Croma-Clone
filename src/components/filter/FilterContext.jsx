// import React from 'react'

// export const FilterContext = React.createContext();

// FilterContext.js
import React, {useState} from 'react';

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [selectedModes, setSelectedModes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleRangeChange = (range) => {
    setSelectedRanges((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
  };

  const removeRange = (range) => {
    setSelectedRanges((prev) => prev.filter((r) => r !== range));
  };

  const handleModeChange = (mode) => {
    setSelectedModes((prev) =>
      prev.includes(mode)
        ? prev.filter((m) => m !== mode)
        : [...prev, mode]
    );
  };

  const removeMode = (mode) => {
    setSelectedModes((prev) => prev.filter((m) => m !== mode));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  }

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        selectedBrands,
        selectedRanges,
        selectedModes,
        searchTerm,
        handleCategoryChange,
        handleBrandChange,
        handleRangeChange,
        handleModeChange,
        handleSearchChange,
        removeCategory,
        removeBrand,
        removeRange,
        removeMode,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
