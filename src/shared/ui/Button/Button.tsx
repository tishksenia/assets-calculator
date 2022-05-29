import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props {
    className?: string;
}

export const Button: FC<
    Props &
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >
> = ({ className, children, ...rest }) => {
    return (
        <button
            {...rest}
            className={`bg-blue-800
                        hover:bg-gray-800
                        duration-300
                        rounded-md
                        py-2 px-10 mt-4
                        text-white font-medium
                        shadow  ${className || ''}`}
        >
            {children}
        </button>
    );
};
