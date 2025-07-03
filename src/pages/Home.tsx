import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../context/AuthProvider";
import usePostGet from '../../services/usePostGet';
import getPostImagesByPostId from '../../services/getPostImage';
import getPostCommentsByPostId from '../../services/getCommentPost';
import Posteo from '../components/posteo';

function Home() {
  const auth = useContext(AuthContext);
  const posts = usePostGet();
  const [imagenesPorPost, setImagenesPorPost] = useState({});
  const [comentariosPorPost, setComentariosPorPost] = useState({});

  useEffect(() => {
    if (!auth?.usuario) return; // si no hay usuario, no cargar datos

    const fetchPostExtras = async () => {
      const nuevasImagenes = {};
      const nuevosComentarios = {};

      for (let post of posts) {
        try {
          const imgs = await getPostImagesByPostId(post.id);
          nuevasImagenes[post.id] = imgs;
        } catch (e) {
          nuevasImagenes[post.id] = [];
        }

        try {
          const comments = await getPostCommentsByPostId(post.id);
          nuevosComentarios[post.id] = comments;
        } catch (e) {
          nuevosComentarios[post.id] = [];
        }
      }

      setImagenesPorPost(nuevasImagenes);
      setComentariosPorPost(nuevosComentarios);
    };

    if (posts.length > 0) {
      fetchPostExtras();
    }
  }, [posts, auth]);

  if (!auth?.usuario) {
    return (
      <div className="container mt-4">
        <h3>Debes iniciar sesión para ver el contenido.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {posts.map((post) => (
        <Posteo
          key={post.id}
          id={post.id}
          description={post.description}
          nickName={post.User?.nickName}
          tags={post.Tags}
          images={imagenesPorPost[post.id] || []}
          comments={comentariosPorPost[post.id] || []}
          fecha={post.createdAt}
        />
      ))}
    </div>
  );
}

export default Home;
