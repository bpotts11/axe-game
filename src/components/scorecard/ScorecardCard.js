import React from "react"
import "./Scorecard.css"

export const ScorecardCard = ({ scorecard }) => (
    <section className="scorecard">
        <div className="scorecard__date">{new Date(scorecard.timeStamp).toLocaleDateString('en-US')}</div>
        <div className="scorecard__userName">{scorecard.user?.name}</div>
        <ul className="scorecard__userThrows">
            {scorecard.throws?.map(throwObj => <li key={throwObj.id}>Throw {throwObj.throwOrder} - {throwObj.userThrow}</li>)}
        </ul>
        <div className="scorecard__opponentsName">{scorecard.opponentsName}</div>
        <ul className="scorecard__userThrows">
            {scorecard.throws?.map(throwObj => <li key={throwObj.id}>Throw {throwObj.throwOrder} - {throwObj.opponentsThrow}</li>)}
        </ul>
    </section>
)