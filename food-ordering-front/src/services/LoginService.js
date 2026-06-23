import axios from "axios";
import TokenService from "./TokenService";
import API_BASE_URL from "./ApiConfig";

class LoginService{
    login(loginParams){
        return axios.post(`${API_BASE_URL}/api/login`, loginParams);
    }

    logout(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/logout`);
    }
}

export default new LoginService();
