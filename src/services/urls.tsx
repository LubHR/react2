import axios, {AxiosResponse} from "axios";
import {IuserModel} from "../Props/IuserModel";

let baseUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
})

const userApi = {
    getAllUsers: ():Promise<AxiosResponse<IuserModel[]>> =>{
        return baseUrl.get('/users')
    }
}

export {
    userApi
}

