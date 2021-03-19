import React, { useState, createContext } from "react"

export const MatchContext = createContext()

export const MatchProvier = (props) => {
    const [matches, setMatches] = useState([])

    const addMatches = matchObj => {
        return fetch("http://localhost:8088/matches", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(matchObj)
        })
    }

    return (
        <MatchContext.Provider value={{
            matches, addMatches
        }}>
            {props.children}
        </MatchContext.Provider>
    )
}