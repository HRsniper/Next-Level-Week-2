import React from "react";
import { Link } from "react-router-dom";

import successCheckIcon from "../../assets/images/icons/success-check-icon.svg";
import successBackgroundImg from "../../assets/images/success-background.svg";

import { SuccessPageStyles } from "./styles";

interface SuccessPageProps {
    title: string;
    description: string;
    button: string;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ description, title, button }) => {
    return (
        <>
            <SuccessPageStyles />
            <div id="page-SuccessPage">
                <img src={successBackgroundImg} alt="Background" className="backImg" />

                <div className="SuccessPage-content">
                    <header>
                        <img src={successCheckIcon} alt="Pronto" />
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </header>
                </div>
                <div className="buttons-container">
                    <Link to="/" className="login">
                        {button}
                    </Link>
                </div>
                {/* page-SuccessPage-content */}
            </div>
            {/* page-SuccessPage */}
        </>
    );
};
