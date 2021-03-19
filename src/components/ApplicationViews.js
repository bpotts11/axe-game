import React from "react"
import { Route, Router } from "react-router-dom"
import { MatchForm } from "./match/MatchForm"
import { Home } from "./user/Home"
import { UserProvider } from "./user/UserProvider"
import { MatchProvider } from "./match/MatchProvider"
import { MatchButton } from "./match/MatchButton"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <MatchProvider>
                    <Route exact path="/">
                        <Home />
                        <MatchButton />
                    </Route>
                    <Route path="/matches/create">
                        <MatchForm />
                    </Route>
                </MatchProvider>
            </UserProvider>
        </>
    )
}