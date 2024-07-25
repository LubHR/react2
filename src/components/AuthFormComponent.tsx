import React from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {authService} from "../service/api.service";

const AuthFormComponent = () => {

    let {
        handleSubmit,
        register
    } = useForm<TokenObtainPairModel>({defaultValues:
            {
                username:'Liubomyr34',
                password:'Pas$word213'
            }});

    const onSubmitForm = (data:TokenObtainPairModel) =>{
        authService.authenticate(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type={'text'} {...register('username')} placeholder={'username'}/>
                <input type={'text'} {...register('password')} placeholder={'password'}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;