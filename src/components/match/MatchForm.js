import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { MatchContext } from "./MatchProvider";
import "./Match.css"

export const MatchForm = () => {
    const { matches, addMatches, getMatchById, getMatches } = useContext(MatchContext)
    const [user] = useState({ name: "" })
    const history = useHistory()
    const { matchId } = useParams()


    // useEffect(() => {
    //     const currentMatch = matches
    // })

    // useEffect(() => {
    //     debugger
    //     getMatches().then(() => {
    //         if (matchId) {
    //             getMatchById(matchId)
    //         }
    //     })
    // })

    const [match, setMatch] = useState({
        userId: parseInt(sessionStorage.getItem("app_user_id")),
        opponentsName: "",
        userWin: false,
        timeStamp: ""
    })

    const handleControlledInputChange = (event) => {
        const newMatch = { ...match }
        newMatch[event.target.id] = event.target.value
        newMatch.timeStamp = Date.now()
        setMatch(newMatch)
    }

    const handleSaveMatch = () => {
        if (match.opponentsName === "") {
            window.alert("Please enter your opponent's name")
        } else {
            addMatches(match)
                .then(() => history.push(`matches/${matchId}/throws/create`)) //comeack here and add throw ID
            // .then(() => history.push(`/throws/create`))
        }
    }

    return (
        <form className="matchForm">
            <h2>Start Match</h2>
            <fieldset>
                <div>Welcome, {user.name}</div>
                <div className="form-group">
                    <label htmlFor="opponentsName">Enter your challenger's name</label>
                    <input type="text" id="opponentsName" required className="form-control" placeholder="Opponent's Name" onChange={handleControlledInputChange} value={match.opponentsName} />
                </div>
                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault()
                        handleSaveMatch()
                    }}>
                    Let's throw some axes!
            </button>
            </fieldset>
        </form>
    )
}