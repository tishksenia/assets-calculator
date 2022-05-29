import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg container mx-auto m-10 p-10">
            {children}
        </div>
    );
};
