const getPostImagesByPostId = async (postId) => {
    const response = await fetch(`http://localhost:3001/postimages/post/${postId}`)
    if (!response.ok) throw new Error('No se pudieron obtener las imágenes')
    return await response.json()
}

export default getPostImagesByPostId