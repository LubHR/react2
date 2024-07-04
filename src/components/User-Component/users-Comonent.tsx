import React, {useEffect, useState} from 'react';
import {IuserProps} from "../../modules/userIProps";
import {getUsers} from "./api.users";

const UsersComponent = () => {

    const [user, setUser] = useState<IuserProps[]>([])

    useEffect(() =>{
        getUsers().then((value:IuserProps[]) => {
                setUser(value)
            })
    },[])

    return (
        <div>
            {
                user.map(value => <h2>{value.id} - {value.name}</h2>)
            }
        </div>
    );
};

export default UsersComponent;