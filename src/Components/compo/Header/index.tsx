import "./hed.css"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="pito">
            
            <h1>aki eo header</h1>
            <button><Link to={"*"}>error page</Link></button>
        </header>
    )
}
export default Header