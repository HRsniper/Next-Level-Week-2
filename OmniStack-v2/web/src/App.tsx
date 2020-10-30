import React from "react";

import { Routes } from "./routes";

// import { AuthProvider } from "./contexts/auth";

import { GlobalStyles } from "./assets/styles/GlobalStyles";

import { AuthProvider } from "./contexts/AuthContext";

export function App() {
    return (
        <>
            <GlobalStyles />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </>
    );
}
