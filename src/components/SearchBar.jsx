import React from 'react'

function SearchBar({setQuery}) {


  const search = (e)=>{
    setQuery(e.target.value.toLowerCase());
  }

  return (
    <> 
    <div className="search-container">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input onChange={search} type="text" placeholder="Search for a country name..."/>
  </div></>
  )
}

export default SearchBar