import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllUsers } from "../../API/fetchData"

export const initialState = {
    users: [],
    status: ''
}

export const addAllUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const users = await getAllUsers();
        return users
    }
)


export const UsersSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        removeUser: (state,action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },

        addUser: (state,action) => {
            //...
        }

    },

    extraReducers: (builder) => {
        builder
					.addCase(addAllUsersAsync.pending, state => {
						state.status = 'loading'
					})
					.addCase(addAllUsersAsync.fulfilled, (state, action) => {
                        state.status = 'loaded'
						state.users = action.payload.map((user) => {
                           return {
                                ...user,
                                password: Number(user.id) * 1000
                            }
                        })
					})
    }
})

export const {removeUser,addUser} = UsersSlice.actions

export function selectUsers(state) {
    return state.usersSlice.users
}

export function selectUsersStatus (state) {
    return state.usersSlice.status
}

export default UsersSlice.reducer

