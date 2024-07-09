import React, {useEffect, useState} from 'react';
import {IuserModel} from "../Props/IuserModel";
import UserComoonent from "../component/UserComoonent";
import {userApi} from "../services/urls";

const UsersPage = () => {

    const [users, setUsers] = useState<IuserModel[]>([])

    useEffect(() => {
        userApi.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            <UserComoonent users={users}/>
        </div>
    );
};

export default UsersPage;