import { useContext } from "react"
import { context } from "./ContextProvider"

function Authorization({children}) {

    const { state } = useContext(context)

    return (
        <div id="Authorization">
            { state.token ? children : <h3 className="noLogin">Please, login for view this content.</h3>}
        </div>
    )
}

export default Authorization