import React, { useContext, useEffect, useState } from "react"
import "./Match.css"
import { useHistory, useParams } from 'react-router-dom';

export const MatchForm = () => {

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    const [match, setMatch] = useState({
        userId: "",
        opponentsName: "",
        userWin: "",
        date: ""
    })

    return (
        <form className="taskForm">
            <h2>Test</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="name" required autoFocus className="form-control" />
                </div>
            </fieldset>
        </form>
    )
}