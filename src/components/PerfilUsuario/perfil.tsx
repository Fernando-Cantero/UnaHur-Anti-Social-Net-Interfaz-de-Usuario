import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Posteo from "../../components/posteo";

interface PostApi {
  id: number;
  description: string;
  createdAt: string;
  User?: { nickName: string };
  Tags?: string[];
}

interface Imagen {
  id: number;
  url: string;
  postId: number;
}

interface Comentario {
  id: number;
  content: string;
  postId: number;
  userId: number;
}

export default function Perfil() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext no disponible");
  const { usuario, login, logout } = context;

  const [posts, setPosts] = useState<PostApi[]>([]);
  const [imagenes, setImagenes] = useState<{ [id: number]: Imagen[] }>({});
  const [comentarios, setComentarios] = useState<{
    [id: number]: Comentario[];
  }>({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario, login, navigate]);

  useEffect(() => {
    if (!usuario) return;

    const traerPosts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/posts?userId=${usuario.id}`
        );
        const data: PostApi[] = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error al cargar posts:", err);
      } finally {
        setLoading(false);
      }
    };
    traerPosts();
  }, [usuario]);

  useEffect(() => {
    const traerExtras = async () => {
      try {
        const [imgs, coms] = await Promise.all(
          posts.map(async (p) => {
            const [rImgs, rComs] = await Promise.all([
              fetch(`http://localhost:3001/postimages/post/${p.id}`),
              fetch(`http://localhost:3001/comments/post/${p.id}`),
            ]);
            return [
              { postId: p.id, data: (await rImgs.json()) as Imagen[] },
              { postId: p.id, data: (await rComs.json()) as Comentario[] },
            ];
          })
        );

        const imgMap: { [id: number]: Imagen[] } = {};
        const comMap: { [id: number]: Comentario[] } = {};

        imgs.forEach((i: any) => {
          imgMap[i.postId] = i.data;
        });
        coms.forEach((c: any) => {
          comMap[c.postId] = c.data;
        });

        setImagenes(imgMap);
        setComentarios(comMap);
      } catch (err) {
        console.error("Error al cargar extras:", err);
      }
    };

    if (posts.length) traerExtras();
  }, [posts]);

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
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card
            className="text-center shadow-sm bg-white"
            style={{ borderRadius: 12, padding: "2rem" }}
          >
            <Card.Body>
              <img
                src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${usuario?.nickName}`}
                alt="avatar"
                width={90}
                className="rounded-circle mb-3"
              />
              <h3 className="text-dark mb-2">{usuario?.nickName}</h3>
              <Button variant="outline-danger" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} style={{ paddingBottom: "6rem" }}>
          <h4 className="text-dark mb-3">Mis publicaciones</h4>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
              <p className="text-muted mt-2">Cargando publicaciones...</p>
            </div>
          ) : posts.length === 0 ? (
            <p className="text-muted">No tenés publicaciones todavía.</p>
          ) : (
            posts.map((p) => (
              <Posteo
                key={p.id}
                id={p.id}
                description={p.description}
                nickName={p.User?.nickName || usuario?.nickName}
                tags={p.Tags || []}
                images={imagenes[p.id] || []}
                comments={comentarios[p.id] || []}
                fecha={p.createdAt}
              />
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}


