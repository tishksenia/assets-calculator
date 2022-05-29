import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/config/store';
import { Account } from '../config/types';

type AccountsState = Account[];

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
export const accountsSelector = (state: RootState) => state.accounts;
export { accountsReducer };
