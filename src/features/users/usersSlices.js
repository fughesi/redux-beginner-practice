import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), name: "Dude Lebowski" },
  { id: nanoid(), name: "Niel Young" },
  { id: nanoid(), name: "dave Gray" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
