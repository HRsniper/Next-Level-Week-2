import styled from "styled-components";

export const CheckBoxContainer = styled.div`
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
    color: var(--color-text-complement);

    margin: 1.6rem 0 1.6rem 0;
    font: 400 1.2rem "Poppins", sans-serif;
    line-height: 2.4rem;
    padding: 1rem 3rem 1rem 3rem;

    /* Hide the browser's default checkbox */
    & label {
        cursor: pointer;
    }

    & label:hover {
        text-decoration: underline;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    & input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    & span {
        cursor: pointer;
        position: absolute;
        /* top: 0; */
        left: 0;
        height: 2.4rem;
        width: 2.4rem;
        border-radius: 0.8rem;
        border: 1px solid var(--color-line-in-white);
        background-color: var(--color-input-background);
        transition: 0.2s ease-in;
    }

    /* Style the checkmark/indicator */
    & span::after {
        content: "";
        position: absolute;
        display: none;
        left: 0.8rem;
        top: 0.4rem;
        width: 0.4rem;
        height: 0.8rem;
        /* background-image: url("../../assets/images/icons/vector.svg"); */

        border: solid var(--color-box-base);
        border-width: 0 0.3rem 0.3rem 0;

        transform: rotate(45deg);
    }

    /* Show the checkmark when checked */
    & input:checked ~ span::after {
        display: block;
    }

    & input:checked ~ span {
        background-color: var(--color-secondary);
        border-color: var(--color-secondary);
    }

    @media (min-width: 1024px) {
        /* .input-block+.input-block {
            margin-top: 0;
        } */
    }
`;
