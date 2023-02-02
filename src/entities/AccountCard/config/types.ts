import { Currency } from 'shared';

interface Account {
    title: string;
    amounts: Amount[];
}

interface Amount {
    currency: Currency;
    amount: string;
}

export type { Account, Amount };
