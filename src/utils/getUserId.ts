
export const addUserId=async (object:any)=>{
   
   
    object.UserId=localStorage.getItem("userId");
    console.log(object)
    return object;
}