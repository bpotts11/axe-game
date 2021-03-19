import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { MatchContext } from "./MatchProvider";
import "./Match.css"
import { UserContext } from "../user/UserProvider";

export const MatchForm = () => {
    const { addMatches } = useContext(MatchContext)
    const { loggedUsers, getUsers } = useContext(UserContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const [user, setUser] = useState({ name: "" })
    const history = useHistory()

    const [match, setMatch] = useState({
        userId: currentUserId,
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
                .then(() => history.push("/matches"))
            //come back here and fix this push to go to tasks once you have that route set up
            // DO NOT FORGET THIS
            // when you inevitable forget this tell yourself you told yourself so that you would forget it
            // I hope this is enough comments that you will notice this in the future
        }
    }

    // this useEffect allows me to enter the users name in the div
    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const newestUser = loggedUsers.find(user => user.id === currentUserId)
        if (newestUser) setUser(newestUser)
    }, [loggedUsers])
    // end of useEffect for allowing user name

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