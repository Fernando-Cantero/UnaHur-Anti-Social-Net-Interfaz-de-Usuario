
const LoginUser = () => {
    return <>
        <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '70vh' }}>
            <div className="row w-100">
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-3">Iniciar Sesión</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nickName" className="form-label" style={{ color: "black" }}>
                                    NickName
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nickName"
                                    placeholder="Ingresa tu NickName"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label" style={{ color: "black" }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Ingresa tu contraseña"
                                    required />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Iniciar sesión
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default LoginUser


