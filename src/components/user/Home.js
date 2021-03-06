import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider"

export const Home = () => {
    const [user, setUser] = useState({ name: "" })
    const { loggedUsers, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const newestUser = loggedUsers.find(user => user.id === parseInt(sessionStorage.getItem("app_user_id")))
        if (newestUser) setUser(newestUser)
    }, [loggedUsers])

    return (
        <>
            <h2>Welcome...</h2>
            <h3>{user.name}</h3>
        </>
    )
}