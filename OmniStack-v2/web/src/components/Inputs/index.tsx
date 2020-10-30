import React, { InputHTMLAttributes } from "react";

// import "./styles.css";
import { InputsContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const Input: React.FunctionComponent<InputProps> = ({ label, name, ...rest }) => {
    return (
        <>
            <InputsContainer>
                <label htmlFor={name}>{label}</label>
                
                <input type="text" id={name} {...rest} />
            </InputsContainer>
        </>
    );
};