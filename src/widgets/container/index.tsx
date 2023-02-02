import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div
            className="bg-white sm:rounded-xl rounded-none shadow-lg
                        container  w-auto lg:w-1/2
                        m-0 py-5 px-8
                        sm:p-10 sm:m-10
                        sm:mx-auto"
        >
            {children}
        </div>
    );
};
