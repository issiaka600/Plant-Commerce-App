import React, {  useState } from 'react'
import './shoppingList_style.css'
import { plantCategories, plantList } from '../../constants/plantList'
// import PlantItem from '../plantitem/PlantItem'
import Category from '../catgory/Category'
import PlantItem2 from '../plantitem/PlantItem2'

function ShoppingList({updateBasket}) {

  const [selectedCategory,setSelectedCategory] = useState('');

  const getPlantsByCategory = (plantList=[],category)=>{
    if(category!==''){
      return plantList.filter(plant=>plant.category===category)
    }
      return plantList
  }
  const handleUpdateBasket = (updatedBasket)=>{
    updateBasket(updatedBasket)
  }


  return (
    <div className='shopping-list-container main-element'>
      <div>
        <Category categories={plantCategories} selectedCategory={selectedCategory} changeCategory={setSelectedCategory} />
      </div>
      <div className='plant-list-container'>
          {/* {
            plantList.map(item=>(<PlantItem2 plant={item}  key={item.id}/>))
          } */}
          {
            getPlantsByCategory(plantList,selectedCategory).map(item=>(<PlantItem2  plant={item}  key={item.id} changeBasket={handleUpdateBasket} />))
          }
      </div>
    </div>
  )
}

export default ShoppingList