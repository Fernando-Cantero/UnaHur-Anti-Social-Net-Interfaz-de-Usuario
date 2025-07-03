const postComment = async ({ content, userId, postId }) => {
    try {
        const response = await fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content,
                userId,
                postId,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error al comentar. Código: ${response.status}`);
        }

        const comentarioCreado = await response.json();
        return comentarioCreado; // ← Te devuelve el comentario creado
    } catch (error) {
        console.error(' Error al enviar comentario:', error.message);
        throw error;
    }
};

export default postComment