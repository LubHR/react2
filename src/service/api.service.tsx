import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponce} from "../models/UserResponce";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefreshPairModel} from "../models/TokenRefreshPairModel";

let axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
})

const userService = {
    saveUser: async (data:UserModel):Promise<boolean> =>{
        let response = await axiosInstance.post<UserResponce>("/users",data);
        return !!response.data.id || false
    }
}

const authService = {
    authenticate: async (data:TokenObtainPairModel):Promise<boolean> => {
        let auth = await axiosInstance.post<TokenRefreshPairModel>('/auth',data);
        console.log(auth)
        return !!auth

    }
}

export {userService,authService}