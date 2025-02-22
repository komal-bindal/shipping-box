import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./index.css";

const Search = ({ onChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="search-box">
      <SearchIcon></SearchIcon>
      <input
        className="search-input"
        name="search"
        value={searchText}
        type="text"
        placeholder="Search"
        onChange={(event) => handleChange(event)}
      ></input>
    </div>
  );
};

export default Search;
