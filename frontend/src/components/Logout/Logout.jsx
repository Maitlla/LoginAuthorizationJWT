import { useContext } from "react"
import { context } from "../../services/ContextProvider"
import style from'./Logout.module.css';

function Logout () {

    const { actions } = useContext(context)

    function clickHandler() {
        actions.deleteToken()
    }

    return (
        <div id="Logout" className={"LoginLogout " + style.LoginLogout}>
            <p>Has cerrado Session</p>
            <button onClick={clickHandler}>Logout</button>
        </div>
    )
}

export default Logout