import { createGlobalStyle } from "styled-components";

export const TeacherFormStyles = createGlobalStyle`

    #page-teacher-form {
        width: 100vw;
        height: 100vh;
    }

    #page-teacher-form .page-header .header-content {
        margin-bottom: 6.4rem;
    }


    #page-teacher-form section {
        background-color: var(--color-box-base);
        width: 100%;
        max-width: 74rem;
        border-radius: 0.8rem;
        margin: -3.2rem auto 3.2rem;
        padding-top: 6.4rem;
        overflow: hidden;
    }


    #page-teacher-form section fieldset {
        border: none;
        padding: 0 2.4rem;
    }

    #page-teacher-form section fieldset+fieldset {
        margin-top: 6.4rem;
    }

    #page-teacher-form section fieldset legend {
        font: 700 2.4rem 'Archivo', sans-serif;
        color: var(--color-w-title);
        margin-bottom: 2.4rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 2px solid var(--color-line-in-white);
    }

    #page-teacher-form fieldset legend button {
        background: none;
        border: none;
        color: var(--color-primary);
        font: 700 1.6rem 'Archivo', sans-serif;
        cursor: pointer;
        transition: 0.2s;
    }

    #page-teacher-form fieldset legend button:hover {
        transform: translateY(-5px);
        color: var(--color-primary-dark);
    }

    /* footer */
    #page-teacher-form section footer {
        padding: 4rem 2.4rem;
        background-color: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 6.4rem;
    }

    #page-teacher-form section footer p {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.4rem;
        line-height: 1.4rem;

        color: var(--color-text-complement);
    }

    #page-teacher-form section footer p img {
        margin-right: 2.4rem;
    }

    #page-teacher-form section footer button {
        width: 100%;
        height: 5.6rem;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        border: none;
        /* outline: none; */
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6em 'Archivo', sans-serif;

        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: 0.2s;
        margin-top: 3.2rem;
    }

    #page-teacher-form section footer button:hover {
        background-color: var(--color-secondary-dark);
    }

    .schedule-item+.schedule-item {
        margin-top: 3.2rem;
        padding-top: 3.2rem;

        border-top: 2px solid var(--color-line-in-white);
    }

    /* desktop */
    @media (min-width:1100px) {
        #page-teacher-form{
            max-width: 100vw;
        }

        #page-teacher-form .page-header .header-content {
            margin-bottom: 0;
        }

        #page-teacher-form section fieldset {
            padding: 0 64px;
        }

        #page-teacher-form section .schedule-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            column-gap: 16px;
        }

        #schedule-items .select-block+.input-block,
        #schedule-items .input-block+.input-block {
            margin: 0;
        }

        #page-teacher-form section footer {
            padding: 4.0rem 6.4rem;

            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        #page-teacher-form section footer p{
            justify-content: space-between;
        }

        #page-teacher-form section footer button {
            margin-top: 0;
            width: 20rem;
        }
    }

    /* desktop */
`;