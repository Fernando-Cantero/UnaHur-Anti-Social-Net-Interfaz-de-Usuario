// Importo componente 2 header
import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Post from "./pages/Post"
import Usuario from "./pages/Usuario"
import Login from "./pages/Login"
import Etiquetas from "./pages/Etiquetas"
import Home from "./pages/Home"
import AuthProvider from "./context/AuthProvider"

// Componente 1
const App = () => {
  return <>
    <div className="d-flex flex-column min-vh-100">
      <AuthProvider>
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<Usuario />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </AuthProvider>
    </div>
  </>
}


export default App
