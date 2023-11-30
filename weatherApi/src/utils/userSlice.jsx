import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:{
    users:[],
  },

  reducers: {
    addUser: (state,action) => {
        state.users.push(action.payload)
    },
 

    updateUser:(state,action) =>{
      const updatedUser=state.users.map(user=> {
        if(user.name == action.payload){

          var data;

          if(user.isMatched== false){
            data=true;
          }
          else{
            data=false;
          }

       
          return {...user, isMatched:data}
        }

        return user;
      })

      state.users=updatedUser;
    }
   
  },
});
 
export const { addUser ,updateUser } = userSlice.actions;
export default userSlice.reducer;
