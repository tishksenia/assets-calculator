import { FC, PropsWithChildren } from 'react';

export const Label: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <label
            className="flex flex-col grow
                       font-medium
                       cursor-pointer"
        >
            {children}
        </label>
    );
};
