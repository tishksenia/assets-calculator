import { FC, JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store as appStore } from 'app/config/store'

export function renderWithProviders(
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  {
    preloadedState = {},
    store = appStore,
    ...renderOptions
  } = {}
) {
  const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
