import { createSlice } from "@reduxjs/toolkit";

const localStorageUsername = localStorage.getItem('username')
let initialState = {
    username: localStorageUsername === null ? '' : localStorageUsername,
}

const userSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload
        }
    }
});

export const { changeUsername } = userSlice.actions;
export default userSlice.reducer