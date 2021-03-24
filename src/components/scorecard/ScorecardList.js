import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { ScorecardCard } from "./ScorecardCard"
import { MatchContext } from "../match/MatchProvider"
import "./Scorecard.css"

export const ScorecardList = ({ match }) => {
    const { matches, getMatches, deleteMatch } = useContext(MatchContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const userScorecards = matches.filter(matches => currentUserId === matches.userId)
    const history = useHistory()

    useEffect(() => {
        getMatches()
    }, [])

    return (
        <>
            <h2>ScoreCards</h2>
            <div className="scorecards">
                {userScorecards.map(scorecard => {
                    return <ScorecardCard key={scorecard.id} scorecard={scorecard} />
                })}
            </div>
        </>
    )
}