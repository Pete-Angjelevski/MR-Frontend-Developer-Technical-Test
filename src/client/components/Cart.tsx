import * as React from 'react'
import { CartType } from '../types/appSpecificTypes' 
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



interface ICartProps {

}


const Cart: React.FC<ICartProps> = (props):any => {
  
  const cart = useSelector((state: any) => state.cart)

  


  return (
    <div>
      <Link to="/">X</Link>
      <ul>
        {cart.map((item: CartType) => {
          return (
            <li>
              <img src={item.img} />
              <p>{item.name}</p>
              <p>{item.quantity}x <strong>${item.price}.00</strong> </p>
              <p>Size: {item.size}</p>
            </li>)
        })}
      </ul>
    </div>
  ) 

    
    
}


export default connect()(Cart)