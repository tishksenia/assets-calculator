import { AccountsList } from 'entities/AccountCard';
import { AddAccountForm } from 'features/AddAccount';
import { Container } from 'widgets';

export const Calculator = () => {
    return (
        <Container>
            <AccountsList />
            <AddAccountForm />
        </Container>
    );
};
