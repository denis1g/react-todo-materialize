import React from "react"
import {useHistory} from "react-router-dom"

export const About = () => {
	
	const history = useHistory()
	
	return (
		<div className="row">
			<div className="col s12 m6 offset-m3">
				
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title center">About App</span>
						<p>My app version <strong>1.0.0</strong></p>
					</div>
				
				<div className="card-action center ">
					<div
						onClick={() => {history.push('/')}}
						className='myAboutDiv'
					>Go to home</div>
				</div>
				</div>
				
			</div>
		</div>
	)
}