import * as React from 'react'
import { useState, useEffect } from 'react'
import * as request from 'superagent'


// COMPOENENTS 
import Header from './Header'
import Body from './Body'
import Cart from './Cart'

interface IAppProps {}


const App: React.FC<IAppProps> = () => {

	return (
		<>
			<Header />
			<Body />
			<Cart />
		</>
	)
}




export default App
