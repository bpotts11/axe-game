import React, { useState, createContext } from "react"

export const MatchContext = createContext()

export const MatchProvider = (props) => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        return fetch("http://localhost:8088/matches")
            .then(res => res.json())
            .then(setMatches)
    }

    const getMatchById = (id) => {
        return fetch(`http://localhost:8088/matches/${id}`)
            .then(res => res.json())
    }

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
            matches, getMatches, getMatchById, addMatches
        }}>
            {props.children}
        </MatchContext.Provider>
    )
}