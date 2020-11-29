/** 
 * 优化
 * https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react
 */
import React, { useReducer, useContext } from "react";

const initState = {
    isLogin: false,
    user: {
        id: 100,
        name: 'jack'
    },
}


type IState = {
    isLogin: boolean,
    user: {
        id: string,
        name: string
    },
}


interface IContextProps {
    state: IState;
    dispatch: ({type}:{type:string}) => void;
  }

const UserContext = React.createContext(initState);

const reducer = (state: any, action: any ) => {
    console.log(action, state);
    console.log({
        ...state,
        isLogin: action.playload
    });
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: action.playload
            }
            break;
    
        default:
            break;
    }
}

const UserContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        // @ts-ignore
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {
    UserContextProvider,
    UserContext,
}

