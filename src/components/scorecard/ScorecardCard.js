import React, { useContext } from "react"
import { useHistory } from "react-router"
import { MatchContext } from "../match/MatchProvider"
import "./Scorecard.css"

export const ScorecardCard = ({ scorecard }) => {
    const { deleteMatch } = useContext(MatchContext)
    const history = useHistory()

    const handleDelete = () => {
        deleteMatch(scorecard.id)
            .then(() => {
                history.push("/scorecards")
            })
    }

    //This is totaling the users score from their throws
    const userThrowNumber = scorecard.throws?.map((n) => parseInt(n.userThrow))
    const userTotal = userThrowNumber.reduce((total, amount) => total + amount)
    //This is totaling the opponents score from their throws
    const opponentThrowNumber = scorecard.throws?.map((n) => parseInt(n.opponentsThrow))
    const opponentTotal = opponentThrowNumber.reduce((total, amount) => total + amount)

    // This is building up the scorecard with the info from matches and mapping through throws
    if (userTotal > opponentTotal) {
        return (
            <section className="scorecard">
                <div className="scorecard__date">{new Date(scorecard.timeStamp).toLocaleDateString('en-US')}</div>
                <section className="userSection">
                    <div className="scorecard__userName"><b>{scorecard.user?.name}</b></div>
                    <ul className="scorecard__userThrows">
                        {scorecard.throws?.map(throwObj => <li key={throwObj.id}><b>T{throwObj.throwOrder} - {throwObj.userThrow}</b></li>)}
                    </ul>
                    <div><b>Total Score: {userTotal}</b></div>
                </section>
                <section className="opponentSection">
                    <div className="scorecard__opponentsName">{scorecard.opponentsName}</div>
                    <ul className="scorecard__userThrows">
                        {scorecard.throws?.map(throwObj => <li key={throwObj.id}>T{throwObj.throwOrder} - {throwObj.opponentsThrow}</li>)}
                    </ul>
                    <div>Total Score: {opponentTotal}</div>
                </section>
                <button onClick={() => { history.push(`/matches/edit/${scorecard.id}`) }}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </section>
        )
    } else {
        return (
            <section className="scorecard">
                <div className="scorecard__date">{new Date(scorecard.timeStamp).toLocaleDateString('en-US')}</div>
                <section className="userSection">
                    <div className="scorecard__userName">{scorecard.user?.name}</div>
                    <ul className="scorecard__userThrows">
                        {scorecard.throws?.map(throwObj => <li key={throwObj.id}>T{throwObj.throwOrder} - {throwObj.userThrow}</li>)}
                    </ul>
                    <div>Total Score: {userTotal}</div>
                </section>
                <section className="opponentSection">
                    <div className="scorecard__opponentsName"><b>{scorecard.opponentsName}</b></div>
                    <ul className="scorecard__userThrows">
                        {scorecard.throws?.map(throwObj => <li key={throwObj.id}><b>T{throwObj.throwOrder} - {throwObj.opponentsThrow}</b></li>)}
                    </ul>
                    <div><b>Total Score: {opponentTotal}</b></div>
                </section>
                <button onClick={() => { history.push(`/matches/edit/${scorecard.id}`) }}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </section>
        )
    }
}