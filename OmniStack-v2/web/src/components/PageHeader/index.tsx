import React from "react";

import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import { PageHeaderStyles } from "./styles";

interface PageHeaderProps {
    title: string;
    description?: string; //nao obrigatorio
}

// export const PageHeader: React.FC<PageHeaderProps> = (props) => {
export const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <>
            <PageHeaderStyles />

            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/landing">
                        <img src={backIcon} alt="Voltar" />
                    </Link>

                    <img src={logoImg} alt="Proffy" />
                </div>{" "}
                {/* top-bar-container */}
                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.description ? <p>{props.description}</p> : null}
                    {/* {props.description && <p>{props.description}</p>} */}

                    {props.children}
                </div>
            </header>
        </>
    );
};
