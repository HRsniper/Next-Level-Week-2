import { createGlobalStyle } from "styled-components";

export const SuccessPageStyles = createGlobalStyle`

    /* mobile-first */
    #page-SuccessPage {
        /* width: 100vh; */
        height: 100vh;

        background-color: var(--color-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .SuccessPage-content {
        position: absolute;
        text-align: center;
    }

    #page-SuccessPage > img {
        /* padding: 1.2rem; */
        width: 100%;
        transform: rotate(90deg);
    }

    .SuccessPage-content header h2 {
        color: var(--color-box-base);
        font: 600 3.4rem 'Archivo', sans-serif;
        line-height: 3.6rem;
        margin-bottom: 1.2rem;
        padding: 0 16rem;
    }

    .SuccessPage-content header p {
        color: var(--color-text-in-primary);
        font: 400 1.4rem 'Poppins', sans-serif;
        line-height: 2.4rem;
        padding: 0 10rem;
    }

    .SuccessPage-content header > img {
        margin-bottom: 1.2rem;
        width: 8rem;
        height: 8rem;
    }

    .buttons-container {
        display: flex;
        position: absolute;
        margin-top: 80vh;
    }

    .buttons-container a {
        width: 30rem;
        height: 6.4rem;

        border-radius: 0.8rem;
        font: 700 2.0rem 'Archivo', sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);

        transition: background-color 0.2s;
    }

    .buttons-container a.login {
        background-color: var(--color-secondary);
    }

    .buttons-container a.login:hover {
        background-color: var(--color-secondary-dark);
    }
    /* mobile-first */


    /* desktop */
    @media (min-width: 1024px) {
        #page-SuccessPage {
            width:100vw;
        }

        #page-SuccessPage > img {
            height: 100%;
            transform: rotate(0deg);
        }

        .SuccessPage-content header > img {
            width: 12rem;
            height: 12rem;
        }
        
        .SuccessPage-content header h2 {
            font-size: 5.4rem;
            line-height: 4.2rem;
        }

        .SuccessPage-content header p {
            font-size: 1.6rem;
            line-height: 1.4rem;
        }
    }
    /* desktop */
`;