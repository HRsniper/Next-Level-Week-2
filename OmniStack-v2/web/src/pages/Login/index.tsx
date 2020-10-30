import React, { FormEvent, useState, useEffect, useContext, createContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Inputs";
import { LogoHeader } from "../../components/LogoHeader";
import { CheckBox } from "../../components/CheckBox";

// import { useAuth } from "../../contexts/auth";
import { AuthContext } from "../../contexts/AuthContext";

import { LoginPage, FormContainer, CheckLostContainer } from "./styles";

export const Login: React.FC = () => {
    // NEW CONTEXT
    const { authenticated, authLogin } = useContext(AuthContext);
    // console.log("Login", authenticated);

    const [, setAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const history = useHistory();

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

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

        window.location.reload();
    }
    // console.log("Login2", authenticated);

    return (
        <>
            <LoginPage>
                <LogoHeader />

                <FormContainer>
                    <header>
                        <h2>Fazer Login</h2>
                        <Link to="/register" className="register">
                            Criar conta
                        </Link>
                    </header>

                    <section>
                        <form onSubmit={handleSignIn}>
                            <Input
                                label="E-mail"
                                name="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            <Input
                                label="senha"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />

                            <CheckLostContainer>
                                <CheckBox name="lembrar" label="Lembrar-me" />

                                <Link to="/lost-password" className="password">
                                    Esqueci minha senha
                                </Link>
                            </CheckLostContainer>
                            {/* <Link to="/">Entrar</Link> */}
                            <button type="submit">login</button>
                        </form>
                    </section>
                </FormContainer>
            </LoginPage>
            {/* <button onClick={authLogin}>login</button> */}
        </>
    );
};
