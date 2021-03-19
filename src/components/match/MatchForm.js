import React, { useContext, useEffect, useState } from "react"
import "./Match.css"
import { useHistory, useParams } from 'react-router-dom';

export const NewMatchForm = () => {

    const currentUserId = parseInt(sessionStorage.getItem("app_user_id"))

    const [match, setMatch] = useState({
        userId: "",
        opponentsName: "",
        userWin: "",
        date: ""
    })

    const [isLoading, setIsLoading] = useState(true);

    const

}