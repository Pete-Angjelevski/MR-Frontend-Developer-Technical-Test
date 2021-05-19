import * as React from 'react'
import { Link, Route } from 'react-router-dom'


//COMPONENTS
import Cart from './Cart'


// STYLES
import "../scss/Header.scss"



interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = () => {


    return (
        <div className="headerContainer">
          <Link className="link" to='/cart'>My Cart(0)</Link>
          <Route path="/cart" component={Cart} />
          
        </div>
          
          )
}

export default Header