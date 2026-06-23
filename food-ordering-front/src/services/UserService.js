import axios from "axios";
import TokenService from "./TokenService";
import API_BASE_URL from "./ApiConfig";


class UserService{

    getAllEmployees () {
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/user/getAllEmployees`);
    }

    getAllUsers(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/user/getAllUsers`);
    }

    createEmployee(user){
        TokenService.setTokenInHeader();
        return axios.post(`${API_BASE_URL}/api/user/createEmployee`, user);
    }

    getEmployeeById(employeeId){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/user/${employeeId}`);
    }
    //moze i samo employee da se salje, ne mora i id
    updateEmployee(employeeId, employee){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/user/updateUserByIdAndDetails/${employeeId}`, employee);
    }
    //logicko brisanje, setuje se isDeleted na true
    deleteEmployee(employeeId){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/user/deactivateUser/${employeeId}`);
    }

    registration(user){
        return axios.post(`${API_BASE_URL}/api/user/registration`, user);
    }

    getCurrentUser(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/user/getCurrentUser`);
    }

    updateUser(user){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/user/updateUser`, user);
    }

    changePassword(passwordObj){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/user/changePassword`, passwordObj);
    }

}

export default new UserService();
