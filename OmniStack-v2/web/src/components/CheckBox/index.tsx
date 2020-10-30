import React, { InputHTMLAttributes } from "react";

// import "./styles.css";
import { CheckBoxContainer } from "./styles";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export const CheckBox: React.FunctionComponent<CheckBoxProps> = ({ label, name, ...rest }) => {
    return (
        <>
            <CheckBoxContainer>
                <label htmlFor={name}>
                    {label}
                    <input type="checkbox" id={name} {...rest} />
                    <span></span>
                </label>
            </CheckBoxContainer>
        </>
    );
};
