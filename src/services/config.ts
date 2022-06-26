import axios from 'axios';
import { refreshToken } from '../store/actions/user.action';

const http = axios.create({
  baseURL: process.env.baseURL||process.env.APP_PORT,
  withCredentials: true
});

http.interceptors.request.use(request => {
  if (request.headers)
  { 
 
    request.headers["Authorization"] = `Bearer ${localStorage.getItem("access-token")}`;
    request.headers["Access-Control-Allow-Methods"]= "POST, GET, OPTIONS, PUT, DELETE";
    request.headers["Access-Control-Allow-Headers"]= "Origin, Content-Type, Accept, Authorization, X-Request-With";
}

  return request;
});

http.interceptors.response.use(response => {
  return response;
  },
  async (error:any) => {
    console.log("izin error")
    // Pass all non 401s back to the caller.
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
 
    originalRequest._retry = true;
               
    
    try {
     if(localStorage.getItem("refresh-token")){
       console.log("refresh",localStorage.getItem("refresh-token"))
      axios.get(process.env.APP_PORT+"/user/auth/refresh",
        {
          headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("refresh-token")}`
            }
           
        })
        .then((responsea) => {
          
          const access_token = responsea.data.accessToken;
          localStorage.setItem("access-token", access_token);
          console.log("neww access token",access_token)
          http.interceptors.request.use(request=>{if (request.headers)request.headers["Authorization"] = 'Bearer ' + access_token})
          return http(originalRequest);
  
          
        })
       
       
 }
    } catch (error) {
      const tokenError = new Error("Cannot refresh token");
      return Promise.reject(tokenError);
    }
      

  }
);

export default http;