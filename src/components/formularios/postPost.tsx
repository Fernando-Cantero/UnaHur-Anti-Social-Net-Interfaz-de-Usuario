import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import postPost from '../../../services/postPost'
import postImage from '../../../services/postImage'
import useTagsGet from '../../../services/useTagsGet'

const PostPost = () => {
    const { usuario } = useContext(AuthContext)
    const tags = useTagsGet()  // Usamos el hook para obtener las etiquetas
    const [descripcion, setDescripcion] = useState('')
    const [imagenes, setImagenes] = useState(['', '', ''])
    const [tagsSeleccionados, setTagsSeleccionados] = useState([])
    const [mensaje, setMensaje] = useState('')

    const handleCheckbox = (tagId) => {
        setTagsSeleccionados((prev) =>
            prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
        )
    }

    const handleChangeImg = (index, value) => {
        const nuevas = [...imagenes]
        nuevas[index] = value
        setImagenes(nuevas)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!descripcion.trim()) {
            setMensaje('⚠️ La descripción no puede estar vacía.')
            return
        }

        if (!usuario || !usuario.id) {
            setMensaje('❌ No se encontró el usuario.')
            return
        }

        try {
            const nuevoPost = await postPost({
                description: descripcion.trim(),
                userId: usuario.id,
                tagIds: tagsSeleccionados,
            })

            const urls = imagenes.filter((url) => url.trim() !== '')
            for (let url of urls) {
                await postImage({ url, postId: nuevoPost.id })
            }

            setDescripcion('')
            setTagsSeleccionados([])
            setImagenes(['', '', ''])
            setMensaje('✅ Publicación creada con éxito.')
        } catch (err) {
            console.error(err)
            setMensaje('❌ Error al crear el post')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card shadow p-4 mt-4">
            <h5 className="text-center mb-3">Crear Publicación</h5>
            <div className="mb-3">
                <textarea
                    required
                    className="form-control"
                    placeholder="¿Qué estás pensando?"
                    style={{ color: 'black' }}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>
                    Agrega imágenes a tu publicación (opcional)
                </label>
                {[0, 1, 2].map((i) => (
                    <input
                        key={i}
                        type="text"
                        className="form-control mb-2"
                        placeholder={`URL de la imagen ${i + 1}`}
                        value={imagenes[i]}
                        onChange={(e) => handleChangeImg(i, e.target.value)}
                    />
                ))}
            </div>

            <div className="mb-3">
                <label className="form-label" style={{ color: 'black' }}>
                    Selecciona etiquetas:
                </label>
                <div>
                    {
                        tags.map((tag) => (
                            <div className="form-check form-check-inline" key={tag.id}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={tag.id}
                                    value={tag.id}
                                    checked={tagsSeleccionados.includes(tag.id)}
                                    onChange={() => handleCheckbox(tag.id)}
                                />
                                <label className="form-check-label" htmlFor={tag.id} style={{ color: 'black' }}>
                                    {tag.name}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Postear
            </button>

            {mensaje && <div className="mt-2 text-muted small">{mensaje}</div>}
        </form>
    )
}

export default PostPost