import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Envío solo nickName y email, password solo verifico que tenga 6 caracteres
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickName, email }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Error al registrar usuario");
        return;
      }

      navigate("/login");
    } catch (err) {
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: "70vh" }}
    >
      <div className="row w-100">
        <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <div className="card shadow p-4">
            <h3 className="text-center mb-3">Crear Cuenta</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nickName" className="form-label" style={{ color: "black" }}>
                  Crea un NickName para tu cuenta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nickName"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                  placeholder="Ej. Juan123"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mail" className="form-label" style={{ color: "black" }}>
                  Regístrate con tu Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej. correo@ejemplo.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: "black" }}>
                  Elige una Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña segura"
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button type="submit" className="btn btn-primary w-100">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser

