import React, { useState } from 'react';

export const SearchBox = ({ placeholder, handleChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    handleChange(value); // Passes the search query back to parent component
  };

  return (
    <input
      type="search"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      placeholder="Search..."
      value={searchValue}
      onChange={handleChangeInput}
    />
  );
};