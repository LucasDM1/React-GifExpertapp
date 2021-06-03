import React, { useState }from 'react';
//import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories=[]}) => {

    const [categories, setCategories] = useState(defaultCategories);
    //GifExpertApp

    // const handleAdd = () =>{
    //    setCategories([...categories, "HunterxHunter"]); 
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
                {categories.map((category)=>{
                    return(
                        <GifGrid
                        key={category}
                         category={category} />
                    );
                })}
                {/* <button onClick={()=>{handleAdd()}}>Agregar </button> */}
            

        </div>
    );

}