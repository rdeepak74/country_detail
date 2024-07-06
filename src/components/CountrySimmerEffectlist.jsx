import React from 'react'
import './CountrySimmerEffectlist.css'
export default function CountrySimmerEffectlist() {

    const count = Array.from({length:10});
  return (
    <div className='countries-container'>
        {count.map((item, index) => <div key={index} className='country-card simmmer-card'></div>)}
        
    </div>
  )
}
