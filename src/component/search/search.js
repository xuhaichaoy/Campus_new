import React from "react";
import { SearchBar  } from 'antd-mobile';
import "./search.css";

function Search() {
    return <SearchBar placeholder="Search" maxLength={8} className="topSearch"/>
}
  
export default Search