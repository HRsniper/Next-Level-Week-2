import { createGlobalStyle } from "styled-components";

export const TeacherItensStyles = createGlobalStyle`

    .teacher-item {
        background-color: var(--color-box-base);
        border: 1px solid var(--color-line-in-white);
        border-radius: 0.8rem;
        margin-top: 2.4rem;
        overflow: hidden;
    }

    .teacher-item header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;

    }

    .teacher-item header img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }

    .teacher-item header div {
        margin-left: 2.4rem;
    }

    .teacher-item header div strong {
        font: 700 2.4em 'Archivo', sans-serif;
        display: block;
        color: var(--color-text-title);
    }

    .teacher-item header div span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
    }

    .teacher-item>p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    .teacher-item footer {
        padding: 3.2rem 2rem;
        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 3.2rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .teacher-item footer p {
        font-size: 1.6rem;
    }

    .teacher-item footer p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;
    }

    .teacher-item footer a {
        width: 20rem;
        height: 5.6rem;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        border: none;
        /* outline: none; */
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4em 'Archivo', sans-serif;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: background-color 0.2s;
        text-decoration: none;
    }

    .teacher-item footer a:hover {
        background-color: var(--color-secondary-dark);
    }

    /* desktop */
    @media (min-width: 1100px) {

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

        .teacher-item footer a {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;
        }

        .teacher-item footer a img {
            margin-right: 1.6rem;
        }
    }
`;
