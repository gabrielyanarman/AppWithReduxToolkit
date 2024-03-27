import MyButton from "../../UI/myButton/MyButton"
import { removePost } from "./PostsSlice"
import { useDispatch } from "react-redux"

function PostItem({post,index}) {
    const dispatch = useDispatch()

    return (
        <div className="post_item">
            <span>Post number {index + 1}</span>
            <p>{post.body}</p>
            <div className='post_btns'>
                <MyButton onClick={() => {
                    dispatch(removePost(post.id))
                }}>
                    Delete
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem