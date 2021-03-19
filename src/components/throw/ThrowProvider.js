import React, { useState, createContext } from "react"

export const ThrowContext = createContext()

export const ThrowProvider = (props) => {
    const [throws, setThrows] = useState([])

    const getThrows = () => {
        return fetch("http://localhost:8088/throws")
            .then(res => res.json())
            .then(setThrows)
    }

    const getThrowById = (id) => {
        return fetch(`http://localhost:8088/throws/${id}`)
            .then(res => res.json())
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

    const deleteThrow = (throwId) => {
        return fetch(`http://localhost:8088/throws/${throwId}`, {
            method: "DELETE"
        })
            .then(getThrows)
    }

    const editThrow = (throwObj) => {
        return fetch(`http://localhost:8088/throws/${throwObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(throwObj)
        })
            .then(getThrows)
    }

    return (
        <ThrowContext.Provider value={{
            throws, getThrows, getThrowById, addThrow, deleteThrow, editThrow
        }}>
            {props.children}
        </ThrowContext.Provider>
    )
}