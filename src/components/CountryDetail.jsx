import React, { useContext, useEffect, useState } from 'react'
import './CountryDetail.css'
import {
  Link,
  useLocation,
  useOutletContext,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import CountryDetailSimmerEffect from './CountryDetailSimmerEffect'
import { ThemeContext } from '../contexts/ThemeContext'
export default function CountryDetail() {
  // const params = new URLSearchParams(location.search).get('name') ;
  //    const [params]= useSearchParams();
  const paramas1 = useParams()
  const params = paramas1.country
  const [notfound, setNotfound] = useState(false)
  const [countryDetail, setCountryDetail] = useState(null)
  const { state } = useLocation()
  // const isDark = useOutletContext()
  const [isDark] = useContext(ThemeContext)
  // console.log(state);
  // console.log(countryDetail);

  function updateCountryDetails(data) {
    // console.log(data);
    setCountryDetail({
      name: data.name.common,
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      toplevedomain: data.tld.join(', '),
      currencies: Object.values(data.currencies)
        .map((currencie) => currencie.name)
        .join(', '),
      languages: Object.values(data.languages).join(', '),
      borders: [],
    })

    if (!data.borders) {
      data.borders = []
    }

    // data.borders.map((border)=>{
    //   // console.log("2");
    //   fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    //   .then((res)=>(res.json(1)))
    //   .then(([data])=>{
    //     // setCountryDetail((prev)=>({...prev,borders:[...prev.borders,data.name.common]}
    //     setCountryDetail((prev)=>({...prev,borders:[...prev.borders,data.name.common ]}))
    //   })
    // })

    // console.log(data.borders.map((border)=>{
    //   return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    //    .then((res)=>res.json())
    //    .then(([bordercountry])=>bordercountry.name.common)
    //  }));

    Promise.all(
      data.borders.map((border) => {
        // console.log("2");
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([bordercountry]) => bordercountry.name.common)
      })
    ).then((borders) => {
      setTimeout(() => {
        setCountryDetail((prev) => ({ ...prev, borders }))
      })
    })
  }

  useEffect(() => {
    // console.log("hi");

    if (state) {
      updateCountryDetails(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${params}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryDetails(data)
      })
      .catch((err) => {
        // console.log(err);
        setNotfound(true)
      })
  }, [params])

  if (notfound) {
    return <h1>Page Not Found</h1>
  }

  return countryDetail === null ? (
    <CountryDetailSimmerEffect />
  ) : (
    <>
      <div className={`country-detail ${isDark ? 'dark' : ' '}`}>
        <main className={` ${isDark ? 'dark' : ' '}`}>
          <div className="country-details-container">
            <Link to={'/'}>
              <span className="back-button">
                <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
              </span>
            </Link>
            <div className="country-details">
              <img
                src={countryDetail.flag}
                alt={`${countryDetail.name} flag`}
              />
              <div className="details-text-container">
                <h1>{countryDetail.name}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: {countryDetail.nativeName}</b>
                    <span className="native-name"></span>
                  </p>
                  <p>
                    <b>
                      Population:{' '}
                      {countryDetail.population.toLocaleString('en-IN')}
                    </b>
                    <span className="population"></span>
                  </p>
                  <p>
                    <b>Region: {countryDetail.region}</b>
                    <span className="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {countryDetail.subregion}</b>
                    <span className="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {countryDetail.capital}</b>
                    <span className="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {countryDetail.toplevedomain}</b>
                    <span className="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currencies: {countryDetail.currencies}</b>
                    <span className="currencies"></span>
                  </p>
                  <p>
                    <b>Languages: {countryDetail.languages}</b>
                    <span className="languages"></span>
                  </p>
                </div>
                {countryDetail.borders.length > 0 && (
                  <div className="border-countries">
                    <b>
                      Border Countries:{' '}
                      {countryDetail.borders.map((border, index) => (
                        <Link key={index} to={`/country/${border}`}>
                          {border}
                        </Link>
                      ))}{' '}
                    </b>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
