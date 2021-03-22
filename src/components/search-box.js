import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (

    <header>
      <form >
        <input
          type="search"
          className="search"
          placeholder="Search for movies..."
          value={searchfield}
          onChange={searchChange}
        />
        <input title="Search" value="" type="submit" class="button" onChange={searchChange} />
      </form>
    </header>


  )
};

export default SearchBox;
