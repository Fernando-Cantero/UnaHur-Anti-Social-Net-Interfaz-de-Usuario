import { createContext, useEffect, useState } from "react";

interface Usuario {
    id: number;
    nickName: string;
}

interface AuthContextType {
    usuario: Usuario | null;
    setUsuario: (usuario: Usuario | null) => void;
    login: (usuario: Usuario) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuario");
        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);

    // Función login
    const login = (usuarioData: Usuario) => {
        setUsuario(usuarioData);
        localStorage.setItem("usuario", JSON.stringify(usuarioData));
    };

    // Función logout
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuario");
    };

    return (
        <AuthContext.Provider value={{ usuario, setUsuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}