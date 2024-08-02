import axios from "axios";
import {TokenObtainPairModel} from "../model/TokenObtainPairModel";
import {UserRespoceModel} from "../model/UserRespoceModel";
import {TokenRefreshModel} from "../model/TokenRefreshModel";
import {retrivelocalStorage} from "../helpers/helpers";
import {CarsPaginatedModel} from "../model/CarsPaginatedModel";

const axiosInstant = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
})

axiosInstant.interceptors.request.use(requestObject => {
    if(localStorage.getItem('tokenPair') && (requestObject.url !== 'auth' && requestObject.url !== 'auth/refresh')) {
        requestObject.headers.set('Authorization', 'Bearer ' +
            retrivelocalStorage<TokenRefreshModel>('tokenPair').access);
    }
    return requestObject
})

const userService = {
    saveUser: async (data: TokenObtainPairModel):Promise<boolean> => {
        let responce = await axiosInstant.post<UserRespoceModel>('/users',data);
        return !!responce.data.id || false
    }
}

const authService = {
    auth: async (data: TokenObtainPairModel) => {
        const responce = await axiosInstant.post<TokenRefreshModel>('/auth',data);
        localStorage.setItem('tokenPair',JSON.stringify(responce.data));
    }
}

const carsService = {
    getCars: async ():Promise<CarsPaginatedModel> => {
        const responce = await axiosInstant.get<CarsPaginatedModel>('/cars');
        return responce.data;
    }
}

export {userService,authService,carsService}