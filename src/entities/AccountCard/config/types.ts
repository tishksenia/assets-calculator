import { Currency } from 'shared';

interface Account {
    title: string;
    amounts: Amount[];
}

interface Amount {
    currency: Currency;
    amount: number;
}

export type { Account, Amount };
