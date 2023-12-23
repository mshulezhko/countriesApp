import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import FilterForm from "./FilterForm";
import fetchData from "./api/fetchData";
import Paginate from "./Paginate";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [originDataCountries, setOriginData] = useState([]);
  const [region, setRegin] = useState("");
  const [searchName, setSearchName] = useState("");
  const urlFilter = `https://restcountries.com/v3.1/region/${region}`;
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 30;

  const indexOfLastPage = currentPage * countriesPerPage;
  const indexOfFirstPage = indexOfLastPage - countriesPerPage;
  const currentCountries = countries?.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    if (!region || (region === 'no_filter')) {
      fetchData(url).then((data) => {
        setCountries(data);
        setOriginData(data);
      });
    }

    if (region && (region !== 'no_filter') ) {
      fetchData(urlFilter).then((data) => setCountries(data));
    }
  }, [region, urlFilter]);

  const setFilterRegion = (region) => {
    setRegin(region);
  };

  const search = (input) => {
    setSearchName(input);
    if (!input) {
      setCountries(originDataCountries);
    } else {
      setCountries(
        countries.filter((country) =>
          country.name.official.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(countries.length / countriesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <FilterForm
        searchName={searchName}
        search={search}
        setFilterRegion={setFilterRegion}
      />
      <div className="grid">
        {currentCountries?.map((country, id) => (
          <Link key={id} to={`/country/${country.name.official}`}>
            <CountryCard
              name={country.name.official}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flags={country.flags.svg}
            />
          </Link>
        ))}
      </div>

      {countries.length > 0 && (
        <Paginate
          previousPage={previousPage}
          nextPage={nextPage}
          paginate={paginate}
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
        />
      )}
    </>
  );
};

export default Countries;
