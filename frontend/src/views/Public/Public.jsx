/*import skate10H from "../../img/skate10H.png"; */

import style from '../../components/PublicContraido/PublicContraido.module.css';
import ListaArtculos from '../../components/ListaArticulos/ListaArticulos.jsx';

function Public() {
    return (
        <div id="Public" className="noLogin">
            
            <div className={style.mainDividido}>
                <div>
                    <p>Contenido público</p>
                    <h3>Lista de artículos</h3>
                    <ListaArtculos />
                </div>
                <div>
                    <p>Contenido público</p>
                    <h3>Artículo específico</h3>
                </div>
            </div>
        </div >
    )
}

export default Public
