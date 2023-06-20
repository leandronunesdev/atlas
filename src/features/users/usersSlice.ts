import { createSlice } from "@reduxjs/toolkit";
import { UsersInitialState } from "../../@types";

const initialState: UsersInitialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { saveUsers, removeUser, addUser } = usersSlice.actions;

const usersReducer = usersSlice.reducer;

export default usersReducer;
