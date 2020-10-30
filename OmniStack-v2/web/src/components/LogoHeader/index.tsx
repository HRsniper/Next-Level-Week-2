import React from "react";

import successBackgroundImg from "../../assets/images/success-background.svg";
import logoImg from "../../assets/images/logo.svg";

import { LogoContainer } from "./styles";

export function LogoHeader() {
    return (
        <>
            <LogoContainer>
                <img src={successBackgroundImg} alt="Background" />

                <div className="logo-content">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Plataforma de estudos online</h2>
                </div>
            </LogoContainer>
        </>
    );
}
