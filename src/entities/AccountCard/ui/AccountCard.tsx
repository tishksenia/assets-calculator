import React, { FC } from 'react';
import { Account } from '../config/types';
import { AmountCard } from './AmountCard';

interface Props {
    item: Account;
}

export const AccountCard: FC<Props> = ({ item: { amounts, title } }) => {
    return (
        <div className="mb-4 p-4  mr-4 basis-56 rounded-md shadow">
            <h2 className="font-medium text-xl pb-2">{title}</h2>
            {amounts.map((amount, index) => (
                <AmountCard amount={amount} key={index} />
            ))}
        </div>
    );
};
