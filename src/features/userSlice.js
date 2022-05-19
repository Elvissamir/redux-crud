import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            console.log(state)
            state.list.push(action.payload.user)
        },
        removeUser: (state, action) => {
            const userIndex = state.users.find(user => 
                action.payload.userName === user.name)
            state.users.splice(userIndex, 1)
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer