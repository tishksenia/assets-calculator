import { Account, Amount } from 'entities/AccountCard/config/types';
import { Currency } from 'shared';

const defaultValues: Account = {
    title: '',
    amounts: [
        {
            amount: '',
            currency: 'USD',
        },
    ],
};

const defaultAmountValue = {
    amount: '',
    currency: 'USD' as Currency,
};

const currencyList = ['GEL', 'RUB', 'USD', 'EUR', 'GBP', 'SEK', 'UAH'];

interface FormValues {
    title: string;
    amounts: Amount[];
}
export type { FormValues };
export { defaultAmountValue, defaultValues, currencyList };
