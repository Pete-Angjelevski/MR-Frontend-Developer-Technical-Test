import * as React from 'react'
import { useState } from 'react'

interface IBodyProps {

}


const Body: React.FC<IBodyProps> = () => {



  return (
    <div>
      <h1 className="productName" >Classic Tee</h1>
      <p className="price">$75.00</p>
      <p className="destructive">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      
    </div>
    )

}

export default Body