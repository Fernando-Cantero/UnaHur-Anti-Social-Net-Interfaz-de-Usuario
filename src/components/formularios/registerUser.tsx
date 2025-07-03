const RegisterUser = () => {
    return <>
        <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '70vh' }}>
            <div className="row w-100">
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-3">Crear Cuenta</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="nickName" className="form-label" style={{ color: 'black' }}>
                                    Crea un NickName para tu cuenta
                                </label>
                                <input type="text" className="form-control" id="nickName" placeholder="Ej. Juan123" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="mail" className="form-label" style={{ color: 'black' }}>
                                    Regístrate con tu Email
                                </label>
                                <input type="email" className="form-control" id="mail" placeholder="Ej. correo@ejemplo.com" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label" style={{ color: 'black' }}>
                                    Elige una Contraseña
                                </label>
                                <input type="password" className="form-control" id="Password" placeholder="Contraseña segura" required />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RegisterUser