import { createGlobalStyle } from "styled-components";

export const TeacherListStyles = createGlobalStyle`

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

    #search-teachers {
        margin-top: 3.2rem;
    }

    #search-teachers label {
        color: var(--color-text-in-primary);
    }

    #page-teacher-list main {
        margin: 3.2rem auto;
        width: 90%;
    }


    #search-teachers button {
        width: 100%;
        height: 5.6rem;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        border: none;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem 'Archivo', sans-serif;

        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;
    }

    #search-teachers button:hover {
        background-color: var(--color-secondary-dark);
    }

    /* desktop */
    @media (min-width: 1100px) {
        #page-teacher-list {
            max-width: 100%;
        }

        #search-teachers {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            column-gap: 16px;

            position: absolute;
            bottom: -28px;
        }

        #search-teachers button {
            margin-top: 2.8rem;
        }


        #search-teachers .select-block+.input-block,
        #search-teachers .select-block+.select-block,
        #search-teachers .input-block+.input-block {
            margin-top: 0;
        }

        #page-teacher-list main {
            padding: 3.2rem 0;
            max-width: 740px;
            margin: 0 auto;
        }

        .teacher-item header,
        .teacher-item footer {
            padding: 3.2rem;
        }

        .teacher-item>p {
            padding: 0 3.2rem;
        }

        .teacher-item footer p strong {
            display: initial;
            margin-left: 1.6rem;
        }

        .teacher-item footer button {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;
        }

        .teacher-item footer button img {
            margin-right: 1.6rem;
        }
    }
    /* desktop */
`;
