import postComentario from '../../services/postComment'
import { useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react'

const AgregarComentario = ({ postId }) => {
    const { usuario } = useContext(AuthContext)

    const [contenido, setContenido] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!contenido.trim()) {
            setMensaje('⚠️ El comentario no puede estar vacío.')
            return
        }
        if (usuario?.id) {
            try {
                const nuevoComentario = await postComentario({
                    content: contenido.trim(),
                    userId: usuario.id,
                    postId
                })

                console.log('Comentario creado:', nuevoComentario)
                setContenido('')
                setMensaje('✅ Comentario publicado con éxito.')
            } catch (error) {
                console.log('Fallo al comentar')
                setMensaje('❌ Error al enviar el comentario.')
            }
        } else {
            alert('Debes estar logeado para comentar')
        }
    }

    return (
        <div className="card shadow p-4 mt-4">
            <h5 className="text-center mb-3">Comenta el post</h5>
            <form className="bg-white p-3 rounded shadow-sm border" onSubmit={handleSubmit}>
                <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                        <textarea
                            className="form-control mb-2"
                            rows="2"
                            placeholder="Escribe un comentario..."
                            style={{
                                borderRadius: '15px',
                                backgroundColor: '#f1f3f5',
                                resize: 'none',
                                border: 'none',
                                color: '#000'
                            }}
                            required
                            value={contenido}
                            onChange={(e) => setContenido(e.target.value)}
                        />
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-sm btn-primary px-4">
                                Comentar
                            </button>
                        </div>
                        {mensaje && <div className="mt-2 text-muted small">{mensaje}</div>}
                    </div>
                </div>
            </form>
        </div>
    )

}

export default AgregarComentario