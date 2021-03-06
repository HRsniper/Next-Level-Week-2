import { createGlobalStyle } from "styled-components";

export const TextAreaStyles = createGlobalStyle`

    .textarea-block {

        position: relative;
    }

    /* todo .input-block que vier depois de outro .input-block */
    .input-block+.textarea-block,
    .select-block+.input-block,
    .input-block+.input-block {
        margin-top: 1.4rem;
    }

    .textarea-block label {
        font-size: 1.4rem;
    }

    .textarea-block textarea {
        /* font-size: 1.2rem; */
        color: var(--color-text-complement);
    }

    .textarea-block textarea {
        width: 100%;
        height: 16rem;
        min-height: 8rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        outline: none;

        border: 1px solid var(--color-line-in-white);
        background-color: var(--color-input-background);

        padding: 1.2rem 1.6rem;
        font: 1.6rem 'Archivo', sans-serif;
        resize: vertical;
    }

    /* foco na div .input-block (se input:focus) */
    .textarea-block:focus-within::after {
        content: '';
        width: calc(100% - 3.2rem);
        height: 2px;
        background-color: var(--color-primary-light);

        position: absolute;
        /* top: 1.6rem; */
        left: 1.6rem;
        bottom: 5px;
    }

    /* ------ */

    @media (min-width: 1100px) {
        /* .input-block+.input-block {
            margin-top: 0;
        } */

    }
`;
