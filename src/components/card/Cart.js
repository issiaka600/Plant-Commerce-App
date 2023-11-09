import React from 'react'
import './cart_style.css'
import { MONEY_SYMBOL } from '../../constants/MoneySymbol'
import { useBasketContext } from '../../contexts/BasketContext'
import { useNavigate } from 'react-router-dom'
import { COMMAND_API_URL } from '../../constants/constants'
import axios from 'axios'

function Cart({toggleBasket,changeToggleBasket}) {
  const {basket,setBasket}= useBasketContext
  const navigate = useNavigate()

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
  const handleValidate = e=>{
    e.preventDefault()
    const storedSession = localStorage.getItem("user");
    if(storedSession){
      if(JSON.parse(storedSession).token){
        if(Array.isArray(basket) && basket.length>0){
          axios.post(`${COMMAND_API_URL}/create`,basket)
          .then(response=>{
            console.log('commande added')
            localStorage.removeItem('basket')
            setBasket([])
          })
          .catch(error => console.error(error))
        }
      }
    }
    else{
      navigate('/signin')
    }
  }
  // const displayList = basket.map(plant=>(<li key={plant.}>{getPlantCount(plant.id)} olivier 25 {MONEY_SYMBOL}</li>))

  const uneffectElement = Array.isArray(basket) && basket.length>0

  return (
    <div className='cart-container main-element'>
      <div className='cart-element' >
        <button onClick={handleToggleBasket}>Fermer</button>
      </div>
    {<div className='cart-element'>
        <h2>Panier</h2>
        <ul>
          <li>1 olivier 25 {MONEY_SYMBOL}</li>
          <li>1 basilique 5 {MONEY_SYMBOL}</li>
        </ul>
        <h2>Total : 30 {MONEY_SYMBOL}</h2>
      </div>
    }
      <div className='cart-element'>
        <button onClick={handleValidate}>Valider le panier</button>
      </div>
    </div>
  )
}

export default Cart