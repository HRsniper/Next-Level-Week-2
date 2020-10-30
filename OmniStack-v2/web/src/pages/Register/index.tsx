import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Inputs";
import { LogoHeader } from "../../components/LogoHeader";

import backIcon from "../../assets/images/icons/back.svg";

import { RegisterStyles } from "./styles";

export function Register() {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleCreateAccount(event: FormEvent) {
        event.preventDefault();
        // console.log(
        //   {name,avatar,whatsapp,bio,subject,cost,scheduleItems}
        // );

        api.post("/accounts", {
            username,
            lastname,
            email,
            password,
        })
            .then(() => {
                alert("Cadastrado Com Successo");

                history.push("/register-success"); //redirecionando para landing
            })
            .catch((error) => {
                alert(error);
            });
    }

    return (
        <>
            <RegisterStyles />

            <div id="page-register">
                <div className="register-content">
                    <LogoHeader />

                    <div className="form-container">
                        <header>
                            <Link to="/" className="voltar">
                                <img src={backIcon} alt="Voltar" />
                            </Link>

                            <h2>Cadastre-se</h2>
                            <p>Preencha os dados abaixo para começar</p>
                        </header>

                        <main>
                            <form onSubmit={handleCreateAccount}>
                                <Input
                                    label="Nome"
                                    name="name"
                                    value={username}
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                    }}
                                />
                                <Input
                                    label="Sobrenome"
                                    name="lastname"
                                    value={lastname}
                                    onChange={(event) => {
                                        setLastname(event.target.value);
                                    }}
                                />
                                <Input
                                    label="E-mail"
                                    name="email"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                                <Input
                                    label="Senha"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />

                                <button type="submit" className="marginTop">
                                    Concluir Cadastro
                                </button>
                            </form>
                        </main>
                    </div>
                    {/* buttons-container */}
                </div>
            </div>
            {/* page-register-content */}
            {/* page-register */}
        </>
    );
}
