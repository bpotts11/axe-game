import React, { useContext, useState } from "react"
import { useParams } from 'react-router-dom'
import { ThrowContext } from "./ThrowProvider";
import "./Throw.css";

export const ThrowForm = () => {
    const { addThrow } = useContext(ThrowContext)
    let [countThrows, setCountThrows] = useState(1)
    const { matchId } = useParams()

    const [throwObj, setThrow] = useState({
        userThrow: "",
        opponentsThrow: ""
    })


    // This counts the number of times the save button has been clicked so it keeps track of what throw the user is on
    const handleThrowChange = () => {
        const newThrowClicks = ++countThrows
        setCountThrows(newThrowClicks)
    }

    const handleControlledInputChange = (event) => {
        const newThrow = { ...throwObj }
        newThrow[event.target.id] = event.target.value
        setThrow(newThrow)
    }

    const handleNextThrow = () => {
        if (throwObj.userThrow === "") {
            window.alert("Please enter your score")
        } else if (throwObj.opponentsThrow === "") {
            window.alert("Please enter your opponent's score")
        } else {
            //This is where the throw order is being added
            const throwToBeSaved = { ...throwObj }
            throwToBeSaved.throwOrder = countThrows
            throwToBeSaved.matchId = matchId
            addThrow(throwToBeSaved)
                .then(() => {
                    //this resets the for total for the throws to blank
                    const newThrow = { ...throwObj }
                    newThrow["userThrow"] = ""
                    newThrow["opponentsThrow"] = ""
                    setThrow(newThrow)
                    handleThrowChange()
                })
        }
    }



    return (
        <>
            {countThrows <= 5 ? <form className="throwForm">
                <h2>Throw:
                <div>
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
                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault()
                        handleNextThrow()
                    }}>
                    Save
                </button>
            </form> : <div>Match Complete</div>
            }
        </>
    )
}
