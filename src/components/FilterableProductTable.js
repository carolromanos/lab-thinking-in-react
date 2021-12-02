import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';



export default function FilterableProductTable(props){
    const{products} = props
    const [allProducts, setAllProducts] = useState(products)
    const [filteredProducts, setFilteredProducts] = useState(products)
    
    function handleFilter(string){
        if(string === "") {setFilteredProducts(allProducts)}
        else{
        setFilteredProducts(      
            filteredProducts.filter(product=>product.name.toLowerCase().includes(string.toLowerCase()))
      )
    }
    }

    function handleCheckBox(check){
        if(check){
            let checkedFilter = allProducts.filter((product)=> product.stocked === true )
            setFilteredProducts(checkedFilter)
        }else{
            setFilteredProducts(allProducts)
        }
    }

    return(
        <div className='table'>
            <SearchBar products={products} filterProducts={handleFilter} filterStock={handleCheckBox} />
            <ProductTable products={filteredProducts}/>
        </div>
    )
}