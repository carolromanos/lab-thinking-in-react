import React, { useState } from 'react';
import ProductRow from './ProductRow'


function ProductTable(props){
    const {products} = props
    
    return(
        <div className="product-table">
            <table className="table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>    
                    </tr>    
                    <tr>
                    {products.map(product =>(
                        <tr>
                        <ProductRow product={product} />
                        </tr>
                    ))}
                    </tr>
                    
                    </tbody>       
                </table>
            </div>
        )
    
}

export default ProductTable