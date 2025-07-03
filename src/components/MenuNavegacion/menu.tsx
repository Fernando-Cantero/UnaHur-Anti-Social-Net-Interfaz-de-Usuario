import { Link, NavLink } from "react-router-dom"

const estilos = {
    backgroundColor: "darkcyan",
    fontSize: 24,
    display: "flex",
    padding: "0.5rem 10rem",
}

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={estilos}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/login" className="nav-link" >Login</NavLink>
                        <NavLink to="/register" className="nav-link" >Register</NavLink>
                        <NavLink to="/perfilUser" className="nav-link" >Mi perfil</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu