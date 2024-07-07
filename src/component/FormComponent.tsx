import React, {FormEvent, useState} from 'react';
import {useForm} from "react-hook-form";

type IFromType = {
    username:string,
    password:string,
    age:number
}

const FormComponent = () => {

    let {register,handleSubmit} = useForm<IFromType>({
        mode: 'all',
    });

    let formSubmitHooks = (data: IFromType) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHooks)}>
                <input type={"text"} {...register('username')}/>
                <input type={"text"} {...register('password')}/>
                <input type={"number"} {...register('age')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;