import React, {FC, useEffect, useState} from 'react';
import {IuserProps} from "../../modules/userIProps";

const UsersComponent:FC<IuserProps> = ({id}) => {

    const [user, setUser] = useState<any>({})

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users/'+ id)
            .then(res => res.json())
            .then(value => {
                setUser(value)
            })
    },[id])

    return (
        <div>
            {
                <h2>{user.id},{user.name}</h2>
            }
        </div>
    );
};

export default UsersComponent;