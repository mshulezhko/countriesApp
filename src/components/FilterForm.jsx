import React from "react";
import { FaSearch } from "react-icons/fa";

const FilterForm = ({setFilterRegion, search,searchName}) => {
  
  return (
    <div className="form-wrap">
      <form className="form">
        <button disabled={true}  className="search-country-btn">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Search for a country ..."
          className="search-country-input"
          value={searchName}
          onChange={(e)=>search(e.target.value)}
        />
      </form>
      <div className="region-filter">
        <select onChange={(e)=> setFilterRegion(e.target.value)} name="select" id="select" className="select">
            <option value='no_filter'>Filter by region</option>
            <option value="america">America</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europa</option>
            <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default FilterForm;
