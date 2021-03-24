import React, { useContext, useEffect, useState } from "react"
import { ScorecardCard } from "./ScorecardCard"
import { MatchContext } from "../match/MatchProvider"
import "./Scorecard.css"

export const ScorecardList = () => {
    const { matches, getMatches } = useContext(MatchContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const userScorecards = matches.filter(matches => currentUserId === matches.userId)

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