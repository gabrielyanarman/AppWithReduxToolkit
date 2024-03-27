import { useDispatch } from "react-redux"
import MyButton from "../../UI/myButton/MyButton"
import PostItem from "./PostItem"
import './Posts.css'
import { addPost } from "./PostsSlice"
import { useParams } from "react-router-dom"

function Posts({posts}) {
    const dispatch = useDispatch()
    const params = useParams()

    return (
			<div className='posts_list'>
				<div className='posts_list_header'>
					<h1>Post List</h1>
					<div className='posts_list_header_btns'>
						<MyButton onClick={() => {
							let body = prompt('enter post');
							if(!body) return 
							let newPost = {
								userId: Number(params.id),
								id: Date.now(),
								body,
								title: '',
							}
                            dispatch(addPost(newPost))
                        }}>Add post</MyButton>
					</div>
				</div>
				<hr style={{ border: '1px solid black' }} />
				{posts.map((post, index) => {
					return <PostItem post={post} index={index} key={post.id} />
				})}
			</div>
		)
}

export default Posts