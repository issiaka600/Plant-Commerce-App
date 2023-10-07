import React from 'react'
import './cart_style.css'
import { MONEY_SYMBOL } from '../../constants/MoneySymbol'

function Cart({toggleBasket,changeToggleBasket,basket}) {

  const handleToggleBasket = ()=>{
    changeToggleBasket(!toggleBasket)
  }
  const getPlantCount = (plantId,plantList)=>{
    return plantList.reduce((count,plant)=>{
      if(plant.id===plantId){
        return count +1
      }
      return count
    },0)
  }
  // const displayList = basket.map(plant=>(<li key={plant.}>{getPlantCount(plant.id)} olivier 25 {MONEY_SYMBOL}</li>))
  return (
    <div className='cart-container main-element'>
      <div className='cart-element' >
        <button onClick={handleToggleBasket}>Fermer</button>
      </div>
      <div className='cart-element'>
        <h2>Panier</h2>
        <ul>
          <li>1 olivier 25 {MONEY_SYMBOL}</li>
          <li>1 basilique 5 {MONEY_SYMBOL}</li>
        </ul>
        <h2>Total : 30 {MONEY_SYMBOL}</h2>
      </div>
      <div className='cart-element'>
        <button>Valider le panier</button>
      </div>
    </div>
  )
}

export default Cart