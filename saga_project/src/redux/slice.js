import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myUsers: null,
  isLoading: false,
};

const myUsersSlice = createSlice({
  name: "MyuserList",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.isLoading = true;
    },
    getUsrersList: (state, action) => {
      state.isLoading = false;
      state.myUsers = action.payload.results;
    },
    getUsersFailed: (state) => {
      state.isLoading = false;
      state.myUsers = [];
    },
  },
});

export const { getUsers, getUsrersList, getUsersFailed } = myUsersSlice.actions;
export default myUsersSlice.reducer;
