import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {    
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2> GifExpertApp </h2>
            <hr/>
            
            <AddCategory setCategories={ setCategories }/>

            <ol>
               {
                    categories.map( (category, idx) => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    ))
               } 
            </ol>
        </>
    );
}

export default GifExpertApp;
