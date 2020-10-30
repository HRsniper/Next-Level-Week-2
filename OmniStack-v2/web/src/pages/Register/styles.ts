import { createGlobalStyle } from "styled-components";

export const RegisterStyles = createGlobalStyle`

    /* mobile-first */
    .register-content {
        /* height: 100vh; */
        background-color: var(--color-background);
    }

    .register-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        position: relative;
    }

    .form-container header {
    
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin-top: 5.2rem;
        margin-bottom: 2.8rem;
        flex-direction: column;
    }

    .form-container header h2 {
        color: var(--color-black);
        font: 600 2.4rem 'Poppins', sans-serif;
        line-height: 3.4rem;
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
        top: 1.2rem;
    }

    .form-container header .voltar:hover {
        color: var(--color-box-base);
        background-color: var(--color-primary);
    }

    .form-container header p {
        color: var(--color-text-base);
        font: 400 1.6rem 'Poppins', sans-serif;
        line-height: 2.6rem;
        align-self: center;
    }

    .form-container main {
        width: 90%;
    }

    .form-container main form> button {
        width: 100%;
        height: 5.6rem;
        border-radius: 0.8rem;
        font: 600 1.6rem 'Archivo', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        /* outline: none; */
        color: var(--color-text-complement);
        background-color: var(--color-disable);
        transition: 0.1s ease-in;
        margin-bottom: 1.4rem;
        cursor: pointer;
    }

    .form-container main form .marginTop {
        margin-top: 1.2rem;
    }

    .form-container main form> button:hover {
        color: var(--color-box-base);
        background-color: var(--color-secondary);
    }
    /* mobile-first */

    /* desktop */
    @media (min-width: 1024px) {
        .register-content {
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

        .form-container header {
            flex-direction: unset;
        }

        .form-container header p {
            margin-left: 4rem;
        }
    }
    /* desktop */
`;
