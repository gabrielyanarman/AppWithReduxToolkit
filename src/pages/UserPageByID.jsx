import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { addUserTodosByIdAsync, selectTodos, selectTodosStatus } from "../features/todos/TodosSlice"
import Todos from "../features/todos/Todos"
import Posts from "../features/posts/Posts"
import { addUserPostsByIdAsync, selectPosts, selectPostsStatus } from "../features/posts/PostsSlice"
import Loader from "../UI/myLoader/Loader"


function UserPageById() {
    const params = useParams()
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
    const todosStatus = useSelector(selectTodosStatus)
    const posts = useSelector(selectPosts)
    const postsStatus = useSelector(selectPostsStatus)

    useEffect( () => {
        dispatch(addUserTodosByIdAsync(Number(params.id)))
        dispatch(addUserPostsByIdAsync(params.id))
    },[params.id])

    return (
			<div className='user_page'>
				{todosStatus === 'loading' ? <Loader /> : <Todos todos={todos}/>}
				{postsStatus === 'loading' ? <Loader /> : <Posts posts={posts} />}
			</div>
		)
}

export default UserPageById