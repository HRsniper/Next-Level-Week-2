import styled from "styled-components";

export const LogoContainer = styled.div`
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & > img {
        padding: 4rem;
        width: 100%;
    }

    & .logo-content {
        position: absolute;
    }

    & .logo-content h2 {
        width: 12em;
        color: var(--color-text-in-primary);
    }

    & .logo-content img {
        width: 16rem;
    }

    @media (min-width: 1024px) {
        grid-area: logo;

        & > img {
            height: 100vh;
        }

        .logo-content img {
            width: 30rem;
        }

        .logo-content h2 {
            font-size: 2rem;
            width: 20em;
        }
    }
`;
