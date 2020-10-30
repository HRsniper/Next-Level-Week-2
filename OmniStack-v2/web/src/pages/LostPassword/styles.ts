import { createGlobalStyle } from "styled-components";

export const LostPasswordStyles = createGlobalStyle`

    /* mobile-first */
    #page-LostPassword {
        height: 100vh;
    }

    .LostPassword-content {
        height: 100vh;
        background-color: var(--color-background);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }

    .form-container header {
        display: flex;
        /* justify-content: space-between; */
        flex-direction: column;
        width: 90%;
        margin-top: 5.2rem;
        margin-bottom: 2.8rem;
        position: relative;
    }

    .form-container header h2 {
        color: var(--color-black);
        font: 600 2.4rem 'Poppins', sans-serif;
        line-height: 3.4rem;
        margin-bottom: 1.8rem;
    }

    .form-container header p {
        font: 400 1.4rem 'Poppins', sans-serif;
        line-height: 2.4rem;
        display: flex;
        align-items: center;
        color: var(--color-black);
    }

    .form-container main {
        width: 90%;
    }

    .form-container main form button {
        width: 100%;
        height: 5.6rem;
        border-radius: 0.8rem;
        font: 600 1.6rem 'Archivo', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        color: var(--color-text-complement);
        background-color: var(--color-disable);
        transition: 0.1s ease-in;
        margin-top: 0.8rem;
        margin-bottom: 1.4rem;
        cursor: pointer;
    }

    .form-container main form button:hover {
        color: var(--color-box-base);
        background-color: var(--color-secondary);
    }

    .form-container header .voltar {
        height: 3.2rem;
        padding: 0.8rem;
        border-radius: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary);
        background-color: var(--color-disable);
        transition: 0.1s ease-in;
        cursor: pointer;

        position: absolute;
        top: -4.2rem;
    }

    .form-container header .voltar:hover {
        color: var(--color-box-base);
        background-color: var(--color-primary);
    }
    /* mobile-first */


    /* desktop */
    @media (min-width: 1100px) {
        .LostPassword-content {
            height: 100vh;

            display: grid;

            grid-template-columns: repeat(2, 1fr);
            column-gap: 3.2rem;

            grid-template-areas:
                "form logo"
            ;
        }

        .form-container {
            grid-area: form;
            justify-self: center;
        }

        .form-container header .voltar {
            top: -12rem;
        }
        
    }
    /* desktop */
`;
