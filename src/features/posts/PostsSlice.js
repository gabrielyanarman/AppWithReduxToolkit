import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPostsByUserId } from "../../API/fetchData"

export const initialState = {
    posts: [],
    status: ''
}

export const addUserPostsByIdAsync = createAsyncThunk(
    'user/fetchPosts',
    async (id) => {
        const posts = await getPostsByUserId(id)
        return posts
    }
)

export const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state,action) => {
            state.posts.unshift(action.payload)
        },

        removePost: (state,action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUserPostsByIdAsync.pending,(state) => {
                state.status = 'loading'
            })
            .addCase(addUserPostsByIdAsync.fulfilled,(state,action) => {
                state.status = 'loaded'
                state.posts = action.payload
            })
    }
})

export const {addPost,removePost} = PostsSlice.actions

export function selectPosts(state) {
    return state.postsSlice.posts
}

export function selectPostsStatus(state) {
    return state.postsSlice.status
}

export default PostsSlice.reducer