import React from 'react'

const CountryCard = ({name,population, region, capital, flags }) => {
  return (
    <div className='country-card'>
      <img src={flags} alt="name" />
      <div className='country-card-info'>
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>

      </div>
      
    </div>
  )
}

export default CountryCard
