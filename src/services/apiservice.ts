import axios from "axios";
import {UserModule} from "../module/UserModule";
import {PostModule} from "../module/PostModule";

const axiosInstant = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Content-Type': 'application/json' },
})

const userService = {
    getAllUsers: async () =>{
        const response = await axiosInstant.get<UserModule[]>('/users')
        return response.data
    }
}
const postService = {
    getAllPosts: async () =>{
        const response = await axiosInstant.get<PostModule[]>('/posts')
        return response.data
    }
}

export {
    userService,
    postService
}