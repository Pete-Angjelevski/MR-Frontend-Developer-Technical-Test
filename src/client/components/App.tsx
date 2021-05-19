import * as React from 'react'
import { Route } from 'react-router-dom'



// COMPOENENTS 
import Header from './Header'
import Body from './Body'



interface IAppProps {}


const App: React.FC<IAppProps> = () => {

	return (
		<>
			<Route path="/" component={Header} />
			<Route path="/" component={Body} />
			
			
		</>
	)
}




export default App
