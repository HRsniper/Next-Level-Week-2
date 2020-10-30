import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import sairIcon from "../../assets/images/icons/btn-sair.svg";

import { AuthContext } from "../../contexts/AuthContext";

import { AvatarContainer, LandingPage, ButtonsContainer, LogoContainer } from "./styles";

export function Landing() {
    const { authLogout } = useContext(AuthContext);

    const [totalConnections, setTotalConnections] = useState(0);

    // useEffect((função call back) => {}, [array de dependências]);
    // quando array de dependências mudar aciona a função call back

    useEffect(() => {
        // api.get("/connections")
        //     .then((response) => {
        //         console.warn(response);
        //         const total = response.data.total;
        //         // const {total} = response.data;

        //         setTotalConnections(total);
        //     })
        //     .catch((reject) => {
        //         console.error(reject);
        //     });

        async function totalConnection() {
            try {
                const response = await api.get("/connections");
                // console.warn("async ", response);
                // const {total} = response.data;

                const total = response.data.total;
                setTotalConnections(total);
            } catch (error) {
                console.error(error);
            }
        }
        totalConnection();
    }, []);

    return (
        <>
            <LandingPage>
                <div id="page-landing-content" className="container">
                    <AvatarContainer>
                        <Link to="/study" className="avatar">
                            <img src={logoImg} alt="Estudar" />
                            <h2>Nome Sobrenome</h2>
                        </Link>
                        {/* <a href="/" onClick={handleSignOut}> */}
                        <a href="/" onClick={authLogout}>
                            <img src={sairIcon} alt="Sair" className="btn-sair" />
                        </a>
                    </AvatarContainer>

                    <LogoContainer>
                        <img src={logoImg} alt="Proffy" />
                        <h2>Plataforma de estudos online</h2>
                    </LogoContainer>

                    <img src={landingImg} alt="Imagem" className="hero-image" />

                    <ButtonsContainer>
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar" />
                            Estudar
                        </Link>

                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar Aulas" />
                            Dar Aulas
                        </Link>
                    </ButtonsContainer>
                    {/* buttons-container */}

                    <span className="total-connections">
                        Total de {totalConnections} conexões ja realizadas
                        <img src={purpleHeartIcon} alt="Coração" />
                    </span>
                </div>
                {/* page-landing-content */}
            </LandingPage>
            {/* page-landing */}
            {/* <button onClick={handleSignOutFake}>logout</button> */}
            {/* <p>{token}</p> se nao for null */}
            {/* <p>{user?.email}</p> */} {/* se nao for null */}
        </>
    );
}
