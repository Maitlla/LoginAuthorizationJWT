import { useContext } from "react"
import style from './Login.module.css';
import { context } from "../../services/ContextProvider"

function Login() {

    const { actions } = useContext(context)

    function loginHandler(event) {
        event.preventDefault()
        actions.getAPIToken(
            event.target.elements.username.value,
            event.target.elements.password.value,
        )
    }

    return (
        <form id="Login" className={"LoginLogout " + style.LoginLogout} onSubmit={loginHandler}>
            <div>
                <input type="text" name="username" />
                <input type="password" name="password" id="" />
            </div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login