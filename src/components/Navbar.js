import React from "react"
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className='green darken-3'>
			<div className="nav-wrapper">
				<span className="brand-logo ">MyLogo</span>
				<ul className="right hide-on-med-and-down">
					<li><NavLink to="/" activeClassName='red accent-3' exact>Home</NavLink></li>
					<li><NavLink to="/About" activeClassName='red accent-3'>About </NavLink></li>
				</ul>
			</div>
		</nav>
	)
}