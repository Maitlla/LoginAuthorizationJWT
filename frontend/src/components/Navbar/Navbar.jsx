import { Link } from 'react-router-dom'
import style from'./Navbar.module.css';

function Navbar() {
    return (
        <>
            <div id="Navbar" className={style.navegador}>
                <Link to={'/'}>
                    <p>Home</p>
                </Link>
                <Link to={'/public/'}>
                    <p>Public</p>
                </Link>
                <Link to={'/private/'}>
                    <p>Private</p>
                </Link>
                
            </div>
        </>
    )
}

export default Navbar