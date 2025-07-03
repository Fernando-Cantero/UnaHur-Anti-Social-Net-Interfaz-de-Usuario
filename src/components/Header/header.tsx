import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Menu from "../MenuNavegacion/menu";
import stylos from "./header.module.css";

const Header = () => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.logout();
  };

  return (
    <header className={stylos.headerContainer}>
      <div className={stylos.topRow}>
        <div className={stylos.logoContainer}>
          <a className={stylos.encabezado} href="/">
            <img
              src="../src/assets/react.svg"
              alt="Logo"
              width="38"
              height="32"
              className="d-inline-block align-text-top"
            />
            React Red Social
          </a>
        </div>

        <div className={stylos.userGreeting}>
          {auth?.usuario ? (
            <>
              <span>Hola, {auth.usuario.nickName}</span>
              <button className={stylos.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <span>No has iniciado sesión</span>
          )}
        </div>
      </div>

      <div className={stylos.menuRow}>
        <Menu />
      </div>
    </header>
  );
};

export default Header