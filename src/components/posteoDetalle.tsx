

const PosteoDetalle = ({ id, description, nickName, tags, images, comments, fecha }) => {

    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-between">
                <strong>@{nickName}</strong>
            </div>
            <div className="card-body">
                <p className="card-text" style={{ color: 'black' }}>{description}</p>
            </div>
            {images?.length > 0 && (
                <div className="row justify-content-center g-2 mt-2">
                    {images.map((img, i) => (
                        <div className="col-6 col-md-4 col-lg-3 d-flex justify-content-center" key={i}>
                            <img src={img.url} className="img-fluid rounded" alt={`imagen-${i}`} />
                        </div>
                    ))}
                </div>
            )}

            {tags?.length > 0 && (
                <div className="mt-3">
                    {tags.map((tag, i) => (
                        <span className="badge bg-secondary me-2" key={i}>#{tag.name}</span>
                    ))}
                </div>
            )}
            {comments?.length > 0 && (
                <div className="mt-4" >
                    <h6 className="mb-3">Comentarios:</h6>
                    <div className="list-group">
                        <p className="text-muted mt-2">
                            {comments.length} comentario{comments.length !== 1 ? 's' : ''}
                        </p>


                        {comments.map((comentario, i) => (
                            <div key={i} className="list-group-item">
                                <div className="d-flex justify-content-between">
                                    <strong style={{ color: 'black' }}>@{comentario.User?.nickName || 'Anónimo'}</strong>
                                    <small className="text-muted">
                                        {new Date(comentario.createdAt).toLocaleString('es-AR', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </small>
                                </div>
                                <p className="mb-1 mt-2 " style={{ color: 'black' }}>{comentario.content}</p>
                            </div>))}


                    </div>
                </div>)}


            < p className="text-muted" style={{ color: 'black' }}>
                Publicado el: {new Date(fecha).toLocaleString('es-AR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </p>

        </div >
    )
}

export default PosteoDetalle