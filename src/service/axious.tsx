import axios from "axios";
import {TokenObtainPairModel} from "../model/TokenObtainPairModel";
import {UserRespoceModel} from "../model/UserRespoceModel";
import {TokenRefreshModel} from "../model/TokenRefreshModel";

const axiosInstant = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
})

const userService = {
    saveUser: async (data: TokenObtainPairModel):Promise<boolean> => {
        let responce = await axiosInstant.post<UserRespoceModel>('/users',data);
        return !!responce.data.id || false
    }
}

const authService = {
    auth: async (data: TokenObtainPairModel) => {
        let responce = await axiosInstant.post<TokenRefreshModel>('/auth',data);
        console.log(responce.data);
    }
}

export {userService,authService}