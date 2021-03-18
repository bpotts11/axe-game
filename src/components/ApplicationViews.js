import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./userHome/Home"
import { UserProvider } from "./userHome/UserProvider"

export const ApplicationViews = () => {
    return (
        <>
            <UserProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </UserProvider>
        </>
    )
}