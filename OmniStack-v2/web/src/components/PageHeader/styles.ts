import { createGlobalStyle } from "styled-components";

export const PageHeaderStyles = createGlobalStyle`

    #page-teacher-list {
        width: 100vw;
        height: 100vh;
    }

    .page-header {
        display: flex;
        flex-direction: column;
        background-color: var(--color-primary);
    }

    .page-header .top-bar-container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-text-in-primary);
        padding: 1.6rem 0;
    }

    .page-header .top-bar-container a {
        height: 3.2rem;
        transition: opacity 0.2s;
    }

    .page-header .top-bar-container a:hover {
        opacity: 0.6;
    }

    /* pega somente img que e filho de top-bar-container */
    .page-header .top-bar-container>img {
        height: 1.6rem;
    }

    .page-header .header-content {
        width: 90%;
        margin: 0 auto;
        position: relative;
        margin: 3.2rem auto;
    }

    .page-header .header-content strong {
        font: 700 3.6rem 'Archivo', sans-serif;
        line-height: 4.2rem;
        color: var(--color-title-in-primary);

        display: flex;
        justify-content: center;
    }

    .page-header .header-content p {
        max-width: 30rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-title-in-primary);
        margin-top: 2.4rem;

        display: flex;
        justify-content: center;
    }

    /* desktop */
    @media (min-width: 1100px) {
        .page-header {
            height: 340px;
        }

        .page-header .top-bar-container {
            max-width: 1100px;
        }

        .page-header .header-content {
            flex: 1;
            max-width: 740px;
            margin:  0 auto;
            padding-bottom: 48px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .page-header .header-content strong {
            max-width: 350px;
        }
    }
    /* desktop */
`;
