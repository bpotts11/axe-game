import { useHistory } from "react-router-dom"
import "./Match.css"

export const MatchButton = () => {
    const history = useHistory()

    return (
        <>
            <button onClick={() => { history.push("/matches/create") }}>New Match</button>
        </>
    )
}