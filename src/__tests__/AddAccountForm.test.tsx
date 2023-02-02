import '@testing-library/jest-dom'
import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from 'app'
import { AddAccountForm } from 'features/AddAccount'
import { validationMessages, renderWithProviders } from 'shared'

describe("AddAccountForm", () => {
    test("Adds an account", async () => {
        // arrange
        renderWithProviders(<App />)
        const user = userEvent.setup();
        // act
        await user.click(screen.getByTestId('toggle-add-account'));
        await user.type(screen.getByLabelText('Title'), "Account Name");
        await user.type(screen.getByLabelText('Amount'), "15");
        await user.click(screen.getByRole('button', { name: /Add/i }));
        // assert
        expect(screen.getByText(/Account Name/i)).toBeTruthy()
    });

    test("Adds account with EUR amount", async () => {
        // arrange
        renderWithProviders(<App />)
        const user = userEvent.setup();
        // act
        await user.click(screen.getByTestId('toggle-add-account'));
        await user.type(screen.getByLabelText('Title'), "X Bank");
        await user.type(screen.getByLabelText('Amount'), "18");
        await user.selectOptions(screen.getByLabelText('Currency'), "€");
        await user.click(screen.getByRole('button', { name: /Add/i }));
        // assert
        expect(screen.getByText(/X Bank/i).nextSibling).toHaveTextContent("€")
    });

    test("Doesn't add if the Amount value is non-numeric", async () => {
        // arrange
        renderWithProviders(<AddAccountForm />)
        const user = userEvent.setup();
        // act
        await user.click(screen.getByTestId('toggle-add-account'));
        await act(async () => {
            await user.type(screen.getByLabelText('Title'), "Account Name");
            await user.type(screen.getByLabelText('Amount'), "abcde");
            await user.click(screen.getByRole('button', { name: /Add/i }));
        })

        // assert
        expect(screen.getByText(validationMessages.addAmountForm.amount)).toBeTruthy()
    });

    test("Doesn't add if Amount or Title are empty", async () => {
        // arrange
        renderWithProviders(<AddAccountForm />)
        const user = userEvent.setup();
        // act
        await user.click(screen.getByTestId('toggle-add-account'));
        await act(async () => {
            await user.click(screen.getByRole('button', { name: /Add/i }));
        });

        // assert
        expect(screen.getByText(validationMessages.addAmountForm.title)).toBeTruthy()
        expect(screen.getByText(validationMessages.addAmountForm.amount)).toBeTruthy()
    });

    // TODO: accumulates amounts with that share a currency
})  