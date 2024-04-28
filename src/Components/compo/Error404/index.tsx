import { Link } from "react-router-dom"


const Erro404 = ()=> {
    return(
        <div id="err">
            <h1>Error404 page not found </h1>
            <button><Link to={'/Projeto-fixo'}>home</Link></button>
            <h2>
                sim a pagina esta logada
            </h2>
        </div>
    )
}

export default Erro404