import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/User-Component/users-Comonent";

const App = () => {

    const [id, setId] = useState<number>(1)

    const incrementId = () =>{
        setId(prevState => prevState + 1)
    }

    return (
        <div>
            <UsersComponent id={id} name={'fgdfd'}/>
            <button onClick={incrementId}>inc id</button>

        </div>
    )
}
export default App;
