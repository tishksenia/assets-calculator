import { FC } from 'react';
import { mapCurrency } from 'shared';
import { Amount } from '../config/types';

interface Props {
    amount: Amount;
}

export const AmountCard: FC<Props> = ({ amount: { amount, currency } }) => {
    return (
        <div>
            {amount} {mapCurrency(currency)}
        </div>
    );
};
