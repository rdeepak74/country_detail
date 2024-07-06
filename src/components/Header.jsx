import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'

function Header({ theme }) {
  // console.log(theme)
  // const [isDark, setIsDark] = theme
  // const [isDark, setIsDark] = useContext(ThemeContext)
  const [isDark, setIsDark] = useTheme()

  // if (isDark) {
  //   document.body.classList.add('dark')
  // } else {
  //   document.body.classList.remove('dark')
  // }
  // console.log(isDark)
  // console.log()
  return (
    <>
      <header className={`header-container ${isDark ? 'dark' : ''}`}>
        <div className="header-content">
          <h2 className="title">
            <Link to="/">Where in the world?</Link>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              setIsDark(!isDark)
              localStorage.setItem('isDarkMode', !isDark)
            }}
          >
            <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>
            &nbsp;&nbsp;
            {isDark ? 'Light' : 'Dark'} Mode
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
