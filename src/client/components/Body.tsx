import * as React from 'react'
import { useState } from 'react'

import clothingData from '../../Data/data'

//STYLES
import "../scss/Body.scss"


interface IBodyProps {

}


const Body: React.FC<IBodyProps> = () => {

  const [ {name, price, description, img, sizes }  ] = clothingData
  

  return (
    <div className="clothingContainer">
      <div>
        <img src={img}/>
      </div>
      <div className="content">
        <p className="name">{name}</p>
        <p className="price">${price}.00</p>
        <p>{description}</p>
        <div>
          <p>SIZE*</p>
          {sizes.map((size: string) => {
            return (
              <p className="size" key={size}>{size}</p> )
          })}
        </div>
        <button>ADD TO CART</button>
      </div>

    </div>
    )

}

export default Body