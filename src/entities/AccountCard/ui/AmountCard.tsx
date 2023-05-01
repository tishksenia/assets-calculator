import { FC } from 'react';
import { mapCurrency, Amount } from 'shared';

interface Props {
    amount: Amount;
}

export const AmountCard: FC<Props> = ({ amount: { amount, currency } }) => {
    return (
        <div
            className="border border-gray-300 rounded-lg
                        py-1 px-3
                        mr-1 mb-1
                        inline-block
                        font-thin
                        bg-gray-100
                        text-slate-800"
        >
            {amount} <span>{mapCurrency(currency)}</span>
        </div>
    );
};
