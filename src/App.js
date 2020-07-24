import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Navbar} from "./components/Navbar"

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<Switch>
				<Route component={Home} path='/' exact/>
				<Route component={About} path='/About'/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
