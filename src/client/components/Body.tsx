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
  const [ sizeError, setSizeError ] = useState<boolean>(false)

  const [style, setStyle] = useState<object>()
  

  function handleSize (size: string):void {
    setStyle({
      
      border: "2px solid #222222",
      
    })
    setSizeError(false)
    setSelected(size)
  }

  function handleAddToCart (): void {


    if (selectedSize === '') {
      console.log("Must Select Size")
      setSizeError(true)
    } else {
      dispatch(addToCart(id, name, price, img, selectedSize))
    }

    

  }

  return (
    <div className="clothingContainer">
      <div>
        <img src={img}/>
      </div>
      <div className="content">
        <p className="name">{name}</p>
        <p className="price"><strong>${parseFloat(price.toString()).toFixed(2)}</strong></p>
        <p>{description}</p>
        <div>
          <p>SIZE<span>*</span> <strong>{selectedSize}</strong> 
            {sizeError ? <p className="error"> PLEASE SELECT SIZE</p> : <p></p>}
          </p>
          {sizes.map((size: string) => {
            return (
              <p 
              className="size" 
              key={size}  
              onClick={() => handleSize(size)}
              style={style}
              >
                {size}
              </p> )
          })}
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>

    </div>
    )

}

export default connect()(Body)