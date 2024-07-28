import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponce} from "../models/UserResponce";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefreshPairModel} from "../models/TokenRefreshPairModel";
import {retrivelocalStorage} from "../helpers/retrivelocalStorage";
import {CarsPaginationModel} from "../models/CarsPaginationModel";

let axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
})

axiosInstance.interceptors.request.use(requestObject => {
    if(localStorage.getItem('tokenPair') && requestObject.url !== "/auth"){
        requestObject.headers.set("Authorization", "Bearer "
            + retrivelocalStorage<TokenRefreshPairModel>('tokenPair').access)
    }
    return requestObject;
} )

const userService = {
    saveUser: async (data:UserModel):Promise<boolean> =>{
        let response = await axiosInstance.post<UserResponce>("/users",data);
        return !!response.data.id || false
    }
}

const authService = {
    authenticate: async (data:TokenObtainPairModel):Promise<void> => {
        let auth = await axiosInstance.post<TokenRefreshPairModel>('/auth',data);
        localStorage.setItem('tokenPair', JSON.stringify(auth.data));
    }
}

const carService = {
    getCars: async ():Promise<CarsPaginationModel> =>{
        let responce = await axiosInstance.get<CarsPaginationModel>('/cars')
        return responce.data
    }
}

export {userService,authService,carService}