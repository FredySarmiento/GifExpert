import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    //manejo de arreglos mediante useState
    const [categories, setCategories] = useState (['One punch']);
    
    //const handleAdd = () =>{
    //    /* setCategories([...categories, 'HunteXHunter']) */
    //    setCategories(categ=>[...categ, 'HunterxHunter']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            {<AddCategory setCategories ={setCategories}/>}
            <hr />
            <ol>
            {
                categories.map(category =>
                     <GifGrid
                        key={category} 
                        category={category} 
                     />
                )
            }
            </ol>

        </>
    )
}
