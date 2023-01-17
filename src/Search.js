import React from "react";

function Search({ search, setSearch }) {
  function handleSearch(event){
    setSearch(event.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        onChange={handleSearch}
      />
      <br />
      <button type="button">Search</button>
    </div>
  );
}

export default Search;