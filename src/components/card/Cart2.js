import React, { useState } from 'react';
import './cart_style.css';
import { MONEY_SYMBOL } from '../../constants/MoneySymbol';
import { useBasketContext } from '../../contexts/BasketContext';

function Cart2({ toggleBasket, changeToggleBasket,validateBasket,fValidateBasket }) {
  const { basket, setBasket } = useBasketContext();
  const [showModal, setShowModal] = useState(false);

  const handleToggleBasket = () => {
    changeToggleBasket(!toggleBasket);
  };

  const handleValidateCart = () => {
    // Vérifiez si l'utilisateur est connecté
    // Si oui, continuez avec la validation du panier
    // Sinon, affichez le modal d'inscription
    const userIsLoggedIn = false; // Remplacez par votre logique de vérification de connexion
    if (userIsLoggedIn) {
      // Continuer avec la validation du panier
      console.log('Panier validé');
    } else {
      // Afficher le modal d'inscription
      setShowModal(true);
    }
  };

  const getPlantCount = (plantId, plantList) => {
    return plantList.reduce((count, plant) => {
      if (plant.id === plantId) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  return (
    <div className='cart-container main-element'>
      <div className='cart-element'>
        <button onClick={handleToggleBasket}>Fermer</button>
      </div>
      <div className='cart-element'>
        <h2>Panier</h2>
        <ul>
          <li>1 olivier 25 {MONEY_SYMBOL}</li>
          <li>1 basilique 5 {MONEY_SYMBOL}</li>
        </ul>
        <h2>Total : 30 {MONEY_SYMBOL}</h2>
        <button onClick={handleValidateCart}>Valider le panier</button>
      </div>
      <div className={`modal ${showModal ? 'show' : ''}`}>
        {/* Contenu du modal d'inscription */}
        <h3>Inscrivez-vous pour valider le panier</h3>
        {/* Ajoutez les champs d'inscription et les fonctionnalités nécessaires */}
        <button onClick={() => setShowModal(false)}>Fermer</button>
      </div>
    </div>
  );
}

export default Cart2;
