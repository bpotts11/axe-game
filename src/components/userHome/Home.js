import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider"

export const Home = () => {
    const userId = parseInt(localStorage.getItem("app_user_id"))
    const [user, setUser] = useState({ name: "" })

    const { loggedUsers, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const newestUser = loggedUsers.find(user => user.id === userId)
        if (newestUser) setUser(newestUser)
    }, [loggedUsers])

    return (
        <>
            <h2>USER</h2>
        </>
    )
}