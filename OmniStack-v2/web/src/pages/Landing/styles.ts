import styled from "styled-components";

export const LandingPage = styled.main`
    /* mobile-first */
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
    /* background-color: var(--color-background); */

    & .hero-image {
        width: 100%;
    }

    & .total-connections {
        font-size: 1.4rem;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .total-connections img {
        margin-left: 0.8rem;
    }

    /* mobile-first */

    /* desktop */
    @media (min-width: 1100px) {
        #page-landing-content {
            max-width: 1100px;

            display: grid;

            grid-template-rows: 100px 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;

            grid-template-areas:
                "perfil perfil perfil"
                "logo hero hero"
                "buttons buttons total";

            row-gap: 3.2rem;
            column-gap: 8.2rem;
        }

        .hero-image {
            grid-area: hero;

            /* imagem sempre a direita */
            justify-self: end;
        }

        .total-connections {
            grid-area: total;
            justify-content: flex-end;
        }
    }
    /* desktop */
`;

export const AvatarContainer = styled.header`
    /* text-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3.2rem;

    & .avatar {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.4rem;

        &:hover {
            background-color: var(--color-primary-dark);
            border-radius: 0.8rem;
        }
    }

    & .avatar img {
        width: 4rem;
        height: 4rem;
        border: 1px solid var(--color-line-in-white);
        border-radius: 50%;
    }

    & .avatar h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: var(--color-text-in-primary);
        margin-left: 1.8rem;
    }

    & .btn-sair {
        width: 4rem;
        height: 4rem;
        padding: 0.8rem;
        background-color: var(--color-primary-dark);
        border-radius: 0.8rem;
        transition: 0.2s ease-in;

        margin: 0.4rem;
        display: flex;
        align-content: center;
        justify-content: center;

        &:hover {
            background-color: var(--color-primary-darker);
        }
    }

    @media (min-width: 1100px) {
        grid-area: perfil;
        margin-bottom: 0;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;

    & img {
        width: 12rem;
    }

    & h2 {
        font-size: 1.2rem;
    }

    @media (min-width: 1100px) {
        grid-area: logo;
        display: block;
        align-self: center;

        & h2 {
            text-align: initial;
            font-size: 3.6rem;
        }

        & img {
            width: 100%;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    & a {
        width: 30rem;
        height: 10.4rem;

        border-radius: 0.8rem;
        font: 700 2rem "Archivo", sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);

        transition: background-color 0.2s;
    }

    & a:first-child {
        margin-right: 1.6rem;
    }

    /* seleciona todos a com classe study */
    & a.study {
        background-color: var(--color-primary-lighter);

        &:hover {
            background-color: var(--color-primary-light);
        }
    }

    & a.give-classes {
        background-color: var(--color-secondary);

        &:hover {
            background-color: var(--color-secondary-dark);
        }
    }

    @media (min-width: 1100px) {
        grid-area: buttons;
        justify-content: flex-start;

        & a img {
            margin-right: 2.4rem;
        }

        & a {
            font-size: 2.4rem;
        }
    }
`;
