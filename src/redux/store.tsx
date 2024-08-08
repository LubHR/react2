import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserModule} from "../module/UserModule";
import {userService} from "../services/apiservice";
import {AxiosError} from "axios/index";

type UserSliceType = {
    user: UserModule[],
    isLoaded: boolean
}

const userInitState:UserSliceType = {
    user:[],
    isLoaded:false
}

const loadUsers = createAsyncThunk(
    'userSlice1/loadUsers',
    async (_,thunkAPI) => {
        try {
            const response = await userService.getAllUsers();
            return thunkAPI.fulfillWithValue(response)
        }catch (e){
            const e1 = e as AxiosError
            return thunkAPI.rejectWithValue(e1)
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers:{},
    extraReducers:(builder)=>builder.addCase(loadUsers.fulfilled,
        (state, action) => {state.user = action.payload})
})

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
    }
});



