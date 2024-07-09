import React, {FC} from 'react';
import {IuserModel} from "../Props/IuserModel";

interface IUeserPageProps {
    users: IuserModel[];
}

const UserComoonent: FC<IUeserPageProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user => <div key={user.id}><h3>{user.id}-{user.name},{user.username},{user.email}</h3>
                <p>Address - {user.address.street}, {user.address.city}</p>
                </div>)
            }
        </div>
    );
};

export default UserComoonent;