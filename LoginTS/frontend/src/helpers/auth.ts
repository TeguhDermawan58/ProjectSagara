import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/";
import { setCookie,getCookie } from "typescript-cookie";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "login/", {
        email,
        password
      })
      .then(response => {
        if (response.data.jwt) {
          setCookie("jwt", JSON.stringify(response.data.jwt));
        }

        return response.data;
      })
      .catch(error => {
        // Handle error here
        console.error("Login error:", error);
        throw error;
      });
  }

  logout() {
    // Clear the token cookie
    setCookie("jwt", "", { expires: new Date(0) });
  }

  register(fullname: string, email: string, password: string) {
    return axios.post(API_URL + "register/", {
      fullname,
      email,
      password
    })
    .catch(error => {
      // Handle error here
      console.error("Registration error:", error);
      throw error;
    });
  }


  getCurrentUser() {
    const jwt = getCookie("jwt");
  
    if (jwt) {
      const token = JSON.parse(jwt);
      
      return axios.get(API_URL + "user/", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("GetCurrentUser error:", error);
        throw error;
      });
    } else {
      return Promise.reject("No JWT token found");
    }
  }
  


};
export default new AuthService();
