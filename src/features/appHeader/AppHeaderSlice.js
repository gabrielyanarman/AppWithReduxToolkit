import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: 'userOut',
    userOn: ''
}


const AppHeaderSlice = createSlice({
    name: 'AppHeader',
    initialState,

    reducers: {
        userOn: (state,action) => {
            state.status = 'userOn';
            state.userOn = action.payload
        },
        userOut: (state) => {
            state.status = 'userOut';
            state.userOn = ''
        }
    }
})

export const {userOn,userOut} = AppHeaderSlice.actions

export const selectHeaderStatus = (state) => {
    return state.appHeaderSlice.status
}

export const selectUserOn = (state) => {
	return state.appHeaderSlice.userOn
}

export default AppHeaderSlice.reducer