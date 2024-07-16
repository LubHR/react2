import axios from "axios";
import {baseUrl, urls} from "../constants/baseUrls";
import {ICharacterRespose} from "../models/ICharacterRespose";

const axiosInstant = axios.create({
    baseURL: baseUrl,
    headers:{}
})

const characterService = {
    getAll: async (page:string)=>{
        const axiosResponse = await axiosInstant.get<ICharacterRespose>(urls.character.all,
            {
                params:page
            })
        return axiosResponse;
    }
}

export {
    characterService,
    axiosInstant
}