import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../model/TokenObtainPairModel";
import {userService} from "../service/axious";

const RegFormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<TokenObtainPairModel>()

    const [isReg, setIsReg] = useState<boolean>(false)

    const onsubmitHandler = async (data: TokenObtainPairModel) => {
        let respoce = await userService.saveUser(data)
        setIsReg(respoce)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmitHandler)}>
                <input type={'text'} placeholder={'username'} {...register('username')}></input>
                <input type={'text'} placeholder={'password'} {...register('password')}></input>
                <button>send</button>
            </form>
            {isReg && (<div>done</div>)}
        </div>
    );
};

export default RegFormComponent;