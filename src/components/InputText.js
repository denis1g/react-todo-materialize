import React, {useState} from "react"

export const InputText = ({pressEnter}) => {
	const [title, setTitle] = useState('')
	
	const keyPressEnterHandler = (e) => {
		
		if (e.key === 'Enter') {
			pressEnter(title.trim())
			
			setTitle('')
		}
	}
	
	return (
		<div className="input-field ">
			<input
				id="first_name2"
				type="text"
				placeholder='Enter your Note'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				onKeyPress={keyPressEnterHandler}
			/>
			<label className="active" htmlFor="first_name2">Note</label>
		</div>
	)
}