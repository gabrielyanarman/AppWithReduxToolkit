import { useDispatch } from "react-redux"
import { clearCompletedTodos,addTodo } from "./TodosSlice";
import TodoItem from "./TodoItem";
import './todos.css'
import MyButton from "../../UI/myButton/MyButton";

function Todos({todos}) {

    const dispatch = useDispatch();

    return (
        <div className="todos_list">
            <div className="todos_list_header">
                <h1>Todo List</h1>
                <div className="todos_list_header_btns">
                    <MyButton onClick={() => {
                            let title = prompt('enter todo');
                            if(!title) return
                            let newTodo = {
                                id: Date.now(),
                                userId: Math.floor(Math.random()),
                                title,
                                completed: false
                            };
                            dispatch(addTodo(newTodo))
                        }}>Add todo</MyButton>
                    <MyButton onClick={() => {dispatch(clearCompletedTodos())}}>Clear completed todo</MyButton>
                </div> 
            </div>
            <hr style={{border: '1px solid lightseagreen'}} />
            {todos.map((todo,index) => {
                return <TodoItem todo={todo} index={index} key={todo.id}/>
            })}
        </div>
    )
}

export default Todos