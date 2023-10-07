import React from 'react'
import './plantitem_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import CareScale from './CareScale'
import { MONEY_SYMBOL } from '../../constants/MoneySymbol'



function PlantItem({plant}) {
  let waters = []
  for (let index = 0; index < plant.water; index++) {
    waters.push(<FontAwesomeIcon icon={faDroplet} style={{color: "#0000ff",}} />)
    
  }
  let stars = []
  for (let index = 0; index < plant.light; index++) {
    stars.push(<FontAwesomeIcon icon={faStar} style={{color: "#ffff00",}} />)
  }
  
  return (
    <div className='plantItem-container'>
        <div className='plantItem-element'>
          <img src={plant.cover} alt={plant.name} />
        </div>
        <div className='plantItem-element'>
          <div className='plantItem-details'>
            <div className='plantItem-sub-element'>
              <span>{plant.name}</span>
            </div>
            <CareScale water={plant.water} light={plant.light}/>
            <div className='plantItem-sub-element'>
              <span>Prix :{plant.price} {' '} {MONEY_SYMBOL}</span>
            </div>
            <div className='plantItem-sub-element'>
                <button>Ajouter</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PlantItem