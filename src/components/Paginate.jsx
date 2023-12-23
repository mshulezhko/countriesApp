import React from "react";

const Paginate = ({
  paginate,
  countriesPerPage,
  totalCountries,
  previousPage,
  nextPage,
}) => {
  const pagesNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pagesNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          Prev
        </li>

        {pagesNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className="page-number"
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
