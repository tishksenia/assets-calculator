import { store } from 'app/config/store';
import { addAccount } from '../accountsSlice';

describe('Account slice tests', () => {
    test('Should initialize with an empty account', () => {
        const accounts = store.getState().accounts;
        expect(accounts.length).toBe(0);
    });
    test('Should successfully add an account', () => {
        store.dispatch(
            addAccount({
                amounts: [{ amount: '500', currency: 'USD' }],
                title: 'Bank of Georgia',
            })
        );
        const state = store.getState();
        expect(state.accounts.length).toBe(1);
        expect(state.accounts[0].amounts[0].currency).toBe('USD');
        expect(state.accounts[0].title).toBe('Bank of Georgia');
    });
});
