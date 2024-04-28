import "./hed.css"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="pito">
            <button><Link to={"*"}>error page</Link></button>
            <h1>aki eo header</h1>
        </header>
    )
}
export default Header