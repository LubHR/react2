import axios, {AxiosResponse} from "axios";
import {IuserModel} from "../Model/IuserModel";
import {IPostModel} from "../Model/IpostModel";
import {ICommentModel} from "../Model/IcommentModel";

let baseUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
})

const userApi = {
    getAllUsers: ():Promise<AxiosResponse<IuserModel[]>> =>{
        return baseUrl.get('/users')
    }
}

const postApi = {
    getAllPosts: ():Promise<AxiosResponse<IPostModel[]>> =>{
        return baseUrl.get('/posts')
    }
}

const commentsApi = {
    getAllComments: ():Promise<AxiosResponse<ICommentModel[]>> =>{
        return baseUrl.get('/comments')
    }
}

export {
    userApi,
    postApi,
    commentsApi,
}

