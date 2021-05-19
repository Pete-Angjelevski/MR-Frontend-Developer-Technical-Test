import * as React from 'react'
import { useState } from 'react'

//COMPONENTS
import Cart from './Cart'


// STYLES
import "../scss/Header.scss"



interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = () => {
  const [cartPopup, setCartPopup] = useState<boolean>(false)


    return (
        <div className="headerContainer">
          <a href="#" onClick={() => setCartPopup(true)}><p>My Cart({})</p></a>
          <Cart trigger={cartPopup} setTrigger={setCartPopup}/>
        </div>
          
          )
}

export default Header