import axios from "axios";
import TokenService from "./TokenService";
import API_BASE_URL from "./ApiConfig";

class MealService{

    getAllMeals(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/meal/getAllMeals`);
    }

    createMeal(fd){
        TokenService.setTokenInHeader();
        return axios.post(`${API_BASE_URL}/api/meal/createMeal`, fd);
    }

    deleteMeal(mealId){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/meal/deleteMeal/${mealId}`);
    }

    getAllMealTypes(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/mealType/getAllMealTypes`);
    }

    updateMeal(meal){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/meal/updateMeal`, meal);
    }

    getMealsByMealTypeId(mealTypeId){
        return axios.get(`${API_BASE_URL}/api/meal/getMealsByMealTypeId/${mealTypeId}`);
    }

    sendItemsForFinalOrder(itemsFromCartFinalOrder){
        // jedino ako je korisnik ulogovan, stavlja se token u header-u
        TokenService.setTokenInHeader();
        return axios.post(`${API_BASE_URL}/api/finalOrder/createFinalOrder`, itemsFromCartFinalOrder);
    }

    getFinalOrderById(finalOrderId){
        return axios.get(`${API_BASE_URL}/api/finalOrder/getFinalOrderById/${finalOrderId}`);
    }

    getOrderItemsByFinalOrderId(finalOrderId){
        return axios.get(`${API_BASE_URL}/api/finalOrder/getOrderItemsByFinalOrderId/${finalOrderId}`);
    }

    getAllActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/finalOrder/getAllActiveFinalOrders`);
    }
    
    getAllDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/finalOrder/getAllDeliveredFinalOrders`);
    }

    getMyActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/finalOrder/getAllMyActiveFinalOrders`);
    }

    getMyDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get(`${API_BASE_URL}/api/finalOrder/getAllMyDeliveredFinalOrders`);
    }

   changeFinalOrderStatus(finalOrderWithStatusAndId){
        TokenService.setTokenInHeader();
        return axios.put(`${API_BASE_URL}/api/finalOrder/changeStatus`, finalOrderWithStatusAndId);
    }

    deleteFinalOrder(finalOrderId){
        TokenService.setTokenInHeader();
        return axios.delete(`${API_BASE_URL}/api/finalOrder/deleteFinalOrder/${finalOrderId}`);
    }

}

export default new MealService();
