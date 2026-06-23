import axios from "axios";
import TokenService from "./TokenService";
import API_BASE_URL from "./ApiConfig";

class MealTypeService{

    getAllMealTypes(){
        return axios.get(`${API_BASE_URL}/api/mealType/getAllMealTypes`);
    }
    createMealType(fd){
        TokenService.setTokenInHeader();
        return axios.post(`${API_BASE_URL}/api/mealType/createMealType`, fd);
    }

    deleteMealType(mealTypeId){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/mealType/deleteMealType/${mealTypeId}`);
    }

    updateMealType(mealType){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/mealType/updateMealType`, mealType);
    }

}

export default new MealTypeService();
