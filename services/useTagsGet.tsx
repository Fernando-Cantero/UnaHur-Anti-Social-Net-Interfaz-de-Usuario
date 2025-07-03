import { useState, useEffect } from 'react';

const useTagsGet = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('http://localhost:3001/tags'); // Asegúrate de que esta URL es correcta
                if (!response.ok) {
                    throw new Error('No se pudieron obtener las etiquetas');
                }
                const data = await response.json();
                setTags(data);
            } catch (err) {
                alert(err.message);
            }
        };

        fetchTags();
    }, []);

    return tags;
};

export default useTagsGet