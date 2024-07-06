import { useContext, useState } from 'react'
import CountryList from './CountryList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountryData from '../data'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  // const isDark = useOutletContext()
  // console.log(useOutletContext())
  // const [isDark] = useContext(ThemeContext)
  const [isDark] = useTheme()
  return (
    <>
      <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuerySelect={setQuery} />
        </div>
        <CountryList countryData={CountryData} query={query} />
      </main>
    </>
  )
}
