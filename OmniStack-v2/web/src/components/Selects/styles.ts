import { createGlobalStyle } from "styled-components";

export const SelectsStyles = createGlobalStyle`
    .select-block {
        position: relative;
    }

    /* todo .select-block que vier depois de outro .select-block */
    .input-block+.textarea-block,
    .select-block+.input-block,
    .select-block+.select-block {
        margin-top: 1.4rem;
    }

    .select-block label {
        font-size: 1.4rem;
    }

    .select-block select {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        outline: none;

        border: 1px solid var(--color-line-in-white);
        background-color: var(--color-input-background);

        padding: 0 1.6rem;
        font: 1.6rem 'Archivo', sans-serif;
    }

    /* foco na div .select-block (se input:focus) */
    .select-block:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background-color: var(--color-primary-light);

        position: absolute;
        /* top: 1.6rem; */
        left: 1.6rem;
        bottom: 0;
    }

    @media (min-width: 1024px) {
        /* .select-block+.select-block {
            margin-top: 0;
        } */

    }
`;