import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload.user)
        },
        removeUser: (state, action) => {
            const userIndex = state.list.findIndex(user => action.payload.userName === user.name)
            console.log(userIndex)
            state.list.splice(userIndex, 1)
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer