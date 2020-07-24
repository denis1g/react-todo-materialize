import React from "react"

export const CheckInput = ({todos, onDelete, onLineThrough}) => {
	
	if (!todos.length) {
		return (
			<div>Not todos!!!</div>
		)
	}
	
	const onDelHand = (e, id) => {
		e.preventDefault()
		
		onDelete(id)
	}
	
	return (
		<ul className='myBorderTop'>
			{todos.map(todo => {
				
				const styles = ['']
				
				if (todo.completed) {
					styles.push('myLineThrough')
				}
				
				
				return (
					<li key={todo.id} className='myFlexLabel'>
						
						<label>
							<input
								onClick={() => onLineThrough(todo.id)}
								type="checkbox"
								defaultChecked={todo.completed}
							/>
							
							<span className={styles.join('')}>{todo.title}</span>
						
						</label>
						
						<i
							className='material-icons myRedColor'
							onClick={(e) => onDelHand(e, todo.id)}
						>delete</i>
					</li>
				)
			})}
		</ul>
	)
}