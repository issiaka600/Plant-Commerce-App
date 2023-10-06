import React from 'react'
import './cart_style.css'
import { MONEY_SYMBOL } from '../../constants/MoneySymbol'

function Cart() {
  return (
    <div className='cart-container'>
      <div className='cart-element' >
        <button>Fermer</button>
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