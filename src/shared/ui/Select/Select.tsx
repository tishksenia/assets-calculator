import React, { FC } from 'react';
import { Label } from '../Label/Label';

interface Option {
    text: string;
    value: string;
}

interface Props {
    options: Option[];
}

export const Select: FC<
    Props & Omit<React.HTMLProps<HTMLSelectElement>, 'selected'>
> = ({ options, label, ...rest }) => {
    return (
        <Label>
            {label}
            <select
                className="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            cursor-pointer
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none"
                aria-label="Default select example"
                {...rest}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </Label>
    );
};
