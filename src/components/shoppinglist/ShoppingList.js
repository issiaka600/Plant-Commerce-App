import React from 'react'
import './shoppingList_style.css'
import { plantCategories, plantList } from '../../constants/plantList'
import PlantItem from '../plantitem/PlantItem'
import Category from '../catgory/Category'
function ShoppingList() {
    plantList.map(item=>(<PlantItem plant={item}  key={item.id}/>))
  return (
    <div className='shopping-list-container'>
      <div>
        <Category categories={plantCategories} />
      </div>
      <div className='plant-list-container'>
          {
            plantList.map(item=>(<PlantItem plant={item}  key={item.id}/>))
          }
      </div>
    </div>
  )
}

export default ShoppingList