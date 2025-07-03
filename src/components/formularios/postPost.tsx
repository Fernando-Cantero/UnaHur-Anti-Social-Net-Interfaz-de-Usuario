
const PostPost = ({ etiquetas }) => {
    return <>
        <div className="container-fluid d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '70vh' }}>
            <div className="row w-100">
                <div className="col-11 col-sm-10 col-md-8 col-lg-6 mx-auto">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-3">Crear Publicación</h3>
                        <form>
                            <div className="mb-3">
                                <textarea
                                    required
                                    className="form-control"
                                    id="description"
                                    placeholder="¿Qué estás pensando?"
                                    style={{ color: 'black' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="img1" className="form-label" style={{ color: 'black' }}>
                                    Agrega imágenes a tu publicación (opcional)
                                </label>
                                <input type="text" className="form-control mb-2" id="img1" placeholder="URL de la imagen" />
                                <input type="text" className="form-control mb-2" id="img2" placeholder="URL de la imagen" />
                                <input type="text" className="form-control" id="img3" placeholder="URL de la imagen" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: 'black' }} >Selecciona etiquetas:</label>
                                <div>
                                    {etiquetas.map((tag, index) => (
                                        <div className="form-check form-check-inline" key={index}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={tag}
                                                value={tag}
                                            />
                                            <label className="form-check-label" htmlFor={tag} style={{ color: 'black' }}>
                                                {tag}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Postear
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PostPost
