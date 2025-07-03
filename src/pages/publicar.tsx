import PostPost from '../components/formularios/postPost'
import useTagsGet from '../../services/useTagsGet'
const Publicar = () => {
    const tags = useTagsGet()

    return (
        <div className="container mt-4">
            <PostPost etiquetas={tags} />
        </div>
    )
}

export default Publicar