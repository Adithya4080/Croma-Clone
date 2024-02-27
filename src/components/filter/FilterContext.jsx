// import React from 'react'

// export const FilterContext = React.createContext();

// FilterContext.js
import React from 'react';

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [selectedRanges, setSelectedRanges] = React.useState([]);
  const [selectedModes, setSelectedModes] = React.useState([]);

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

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        selectedBrands,
        selectedRanges,
        selectedModes,
        handleCategoryChange,
        handleBrandChange,
        handleRangeChange,
        handleModeChange,
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
