import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     userList: [],
};

export const userSlice = createSlice({
     name: "counter",
     initialState,
     reducers: {
          updateUserList: (state, payload) => {
               state.userList = payload.user;
          },
     },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
