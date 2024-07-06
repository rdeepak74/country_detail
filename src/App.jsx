import { useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'

// console.log(CountryData);
function App() {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem('isDarkMode'))
  // )
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
