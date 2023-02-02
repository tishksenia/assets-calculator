import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import { accountsReducer } from 'entities/AccountCard';

export const store = configureStore({
    reducer: {
        accounts: accountsReducer,
    },
    middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
