import { useDispatch } from 'react-redux'
import MyButton from '../../UI/myButton/MyButton'
import './todos.css'
import { completeTodo,removeTodo } from './TodosSlice'

function TodoItem({todo,index}) {
    const dispatch = useDispatch()
    return (
			<div className={todo.completed ? 'todo_item _c' : 'todo_item'}>
				<span>Todo number {index + 1}</span>
				<p>{todo.title}</p>
				<div className='todo_btns'>
					<MyButton
						onClick={() => {
							dispatch(removeTodo(todo.id))
						}}
					>
						Delete
					</MyButton>
					{!todo.completed ? (
						<MyButton
							onClick={() => {
								dispatch(completeTodo(todo.id))
							}}
						>
							Completed
						</MyButton>
					) : null}
				</div>
			</div>
		)
}

export default TodoItem