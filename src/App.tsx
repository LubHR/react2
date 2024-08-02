import React, {createContext, useContext, useState} from 'react';
import './App.css';
import MainComponent from "./component/MainComponent";
import Incrementor from "./component/Incrementor";
import Decrementor from "./component/Decrementor";

type StoreType = {
    counter: number,
    inc: () => void,
    dec: () => void
}

let defaultValues = {
    counter: 0,
    inc: () => {},
    dec: () => {}
}

let MyContext = createContext<StoreType>(defaultValues)
export const useMyContext = ():StoreType => useContext(MyContext)

const App = () => {

    const [globalCounter, setGlobalCounter] = useState<number>(0)
    
    return (
        <div>
            <MyContext.Provider value={{
                counter: globalCounter,
                inc: ()=>{setGlobalCounter(prevState => ++prevState)},
                dec: ()=>{setGlobalCounter(prevState => --prevState)},
            }}>
            <MainComponent/>
            <Incrementor/>
            <Decrementor/>
            </MyContext.Provider >
        </div>
    )
}
export default App;
