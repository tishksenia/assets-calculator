import React, { FC, useState } from 'react';
import { Label } from '../Label';

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
    const [hasFocus, setFocus] = useState<boolean>(false);

    return (
        <div className="relative w-full">
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
                            border border-solid border-gray-200
                            rounded
                            transition
                            ease-in-out
                            cursor-pointer
                            m-0
                            focus:text-gray-700  focus:border-blue-400 focus:outline-none"
                    {...rest}
                    onFocus={(event) => {
                        rest.onFocus && rest.onFocus(event);
                        setFocus(true);
                    }}
                    onBlur={(event) => {
                        rest.onBlur && rest.onBlur(event);
                        setFocus(false);
                    }}
                    onChange={(event) => {
                        rest.onChange && rest.onChange(event);
                        setFocus(false);
                    }}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <div className="absolute top-9 right-2 pointer-events-none">
                    <svg
                        className={`h-4 w-4 text-gray-600 ${
                            hasFocus ? 'rotate-180' : ''
                        }`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </Label>
        </div>
    );
};
