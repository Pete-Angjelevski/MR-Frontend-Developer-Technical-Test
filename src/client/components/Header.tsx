import * as React from 'react'

// STYLES
import "../scss/Header.scss"

interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = () => {


    return (
        <div className="headerContainer">
          <a href="#"><p>My Cart</p></a>
        </div>
          
          )
}

export default Header