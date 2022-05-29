import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency } from 'shared';

type AccountsState = Account[];

interface Account {
    title: string;
    amounts: Amount[];
}

interface Amount {
    currency: Currency;
    amount: number;
}

const initialState: AccountsState = [];

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addAccount(state, action: PayloadAction<Account>) {
            state.push(action.payload);
        },
    },
});

const accountsReducer = accountsSlice.reducer;
export const { addAccount } = accountsSlice.actions;
export { accountsReducer };
