import { useState, useEffect } from 'react'

const usePostImagesGet = (postId) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const obtenerPostImages = async () => {
            try {
                const response = await fetch(`http://localhost:3001/postimages/post/${postId}`)
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor. Ver detalle: ' + response.status)
                }
                const postImages = await response.json()
                setData(postImages)
            } catch (err) {
                console.error('Error inesperado: ' + err.message)
            }
        }
        obtenerPostImages()
    }, [])
    return data
}

export default usePostImagesGet