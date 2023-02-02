import { useAppSelector } from 'app/config/hooks';
import { accountsSelector } from '../model/accountsSlice';
import { AccountCard } from './AccountCard';

export const AccountsList = () => {
    const items = useAppSelector(accountsSelector);

    return (
        <div>
            <h1 className="text-3xl font-bold pb-10">Accounts list</h1>
            <div className="flex flex-wrap shrink-0">
                {items.map((item, index) => (
                    <AccountCard item={item} key={index} />
                ))}
            </div>
        </div>
    );
};
