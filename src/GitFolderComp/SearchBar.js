import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div>
      <form action="">
        <input type="text" value={keyword} />
      </form>
    </div>
  );
};

export default SearchBar;
