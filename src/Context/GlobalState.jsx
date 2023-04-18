import React, { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from './AppReducer'
import axios from "axios";
const initialState = {
    submission: [axios.get('https://unibackend.azurewebsites.net/api/topic')],
    user: [axios.get('https://unibackend.azurewebsites.net/api/user')],
    department: [axios.get('https://unibackend.azurewebsites.net/api/department')],
    role: [axios.get('https://unibackend.azurewebsites.net/api/role')]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [data, setData] = useState([])
    const getData = () => {
        axios.get('https://unibackend.azurewebsites.net/api/topic')
            .then((getData) => {
                setData(getData.data)
            })
    }
    useEffect(() => {

    })
    // const setId = (id) => {
    //     console.log(id)
    // }
    const deleteItem = (id) => {
        axios.delete(`https://unibackend.azurewebsites.net/api/topic/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <GlobalContext.Provider value={{
            submission: state.submission,
            role: state.role,
            department: state.department,
            category: state.category,
            user: state.user,


        }}>
            {children}
        </GlobalContext.Provider>
    )
}