const postPost = async ({ description, userId, tagIds }) => {
    const response = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description,
            userId,
            tagIds
        }),
    })

    if (!response.ok) throw new Error('Error al crear el post')
    return await response.json()
}

export default postPost