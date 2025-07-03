const getPostCommentsByPostId = async (postId) => {
    const response = await fetch(`http://localhost:3001/comments/post/${postId}`)
    if (!response.ok) throw new Error('No se pudieron obtener los comentarios')
    return await response.json()
}
export default getPostCommentsByPostId