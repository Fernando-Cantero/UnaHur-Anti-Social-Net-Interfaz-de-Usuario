import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import PosteoDetalle from '../components/posteoDetalle'

const PostDetalle = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [imagenes, setImagenes] = useState([])
  const [comentarios, setComentarios] = useState([])
  const [nuevoComentario, setNuevoComentario] = useState('')
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPost = await fetch(`http://localhost:3001/posts/${id}`)
        const dataPost = await resPost.json()
        setPost(dataPost)

        const resImgs = await fetch(`http://localhost:3001/postimages/post/${id}`)
        setImagenes(await resImgs.json())

        const resComs = await fetch(`http://localhost:3001/comments/post/${id}`)
        setComentarios(await resComs.json())
      } catch (err) {
        console.error('Error al cargar el post:', err)
      }
    }

    fetchData()
  }, [id])


  if (!post) return <div className="container mt-5">Cargando post...</div>

  return (
    <div className="container mt-5">

      <PosteoDetalle
        key={post.id}
        id={post.id}
        description={post.description}
        user={post.User}
        tags={post.Tags}
        images={imagenes}
        comments={comentarios}
        fecha={post.createdAt}
      />

    </div>
  )
}

export default PostDetalle