import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

//COMPONENTS
import Cart from './Cart'


// STYLES
import "../scss/Header.scss"

// TYPES
import { CartType } from '../types/appSpecificTypes' 

interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = () => {

  const cart = useSelector((state: any) => state.cart)

  const [cartCount, setcartCount ] = useState<number>(0)
  const [trigger, setTrigger ] = useState<boolean>(false)


  useEffect(() => {
    let count: number = 0
    
    cart.forEach((item: CartType) => {
      count += item.quantity
    })

    setcartCount(count) 
    
  }, [cart, cartCount])


   


    return (
        <div className="headerContainer">
          <Link className="link" onClick={() => setTrigger(!trigger)} to={trigger ? '/cart' : '/'}>My Cart({cartCount})</Link>
          <Route path="/cart" component={Cart} />
          
        </div>
          
          )
}

export default connect()(Header)