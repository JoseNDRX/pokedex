import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: "q",
    reducers: {
        getUserName: ( state, action ) => {
            const name = action.payload;
            return name
        }
    }
}
)

export const { getUserName } = userNameSlice.actions;
export default userNameSlice.reducer;