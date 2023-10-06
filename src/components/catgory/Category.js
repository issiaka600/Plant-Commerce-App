import React, { useState } from 'react'


function Category({categories,changeCategory}) {
    const [selectedCategory,setSelectedCategory] = useState('');
  return (
    <div>
        <select value={selectedCategory} onChange={(event)=>setSelectedCategory(event.target.value)}>
            <option value={''}>choisir une catégorie</option>
            {
                categories.map(item=>(
                    <option key={item} value={item} onChange={(event)=>setSelectedCategory(event.target.value)}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Category