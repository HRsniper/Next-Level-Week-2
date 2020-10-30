import { useState, useEffect } from "react";

import { api } from "../../services/api";

// import {  } from "../../pages/Login";

export function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const tokenStorage = localStorage.getItem("Auth:token");

        if (tokenStorage) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(tokenStorage)}`;

            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function authLogin() {
        // const response =
        const {
            data: { token },
        } = await api.post("/auth", {
            email,
            password,
        });
        // console.log(response);
        // console.log(token);

        localStorage.setItem("Auth:token", JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setAuthenticated(true);
        // history.push("/");
    }

    function authLogout() {
        setAuthenticated(false);

        localStorage.removeItem("Auth:token");

        api.defaults.headers.Authorization = undefined;
    }

    return { loading, authenticated, authLogin, authLogout };
}
