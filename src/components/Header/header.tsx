// importo componentes
import Menu from "../MenuNavegacion/menu";

// importo css module
import stylos from "./header.module.css"


// // creo un tipo específico para los props
// type HeaderProps = {
//   usuario: string;
//   id: number;
//   activo: boolean;
// };


const Header = () => {

  return <header>
    <div>
      <a className={stylos.encabezado}>
        <img src="../src/assets/react.svg" alt="Logo" width="38" height="32" className="d-inline-block align-text-top"/>
        React Red Social
      </a>
    </div>
    <Menu/>
  </header>
}

export default Header