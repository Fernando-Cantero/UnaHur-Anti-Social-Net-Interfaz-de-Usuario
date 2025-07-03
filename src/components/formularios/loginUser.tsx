import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");


    if (password != '123456') {
      setError("La contraseña es incorrecta");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/users");
      if (!res.ok) throw new Error("No se pudieron obtener los usuarios");

      const usuarios = await res.json();
      const usuarioEncontrado = usuarios.find((u: any) => u.nickName === nickName);

      if (!usuarioEncontrado) {
        setError("El usuario no existe");
        return;
      }

      login(usuarioEncontrado);
      navigate("/perfilUser");
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: "70vh" }}>
      <div className="row w-100">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <div className="card shadow p-4">
            <h3 className="text-center mb-3">Iniciar Sesión</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nickName" className="form-label" style={{ color: "black" }}>
                  NickName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nickName"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                  placeholder="Ingresa tu NickName"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: "black" }}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button type="submit" className="btn btn-primary w-100">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser
