import React from "react";
import { Link } from "react-router-dom";
// import { api } from "../../services/api";

import { Input } from "../../components/Inputs";
import { LogoHeader } from "../../components/LogoHeader";

import backIcon from "../../assets/images/icons/back.svg";

import { LostPasswordStyles } from "./styles";

export function LostPassword() {
    return (
        <>
            <LostPasswordStyles />

            <div id="page-LostPassword">
                <div className="LostPassword-content">
                    <LogoHeader />

                    <div className="form-container">
                        <header>
                            <Link to="/" className="voltar">
                                <img src={backIcon} alt="Voltar" />
                            </Link>

                            <h2>Esqueceu sua senha?</h2>
                            <p>Não esquenta, vamos dar um jeito nisso.</p>
                        </header>

                        <main>
                            <form>
                                <Input label="E-mail" name="email" />

                                <button type="submit">Enviar</button>
                            </form>
                        </main>
                    </div>
                    {/* buttons-container */}
                </div>
            </div>
            {/* page-LostPassword-content */}
            {/* page-LostPassword */}
        </>
    );
}
