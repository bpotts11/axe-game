import React, { useState, createContext } from "react"

export const MatchContext = createContext()

export const MatchProvider = (props) => {
    const [matches, setMatches] = useState([])

    const getMatches = () => {
        return fetch("http://localhost:8088/matches?_embed=throws&_expand=user")
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
            .then(matchId => matchId.json())
    }

    const deleteMatch = matchId => {
        return fetch(`http://localhost:8088/matches/${matchId}`, {
            method: "DELETE"
        })
            .then(getMatches)
    }

    const editMatch = match => {
        return fetch(`http://localhost:8088/matches/${match.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(match)
        })
            .then(getMatches)
    }

    return (
        <MatchContext.Provider value={{
            matches, getMatches, getMatchById, addMatches, deleteMatch, editMatch
        }}>
            {props.children}
        </MatchContext.Provider>
    )
}