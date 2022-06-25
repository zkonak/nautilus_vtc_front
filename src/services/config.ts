import axios from 'axios';

const http = axios.create({
  baseURL: process.env.baseURL||`http://127.0.0.1:8080`,
  withCredentials: true
});

http.interceptors.request.use(request => {
  if (request.headers)
  { 
 
    request.headers["Authorization"] = `Bearer ${localStorage.getItem("access-token")}`;
    request.headers["Access-Control-Allow-Origin"]= "http://127.0.0.1:3000";
    request.headers["Access-Control-Allow-Methods"]= "POST, GET, OPTIONS, PUT, DELETE";
    request.headers["Access-Control-Allow-Headers"]= "Origin, Content-Type, Accept, Authorization, X-Request-With";
}

  return request;
});

http.interceptors.response.use(response => {
  return response;
  },
  async (error:any) => {
    
    // Pass all non 401s back to the caller.
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const response = await http.get('/users/auth/refresh');
      const access_token = response.data.access_token;
      
      localStorage.setItem("access-token", access_token);
      error.hasRefreshedToken = true;
      
      return Promise.reject(error);

    } catch (error) {
      const tokenError = new Error("Cannot refresh token");
      return Promise.reject(tokenError);
    }
      

  }
);

export default http;