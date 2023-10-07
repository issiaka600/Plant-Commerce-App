import React,{useState} from 'react'
import './plantitem2_style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faStar } from '@fortawesome/free-solid-svg-icons'
import CareScale from './CareScale'
import { MONEY_SYMBOL } from '../../constants/MoneySymbol'
 


function PlantItem2({ plant, changeBasket}) {
    // const [basket,setBasket] = useState([])
    let waters = []
    for (let index = 0; index < plant.water; index++) {
        waters.push(<FontAwesomeIcon icon={faDroplet} style={{ color: "#0000ff", }} />)
    }
    let stars = []
    for (let index = 0; index < plant.light; index++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: "#ffff00", }} />)
    }

    // const handleUpdateBasket = (updatedBasket)=>{
    //     localStorage.setItem('basket',JSON.stringify([...updatedBasket]))
    // }
    const handleAddToBasket = (id,name,price)=>{
        const data =JSON.parse(localStorage.getItem('basket'))
        if(Array.isArray(data)){
            const updatedBasket = [...data,{'id':id, 'name':name,'price':price}]
            // handleUpdateBasket(updatedBasket)
            changeBasket(updatedBasket)
            // setBasket([...data])
            // console.log('basket', basket)
        }
        else{
            console.log('data', data)
        }
    }

    return (
        <div className='plantItem2-container'>
            <div className='plantItem2-element'>
                <img src={plant.cover} alt={plant.name} />
                <span>{plant.price}{MONEY_SYMBOL}</span>
                <div>
                    <span><b>{plant.name.toUpperCase()}</b></span>
                </div>
                <CareScale water={plant.water} light={plant.light} />
                <div className='plantItem2-sub-element'>
                    <button onClick={event=>handleAddToBasket(plant.id,plant.name,plant.price)}>
                        Ajouter
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default PlantItem2