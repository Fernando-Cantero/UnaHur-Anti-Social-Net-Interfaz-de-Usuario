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
  {/*
  const enviarComentario = async () => {
    if (!nuevoComentario.trim()) return

    setEnviando(true)
    try {
      const res = await fetch('http://localhost:3001/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: parseInt(id),
          userId: 2, // 🔧 Reemplazar con usuario real
          content: nuevoComentario.trim()
        })
      })

      if (!res.ok) throw new Error('Error al enviar el comentario')

      const nuevo = await res.json()
      setComentarios([...comentarios, nuevo])
      setNuevoComentario('')
    } catch (err) {
      console.error(err)
    } finally {
      setEnviando(false)
    }
  }*/}

  if (!post) return <div className="container mt-5">Cargando post...</div>

  return (
    <div className="container mt-5">

      <PosteoDetalle
        key={post.id}
        id={post.id}
        description={post.description}
        nickName={post.User?.nickName}
        tags={post.Tags}
        images={imagenes}
        comments={comentarios}
        fecha={post.createdAt}
      />

    </div>
  )
}

export default PostDetalle