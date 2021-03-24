import React, { useState, createContext } from "react"

export const ThrowContext = createContext()

export const ThrowProvider = (props) => {
    const [throws, setThrows] = useState([])

    const getThrows = () => {
        return fetch("http://localhost:8088/throws")
            .then(res => res.json())
            .then(setThrows)
    }

    const addThrow = (throwObj) => {
        return fetch("http://localhost:8088/throws", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(throwObj)
        })
            .then(getThrows)
    }

    return (
        <ThrowContext.Provider value={{
            throws, getThrows, addThrow
        }}>
            {props.children}
        </ThrowContext.Provider>
    )
}