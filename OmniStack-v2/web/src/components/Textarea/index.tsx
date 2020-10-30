import React, { TextareaHTMLAttributes } from "react";

import { TextAreaStyles } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <>
            <TextAreaStyles />

            <div className="textarea-block">
                <label htmlFor={name}>{label}</label>
                <textarea id={name} {...rest} />
            </div>
        </>
    );
};

export { Textarea };
