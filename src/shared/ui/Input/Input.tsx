import { forwardRef } from 'react';
import { Label } from '../Label/Label';

interface InputProps {
    label?: string;
    error?: boolean;
    className?: string;
}

type Props = InputProps & React.HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
    ({ label, error, className, ...rest }, ref) => {
        return (
            <Label>
                {label}
                <input
                    ref={ref}
                    {...rest}
                    className={`
                        text-base
                        font-normal
                        text-gray-700
                        block
                    bg-white bg-clip-padding bg-no-repeat
                        w-full
                        px-3
                        py-1.5
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none
                        ${error ? 'border-red-400' : 'border-slate-200'}
                        ${className}`}
                />
            </Label>
        );
    }
);
