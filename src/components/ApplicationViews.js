import React from "react"
import { Route, Router } from "react-router-dom"
import { MatchForm } from "./match/MatchForm"
import { Home } from "./user/Home"
import { UserProvider } from "./user/UserProvider"
import { MatchProvider } from "./match/MatchProvider"
import { MatchButton } from "./match/MatchButton"
import { ThrowForm } from "./throw/ThrowForm"
import { ThrowProvider } from "./throw/ThrowProvider"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <MatchProvider>
                    <ThrowProvider>
                        <Route exact path="/">
                            <Home />
                            <MatchButton />
                        </Route>
                        <Route path="/matches/create">
                            <MatchForm />
                        </Route>
                        <Route path="/throws/create">
                            <ThrowForm />
                        </Route>
                    </ThrowProvider>
                </MatchProvider>
            </UserProvider>
        </>
    )
}