import * as React from 'react'
import { useState } from 'react'
import { Link, Route } from 'react-router-dom'


//COMPONENTS
import Cart from './Cart'


// STYLES
import "../scss/Header.scss"



interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = () => {
  const [trigger, setTrigger ] = useState<boolean>(false)

   


    return (
        <div className="headerContainer">
          <Link className="link" onClick={() => setTrigger(!trigger)} to={trigger ? '/cart' : '/'}>My Cart(0)</Link>
          <Route path="/cart" component={Cart} />
          
        </div>
          
          )
}

export default Header