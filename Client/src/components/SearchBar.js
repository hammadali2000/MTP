import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
  console.log(keyword);
  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
    margin: '20px',
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={'Enter the Product'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
