import axios from "axios";
import {IUser} from "../modules/IUser";
import {baseURL, urls} from "../constants/urls";
import {PostModule} from "../modules/PostModule";

let axiosInstance = axios.create({
    baseURL: baseURL,
})

export const usersService = {
    getAll: async ():Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base)
        return response.data
    },
    getById: async (id:number):Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(id))
        return response.data
    }
}

export const postsService = {
    getAll: async ():Promise<PostModule[]> => {
        const response = await axiosInstance.get<PostModule[]>(urls.users.base)
        return response.data
    },
    getById: async (id:number):Promise<PostModule> => {
        const response = await axiosInstance.get<PostModule>(urls.users.byId(id))
        return response.data
    }
}