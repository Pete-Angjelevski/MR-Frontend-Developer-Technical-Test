import * as React from 'react'
import { useState } from 'react'

import clothingData from '../../Data/data'

interface IBodyProps {

}


const Body: React.FC<IBodyProps> = () => {

  const [ {name, price, description, img, sizes }  ] = clothingData
  

  return (
    <div>
      
      <img src={img}/>
      <p>{name}</p>
      <p>${price}.00</p>
      <p>{description}</p>
      <div>
        <p>SIZE*</p>
        {sizes.map((size: string) => {
          return (
            <p>{size}</p> )
        })}
      </div>
      <button>ADD TO CART</button>

    </div>
    )

}

export default Body