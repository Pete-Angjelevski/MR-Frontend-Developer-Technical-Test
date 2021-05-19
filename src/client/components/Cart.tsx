import * as React from 'react'
import { CartType } from '../types/appSpecificTypes' 
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'




interface ICartProps {
  trigger: boolean
  setTrigger: any
}


const Cart: React.FC<ICartProps> = (props):any => {
  
  const cart = useSelector((state: any) => state.cart)

  


  return (props.trigger) 
  ? (
    <div>
      <button onclick={setCartPopup(false)}>X</button>
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
  : ""
    
    
}


export default connect()(Cart)