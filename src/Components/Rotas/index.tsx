import { Route, Routes } from "react-router-dom"

//impotaçoes das rotas
import Main from "../compo/Main" 
import Erro404 from "../compo/Error404"
//fim das importaçoes

const Rota = () => {
    return(
        <Routes>
            <Route path="/home" element={<Main/>} />
            <Route path="*" element={<Erro404/>} />

        </Routes>
    )
}

export default Rota