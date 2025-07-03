import React, { useState, useEffect } from 'react'

const PostGet = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const obtenerPost = async () => {
            try {
                const response = await fetch('http://localhost:3001/posts')
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor. Ver detalle: ' + response.status)
                }
                const posts = await response.json()
                setData(posts)
            } catch (err) {
                console.error('Error inesperado: ' + err.message)
            }
        }
        obtenerPost()
    }, [])
}

export default PostGet