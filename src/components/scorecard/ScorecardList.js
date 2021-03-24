import React, { useContext, useEffect } from "react"
import { ScorecardCard } from "./ScorecardCard"
import { MatchContext } from "../match/MatchProvider"
import "./Scorecard.css"

export const ScorecardList = ({ match }) => {
    const { matches, getMatches } = useContext(MatchContext)
    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))
    const userScorecards = matches.filter(matches => currentUserId === matches.userId)

    //Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getMatches()
    }, [])

    //this is mapping through all the matches and only returning the scorecards for the logged in user
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