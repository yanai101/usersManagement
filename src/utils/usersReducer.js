import React , { createContext , useReducer } from 'react';
import { ACTIONS } from '../config/config';


export function usersReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD: {
            state.push({...action.formData})
            return [...state];
        }
        case ACTIONS.UPDATE: {
            const {formData} = action;
            const {index}  = formData;
            delete formData.index;
            state[index] = {...formData};
            return [...state];
        }
        default: {
            return ;
        }
    }
}
const initValue = [

    {
        "safe": "Safe 3",
        "password": "k2kaA",
        "username": "yanai edri",
        "email": "mail@gmail.com",
        "adminType": "ADMIN_4"
    },
    {
        "safe": "Safe 2",
        "password": "kakSaA",
        "username": "yanai",
        "email": "mail2@gmail.com",
    }
]
;


export const UsersContext = createContext(null);

export const UserProvider = ({children}) =>{
    
    const [userState, dispatch] = useReducer(usersReducer, initValue);

    return(
        <UsersContext.Provider value={{userState, dispatch}}>
            {children}
        </UsersContext.Provider>
    )
}