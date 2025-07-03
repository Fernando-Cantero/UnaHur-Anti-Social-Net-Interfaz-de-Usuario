
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

interface Post {
  id: number;
  description: string;
  userId: number;
}

interface Comentario {
  id: number;
  content: string;
  postId: number;
  userId: number;
}

export default function Perfil() {
  // Acceso seguro al contexto
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext no disponible");
  const { usuario, login, logout } = context;

  const [posts, setPosts] = useState<Post[]>([]);
  const [comentarios, setComentarios] = useState<{
    [postId: number]: Comentario[];
  }>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario, login, navigate]);

  /** Esto carga las publicaciones del usuario */
  useEffect(() => {
    if (!usuario) return;

    const cargarPosts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/posts?userId=${usuario.id}`
        );
        const postsUsuario = await res.json();
        setPosts(postsUsuario);
      } catch (error) {
        console.error("Error al cargar publicaciones:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarPosts();
  }, [usuario]);

  /** Esto carga los comentarios. */
  useEffect(() => {
    const cargarComentariosDePosts = async () => {
      try {
        const comentariosPorPost = await Promise.all(
          posts.map(async (post) => {
            const res = await fetch(
              `http://localhost:3001/comments/post/${post.id}`
            );
            const data = await res.json();
            return { postId: post.id, comentarios: data };
          })
        );

        const comentariosMap: { [postId: number]: Comentario[] } = {};
        comentariosPorPost.forEach(({ postId, comentarios }) => {
          comentariosMap[postId] = comentarios;
        });
        setComentarios(comentariosMap);
      } catch (error) {
        console.error("Error al cargar comentarios:", error);
      }
    };

    if (posts.length > 0) cargarComentariosDePosts();
  }, [posts]);

  /** Esto cierra la sesion */
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      {/* Esto es para el perfil(la parte de arriba)*/}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card
            className="text-center shadow-sm bg-white"
            style={{ borderRadius: "12px", padding: "2rem" }}
          >
            <Card.Body>
              <img
                src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${usuario?.nickName}`}
                alt="Avatar"
                width={90}
                className="rounded-circle mb-3"
              />
              <h3 className="text-dark mb-2">{usuario?.nickName}</h3>
              <p className="text-muted">Bienvenido a tu perfil</p>
              <Button variant="outline-danger" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Publicaciones */}
      <Row className="justify-content-center">
        <Col md={8} style={{ paddingBottom: "6rem" }}>
          <h4 className="text-dark mb-3">Mis publicaciones</h4>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p className="text-muted mt-2">Cargando publicaciones...</p>
            </div>
          ) : posts.length === 0 ? (
            <p className="text-muted">No tenés publicaciones todavía.</p>
          ) : (
            posts.map((post) => (
              <Card
                key={post.id}
                className="mb-4 text-dark"
                style={{
                  backgroundColor: "#e9eff5",
                  borderRadius: "10px",
                  border: "1px solid #cbd3da",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  padding: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    Publicado por <strong>{usuario?.nickName}</strong> •{" "}
                    <small className="text-secondary">hace unas horas</small>
                  </Card.Subtitle>

                  <Card.Text className="text-dark">
                    {post.description}
                  </Card.Text>

                  <h6 className="text-muted mt-3">
                    Comentarios: {comentarios[post.id]?.length ?? 0}
                  </h6>

                  {comentarios[post.id]?.length ? (
                    comentarios[post.id].map((comentario) => (
                      <Card.Text
                        key={comentario.id}
                        className="text-secondary small mb-1"
                      >
                        🗨️ {comentario.content}
                      </Card.Text>
                    ))
                  ) : (
                    <Card.Text className="text-muted small">
                      No hay comentarios aún.
                    </Card.Text>
                  )}

                  <div className="mt-3 text-end">
                    <Link
                      to={`/post/${post.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}

