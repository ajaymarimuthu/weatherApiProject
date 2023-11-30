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


        const user=state.users.find(user=>user.name===action.payload)

        console.log(user);
  
         
    },

    updateUser:(state,action) =>{

      console.log("user data in login",action.payload);
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

    
      // console.log("user slice----",res);
    }
   
  },
});
 
export const { addUser ,isUserMatched,updateUser } = userSlice.actions;
export default userSlice.reducer;
