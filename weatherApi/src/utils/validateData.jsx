
export const validateData= (name,password)=>{

    if(!name){
        return "enter name";
    }

    if(!password){
        return "enter password";
    }

    return null;

}

