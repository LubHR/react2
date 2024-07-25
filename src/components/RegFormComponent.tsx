import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {UserModel} from "../models/UserModel";
import {userService} from "../service/api.service";

const RegFormComponent = () => {

    let {
        handleSubmit,
        register
    }= useForm<UserModel>()

    const [registrated, setRegistrated] = useState<boolean>(false)

    const onSubmitForm = async (data:UserModel) => {
        const isReg =await userService.saveUser(data);
        setRegistrated(isReg)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type="text" {...register('username')} placeholder={'username'}/>
                <input type="text" {...register('password')} placeholder={'password'}/>
                <button>send</button>
            </form>
            {
                registrated && (<div>nice,i love you</div>)
            }
        </div>
    );
};

export default RegFormComponent;