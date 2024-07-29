import React, {useCallback} from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../model/TokenObtainPairModel";
import {authService} from "../service/axious";

const AuthFormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<TokenObtainPairModel>({
        defaultValues: {username: "Lariok222", password: "Pa$$word1"}
    })

    const onSubmitHandler = (data: TokenObtainPairModel) => {
        authService.auth(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type={'text'} placeholder={'username'} {...register('username')}></input>
                <input type={'text'} placeholder={'password'} {...register('password')}></input>
                <button>send</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;