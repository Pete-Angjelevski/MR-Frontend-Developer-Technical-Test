import * as React from 'react'
import { useState } from 'react'
import { addToCart } from '../actions/cartActions'
import { dispatch } from '../store'
import { connect } from 'react-redux'

// DATA
import clothingData from '../../Data/data'

//STYLES
import "../scss/Body.scss"


interface IBodyProps {

}


const Body: React.FC<IBodyProps> = () => {
  const [ {id, name, price, description, img, sizes }  ] = clothingData

  const [ selectedSize, setSelected ] = useState<string>('')
  
  function handleSize (size: string):void {
    setSelected(size)
  }

  function handleAddToCart (): void {

    dispatch(addToCart(id, name, price, img, selectedSize))

  }

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
          <p>SIZE* {selectedSize}</p>
          {sizes.map((size: string) => {
            return (
              <p className="size" key={size}  onClick={() => handleSize(size)}>{size}</p> )
          })}
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>

    </div>
    )

}

export default connect()(Body)