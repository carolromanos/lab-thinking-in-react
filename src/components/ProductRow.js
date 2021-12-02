import React from 'react';



export default function ProductRow(props){
    const {product} = props

    return(
        <div>
            <tr>{!product.stocked ?
                <td className='out-stock'>{product.name}</td>
                :
                <td>{product.name}</td>
            }
                
                <td>{product.price}</td>
            </tr>
      </div>
    )
}