import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:{
    users:[],
    isMatched:false
  },

  reducers: {
    addUser: (state,action) => {

        console.log(action.payload);
        state.users.push(action.payload)
       
    },
    isUserMatched:(state,action) => {

        state.isMatched=action.payload;
    }
   
  },
});
 
export const { addUser ,isUserMatched } = userSlice.actions;
export default userSlice.reducer;
