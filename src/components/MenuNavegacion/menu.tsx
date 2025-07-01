import { Link, NavLink } from "react-router-dom"

const estilos = {
    backgroundColor:"darkcyan",
    fontSize: 24,
    display: "flex",
    padding: "0.5rem 10rem",
}

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={estilos}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Inicio</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/usuarios" className="nav-link" >Usuarios</NavLink>
                        <NavLink to="/publicaciones" className="nav-link" >Publicaciones</NavLink>
                        <NavLink to="/comentarios" className="nav-link" >Comentarios</NavLink>
                        <NavLink to="/usuarios" className="nav-link" >Etiquetas</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu