import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountrySimmerEffectlist from './CountrySimmerEffectlist'
import { useFilter } from '../hooks/useFilter'
function CountryList({ query }) {
  // const filterdata=countryData.filter((country)=>country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query));
  // const filterdata=countryData.filter((country)=>country.region.toLowerCase().includes(querySelect));
  // console.log(filterdata);
  const [countryData, setCountryData] = useState([])
  // const [filterdata, setFilterData] = useFilter(countryData, () => {})

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountryData(data)
      })
  }, [])

  const filterdata = countryData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query) ||
      country.region.toLowerCase().includes(query)
  )

  return (
    <>
      {filterdata.length === 0 ? (
        <CountrySimmerEffectlist />
      ) : (
        <div className="countries-container">
          {filterdata.map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
              data={country}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CountryList
