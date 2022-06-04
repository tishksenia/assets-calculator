import { Account, Amount } from 'entities/AccountCard/config/types';
import { Currency, validationMessages } from 'shared';
import { array, number, object, string } from 'yup';

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

const validationSchema = object().shape({
    title: string().required(validationMessages.addAmountForm.title),
    amounts: array(
        object({
            amount: number()
                .typeError(validationMessages.addAmountForm.amount)
                .required(validationMessages.required),
        })
    ),
});

export type { FormValues };
export { defaultAmountValue, defaultValues, currencyList, validationSchema };
