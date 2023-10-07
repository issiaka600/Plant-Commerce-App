import React from 'react'
import './category_style.css'

function Category({categories,selectedCategory,changeCategory}) {
    const handleChangeSelectedCategory = (value)=>{
        changeCategory(value)
    }
  return (
    <div className='category-container'>
        <select value={selectedCategory} onChange={(event)=>handleChangeSelectedCategory(event.target.value)}>
            <option value={''}>choisir une catégorie</option>
            {
                categories.map(item=>(
                    <option key={item} value={item} onChange={(event)=>handleChangeSelectedCategory(event.target.value)}>{item}</option>
                ))
            }
        </select>
        <button onClick={event=>handleChangeSelectedCategory('')}>Réinitialiser</button>
    </div>
  )
}

export default Category