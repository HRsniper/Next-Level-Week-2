import React, { SelectHTMLAttributes } from "react";

import { SelectsStyles } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FunctionComponent<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <>
            <SelectsStyles />

            <div className="select-block">
                <label htmlFor={name}>{label}</label>
                <select value="" id={name} {...rest}>
                    <option value="" disabled hidden>
                        Selecione uma Opção
                    </option>

                    {options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};

export { Select };
