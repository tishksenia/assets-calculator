import { FC, PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as appStore } from 'app/config/store';

export function renderWithProviders(
    ui: ReactElement,
    { preloadedState = {}, store = appStore, ...renderOptions } = {}
) {
    const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
    };

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
