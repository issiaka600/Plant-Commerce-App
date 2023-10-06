import React from 'react'
import './banner_style.css'
function Banner() {
  return (
    <div className='banner-container'>
        <div className='banner-element'>
            <img src={require('../../assets/logo.png')} alt='logo' />
        </div>
        <div className='banner-element'>
            <h2>La maison jungle</h2>
        </div>
    </div>
  )
}

export default Banner