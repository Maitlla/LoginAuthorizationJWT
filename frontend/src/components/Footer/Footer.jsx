import { Link } from 'react-router-dom'
import style from './Footer.module.css';

function Footer() {
    return (
        <>
            <div id="Footer" className={style.elFooter}>
                    <a href="https://cssgrid-generator.netlify.app/" target="_blank"><p>CSS Grid Generator</p></a>
            </div>
        </>
    )
}

export default Footer