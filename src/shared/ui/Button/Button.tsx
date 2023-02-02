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
    const iconClassName = `bg-transparent hover:bg-slate-100
                           border
                           py-2 px-3`;
    const defaultClassName = `bg-blue-800 hover:bg-gray-800
                              py-2 px-8`;
    return (
        <button
            {...rest}
            className={`
                        font-semibold
                        duration-300
                        rounded-md
                        text-white
                        shadow  ${className || ''} ${
                icon ? iconClassName : defaultClassName
            }
            `}
        >
            {children}
        </button>
    );
};
