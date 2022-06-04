import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props {
    className?: string;
    icon?: boolean;
}

export const Button: FC<
    Props &
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >
> = ({ className, icon, children, ...rest }) => {
    const iconClassName = `bg-transparent border py-2 px-3
                        hover:bg-slate-100`;
    return (
        <button
            {...rest}
            className={`bg-blue-800
                        hover:bg-gray-800
                        font-semibold
                        duration-300
                        rounded-md
                        py-2 px-8
                        text-white
                        shadow  ${className || ''} ${
                icon ? iconClassName : ''
            }`}
        >
            {children}
        </button>
    );
};
