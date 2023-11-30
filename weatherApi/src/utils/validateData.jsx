
export const validateData= (name,password,users)=>{

    if(!name){
        return "enter user name";
    }

    if(!password){
        return "enter password";
    }
    
    if( users.find(user=>user.name==name)){
        return "User already exist.. Login"
    }

    return null;

}



export const validateLoginData= (name,password,users)=>{

    if(!name){
        return "enter name";
    }
    if(!password){
        return "enter password";
    }

    if( !users.find(user=>user.name==name)){
        return "No user Accounts found. SignIN"
    }

  
 
   



    return;

}

