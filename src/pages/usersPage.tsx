import React, {useEffect, useState} from 'react';
import {IuserModel} from "../Model/IuserModel";
import UsersComoonent from "../component/UsersComoonent";
import {userApi} from "../services/urls";

const UsersPage = () => {

    const [users, setUsers] = useState<IuserModel[]>([])

    useEffect(() => {
        userApi.getAllUsers().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            <UsersComoonent users={users}/>
        </div>
    );
};

export default UsersPage;