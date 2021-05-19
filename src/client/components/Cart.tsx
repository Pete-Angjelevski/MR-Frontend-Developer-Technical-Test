import * as React from 'react'
import { CartType } from '../types/appSpecificTypes' 
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


// STYLES 
import "../scss/Cart.scss"


interface ICartProps {

}


const Cart: React.FC<ICartProps> = (props):any => {
  
  const cart = useSelector((state: any) => state.cart)

  


  return (
    <div className="cartContainer">
      <ul>
        {cart.map((item: CartType) => {
          return (
            <li className="itemContainer" key={item.size}>
              <img src={item.img} />
              <div className="content">
              <p>{item.name}</p>
              <p>{item.quantity}x <strong>${item.price}.00</strong> </p>
              <p>Size: {item.size}</p>
              </div>
            </li>)
        })}
      </ul>
    </div>
  ) 

    
    
}


export default connect()(Cart)