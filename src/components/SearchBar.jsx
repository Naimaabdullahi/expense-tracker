import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by description or category"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)} // Calls parent function to update searchTerm
      />
    </div>
  );
}

export default SearchBar;
