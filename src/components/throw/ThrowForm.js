import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { ThrowContext } from "./ThrowProvider";
import "./Throw.css";

export const ThrowForm = () => {
    const { addThrow } = useContext(ThrowContext)
    const history = useHistory()

    const [throwObj, setThrow] = useState({
        matchId: "", // come back here and figure out how to make this automatically be populated with match id
        userThrow: "",
        opponentsThrow: "",
        throwOrder: ""
    })

    const handleControlledInputChange = (event) => {
        const newThrow = { ...throwObj }
        newThrow[event.target.id] = event.target.value
        setThrow(newThrow)
    }

    const handleSaveThrow = () => {
        if (throwObj.userThrow === "") {
            window.alert("Please enter your score")
        } else if (throwObj.opponentsThrow === "") {
            window.alert("Please enter your opponent's score")
        } else {
            addThrow(throwObj)
                .then(() => history.push("/"))
            //come back to this area and decide there you and going to push this state to?
            // DO NOT FORGET THIS
            //see if there is a way to only limit this to run 5 times
        }
    }

    return (
        <form className="throwForm">
            <h2>Throw</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userThrow">Your throw</label>
                    <input type="text" id="userThrow" required className="form-control" onChange={handleControlledInputChange} value={throwObj.userThrow} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="opponentsThrow">Opponent throw</label>
                    <input type="text" id="opponentsThrow" required className="form-control" onChange={handleControlledInputChange} value={throwObj.opponentsThrow} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    handleSaveThrow()
                }}>
                Save
            </button>
        </form>
    )
}
