import React, { useState } from 'react';

export default function SearchBar(props){
   
    const[string, setString] = useState("")
    const [checked, setChecked] = useState(false)

    function handleInput(event){
        setString(event.target.value)
        props.filterProducts(event.target.value)

    }

    function handleCheckedBox(event){
        setChecked(event.target.checked)
        props.filterStock(event.target.checked)
    }

    return(
        <>
            <input type="search" name="search" value={string} onChange={handleInput} />

            <label>Show only products in stock</label>
            <input type="checkbox" name="isStocked" checked={checked} onChange={handleCheckedBox} />
        </>
    )
}