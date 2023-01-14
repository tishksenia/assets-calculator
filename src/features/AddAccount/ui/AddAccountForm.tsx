import { FC, useState } from 'react';
import { Form } from './Form';
import { addAccountIcon } from './Icons';

export const AddAccountForm: FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>();

    const toggle = () => setIsEditing(!isEditing);

    return (
        <div>
            <Form isEditing={Boolean(isEditing)} cancel={toggle} />
            {!isEditing && <button onClick={toggle} data-testid="toggle-add-account">{addAccountIcon}</button>}
        </div>
    );
};
