import React, {useEffect, useState} from "react"
import axios from "axios"
import {InputText} from "../components/InputText"
import {Preloader} from "../components/Preloader"
import {CheckInput} from "../components/CheckInput"

export const Home = () => {
	const url = process.env.REACT_APP_MY_DB_TODO
	
	const [todos, setTodos] = useState([
		{completed: false,
			id: Date.now(),
			title: 'dsdsd'}
	])
	const [loading, setLoading] = useState(true)
	
	
	// useEffect(() => {
	// 	const saved = JSON.parse(localStorage.getItem('todos') || '[]')
	// 	setTodos(saved)
	// }, [])
	//
	// useEffect(() => {
	// 	localStorage.setItem('todos', JSON.stringify(todos))
	// }, [todos])
	//
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			setTimeout(() => {
	// 				setTodos(data)
	// 			}, 2000)
	// 		})
	// }, [])
	

	useEffect(() => {

		axios.get(`${url}/todos.json`)

			.then((response) => Object.keys(response.data).map(key => {
				return {
					...response.data[key],
					id: key
				}
			}))
			.then(response => setTodos(response))
			.then(res => setLoading(false))

	}, [])

	
	
	const addTodoHandler = async (title) => {
		const newTodos = {
			completed: false,
			id: Date.now(),
			title
		}
		
		await axios.post(
			`${url}/todos.json`,
			newTodos)
		
		setTodos(prev => [newTodos, ...prev])
	}
	
	const onDeleteHandler = async (id) => {
		const shouldRemove = window.confirm('Are you sure?')
		
		if (shouldRemove) {
			await axios.delete(`${url}/todos/${id}.json`)
			
			setTodos(prev => prev.filter(todo => todo.id !== id))
		}
	}
	
	const onLineThroughHandler = (id) => {
		
		// await axios.put(`${url}/${id}/completed.json`, true)
		
		setTodos(prev => prev.map(todo => {
			
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))
		
	}
	
	return (
		<>
			<div className='container'>
				<InputText pressEnter={addTodoHandler}/>
				{loading
					? <Preloader/>
					:
					<CheckInput todos={todos}
					              onDelete={onDeleteHandler}
					              onLineThrough={onLineThroughHandler}/>
				}
			</div>
		</>
	)
}