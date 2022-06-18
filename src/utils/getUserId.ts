
export const addUserId=async (object:any)=>{
   
   
    object.UserId=localStorage.getItem("userId");
   
    return object;
}