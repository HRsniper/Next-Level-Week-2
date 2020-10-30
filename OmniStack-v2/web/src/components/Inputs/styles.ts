import styled from "styled-components";

export const InputsContainer = styled.div`
    position: relative;

    /* todo .input-block que vier depois de outro .input-block */
    & + .textarea-block,
    .select-block + &,
    & + & {
        margin-top: 1.4rem;
    }

    & label {
        font-size: 1.4rem;
    }

    & input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        outline: none;

        border: 1px solid var(--color-line-in-white);
        background-color: var(--color-input-background);

        padding: 0 1.6rem;
        font: 1.6rem "Archivo", sans-serif;
    }

    /* foco na div .input-block (se input:focus) */
    &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: "";
        background-color: var(--color-primary-light);

        position: absolute;
        /* top: 1.6rem; */
        left: 1.6rem;
        bottom: 0;
    }

    @media (min-width: 1024px) {
        /* &+& {
            margin-top: 0;
        } */
    }
`;
