const postImage = async ({ url, postId }) => {
    const response = await fetch('http://localhost:3001/postimages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            postId,
            url
        }),
    });

    if (!response.ok) {
        throw new Error('Error al agregar imagen.')
    }

    return await response.json();
};

export default postImage;