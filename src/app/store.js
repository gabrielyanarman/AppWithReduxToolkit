import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/UsersSlice'
import appHeaderReducer from '../features/appHeader/AppHeaderSlice'
import todosReducer from '../features/todos/TodosSlice'
import postsReducer from '../features/posts/PostsSlice'

export const store = configureStore({
	reducer: {
		usersSlice: usersReducer,
		appHeaderSlice: appHeaderReducer,
		todosSlice: todosReducer,
		postsSlice: postsReducer,
	},
})
