import { FC } from 'react';
import { Amount } from '../config/types';

interface Props {
    amount: Amount;
}

export const AmountCard: FC<Props> = ({ amount: { amount, currency } }) => {
    return (
        <div>
            {amount} {currency}
        </div>
    );
};
