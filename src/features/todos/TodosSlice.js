import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTodosByUserId } from "../../API/fetchData"

export const initialState = {
    todos: [],
    status: ''
}

export const addUserTodosByIdAsync = createAsyncThunk(
    'users/fetchUserTodos',
    async (id) => {
        const todos = await getTodosByUserId(id)
        return todos
    }
)

export const TodosSlice = createSlice({
	name: 'todos',
	initialState,

	reducers: {

        removeTodo: function (state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

		addTodo: function (state,action) {
            state.todos.unshift(action.payload)
        },

		clearCompletedTodos: function (state, action) {
            state.todos = state.todos.filter((todo) => todo.completed === false)
        },

        completeTodo: function(state,action) {
            state.todos = state.todos.map((todo) => {
                if(todo.id !== action.payload) {
                    return todo
                } else {
                    return {
                        ...todo,
                        completed: true
                    }
                }
            })
        }
	},

    extraReducers: function(builder) {
        builder
        .addCase(addUserTodosByIdAsync.pending,(state) => {
            state.status = 'loading...'
        })
        .addCase(addUserTodosByIdAsync.fulfilled,(state,action) => {
                state.todos = action.payload;
                state.status = 'loaded'
            })
    }

})

export const { removeTodo, addTodo, clearCompletedTodos, completeTodo } =
	TodosSlice.actions

export function selectTodos(state) {
     return state.todosSlice.todos
}

export function selectTodosStatus(state) {
	return state.todosSlice.status
}

export default TodosSlice.reducer