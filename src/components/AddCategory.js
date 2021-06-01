import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState("");

    const handleInputChange= (e) =>{

        setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log("submiteado")
        if (inputValue.trim().length>2) {
            setCategories(catg => [ inputValue, ...catg])
            setinputValue('')
        }

       
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={(e)=>{handleInputChange(e)}}
            />
        </form>
    )

   
}
 AddCategory.protoTypes = {
        setCategories: PropTypes.func.isRequired
    };