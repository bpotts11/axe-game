import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { ThrowContext } from "./ThrowProvider";
import "./Throw.css";

export const ThrowForm = () => {
    const { addThrow } = useContext(ThrowContext)
    const history = useHistory()
    let [countThrows, setCountThrows] = useState(1)

    const [throwObj, setThrow] = useState({
        matchId: "", // come back here and figure out how to make this automatically be populated with match id
        userThrow: "",
        opponentsThrow: "",
        throwOrder: countThrows
    })


    const handleThrowChange = () => {
        const newThrowClicks = ++countThrows
        setCountThrows(newThrowClicks)
    }

    const handleControlledInputChange = (event) => {
        const newThrow = { ...throwObj }
        newThrow[event.target.id] = event.target.value
        setThrow(newThrow)
    }
    // const handleThrowChange = (event) => {
    //     const newThrowNumber = { ...++countThrows }
    //     newThrowNumber[event.target.id] = event.target.value
    //     setCountThrows(newThrowNumber)
    // }
    // const ThrowIdInfo = (event) => {
    //     const newThrowClicks = ++countThrows
    //     setCountThrows(newThrowClicks)
    // }

    const handleSaveThrow = () => {
        if (throwObj.userThrow === "") {
            window.alert("Please enter your score")
        } else if (throwObj.opponentsThrow === "") {
            window.alert("Please enter your opponent's score")
        } else {
            addThrow(throwObj)
                .then(() => history.push("/"))
        }
    }
    const handleNextThrow = () => {
        if (throwObj.userThrow === "") {
            window.alert("Please enter your score")
        } else if (throwObj.opponentsThrow === "") {
            window.alert("Please enter your opponent's score")
        } else {
            addThrow(throwObj)
                .then(() => history.push("/throws/create"))
        }
    }


    const SaveThrowButton = () => {
        if (parseInt(throwObj.throwOrder) === 5) {
            return (
                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault()
                        handleSaveThrow()
                    }}>
                    Save
                </button>
            )
        } else {
            return (
                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault()
                        handleNextThrow()
                        handleThrowChange()
                    }}>
                    Next Throw
                </button>
            )
        }
    }


    return (
        <form className="throwForm">
            <h2>Throw:
                <div onChange={handleThrowChange} value={throwObj.throwOrder}>
                    {countThrows}
                </div>
            </h2>
            <p>{countThrows}</p>
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
            <SaveThrowButton />
        </form>
    )
}
