import styled from "styled-components";

export const LoginPage = styled.main`
    width: 100vw;
    height: 100vh;
    /* mobile-first */
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1100px) {
        height: 100vh;

        display: grid;

        grid-template-columns: repeat(2, 1fr);
        column-gap: 3.2rem;

        grid-template-areas: "logo form";
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    & header {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-top: 5.2rem;
        margin-bottom: 2.8rem;
    }

    & header h2 {
        color: var(--color-black);
        font: 600 2.4rem "Poppins", sans-serif;
        line-height: 3.4rem;
    }

    & header a {
        padding: 0.8rem;
        border-radius: 0.8rem;
        font: 600 1.4rem "Poppins", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--color-primary);
        background-color: var(--color-disable);
        transition: 0.1s ease-in;
        cursor: pointer;
    }

    & header a:hover {
        color: var(--color-box-base);
        background-color: var(--color-primary);
    }

    & section {
        width: 90%;
    }

    & section form > button {
        width: 100%;
        height: 5.6rem;
        border-radius: 0.8rem;
        font: 600 1.6rem "Archivo", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border: none;
        color: var(--color-text-complement);
        background-color: var(--color-disable);
        transition: 0.1s ease-in;
        margin-bottom: 1.4rem;
        cursor: pointer;
    }

    /* & section form > button:active , */
    & section form > button:hover {
        color: var(--color-box-base);
        background-color: var(--color-secondary);
    }
    /* mobile-first */
    @media (min-width: 1100px) {
        grid-area: form;
        justify-self: center;
    }
`;

export const CheckLostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        font: 400 1.2rem "Poppins", sans-serif;
        color: var(--color-text-complement);
        text-decoration: none;
        justify-self: center;
        align-self: center;
        padding: 1rem 0 1rem 3rem;
    }

    & > a:hover {
        text-decoration: underline;
    }
`;
