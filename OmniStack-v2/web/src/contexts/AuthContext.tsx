import React, { createContext /*,useState ,useEffect */ } from "react";

// import { api } from "../services/api";

import { useAuth } from "./hooks/useAuth";

interface AuthContextProps {
    authenticated: boolean;
    loading: boolean;
    authLogin(): Promise<void>;
    authLogout(): void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
    
    const { loading, authenticated, authLogin, authLogout } = useAuth();

    

    // if loading

    return (
        // <AuthContext.Provider value={{ loading, authenticated: Boolean(authenticated), authLogin, authLogout }}>
        <AuthContext.Provider value={{ loading, authenticated, authLogin, authLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
