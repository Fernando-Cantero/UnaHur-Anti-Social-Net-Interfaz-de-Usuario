// Importo componente 2 header
import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Usuarios from "./pages/Usuarios"
import Publicaciones from "./pages/Publicaciones"
import Comentarios from "./pages/Comentarios"
import Etiquetas from "./pages/Etiquetas"
import Inicio from "./pages/Inicio"

// Componente 1
const App = () => {
  return  <>
            <Header />
            <Routes>
              <Route path="/" element={ <Inicio/> }/>
              <Route path="/usuarios" element={ <Usuarios/>}/>
              <Route path="/publicaciones" element={ <Publicaciones/> }/>
              <Route path="/comentarios" element={ <Comentarios/> }/>
              <Route path="/etiquetas" element={ <Etiquetas/> }/>
              <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
            <Footer />
          </>
}


export default App