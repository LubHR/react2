import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../modules/IUser";
import {AxiosError} from "axios/index";
import {usersService} from "../../services/api.services";

type UserSliceType = {
    users:IUser[];
    isLoaded:boolean
}

const initialState:UserSliceType ={
    users: [],
    isLoaded:false,
}

const loadUsers = createAsyncThunk('userSlice/loadUsers',async (_,thunkAPI)=>{
    try {
        let users = await usersService.getAll()
        return thunkAPI.fulfillWithValue(users)
    }catch (e){
        let error = e as AxiosError
        return thunkAPI.fulfillWithValue(error?.response?.data)
    }
})

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: builder=> builder
        .addCase(loadUsers.fulfilled,
            (state, action) => {state.users = action.payload})

        .addCase(loadUsers.rejected, (state, action)=>{
            console.log(action.payload)
        })
})