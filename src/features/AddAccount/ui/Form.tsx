import { FC } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Input } from 'shared';

import { useAppDispatch } from 'app/config/hooks';
import { Account } from 'entities/AccountCard/config/types';
import { addAccount } from 'entities/AccountCard/model/accountsSlice';

import { defaultAmountValue, defaultValues, FormValues } from '../config';
import { addAmountIcon } from './Icons';
import { AmountField } from './AmountField';
import { Controls } from './Controls';

interface Props {
    isEditing: boolean;
    cancel: () => void;
}

export const Form: FC<Props> = ({ isEditing, cancel }) => {
    const dispatch = useAppDispatch();
    const formInstance = useForm<FormValues>({
        defaultValues,
    });
    const { control, register, handleSubmit, reset } = formInstance;
    const fieldArrayInstance = useFieldArray({
        control,
        name: 'amounts',
    });
    const { fields, append } = fieldArrayInstance;

    const onSubmit = (values: FormValues) => {
        dispatch(addAccount(values as Account));
        reset();
        cancel();
    };

    return isEditing ? (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex
                       flex-col
                       w-11/12
                       lg:w-1/2"
        >
            <Input
                label="Title"
                placeholder="Enter title of the account"
                {...register('title')}
            />
            <div className="mt-4">
                {fields.map((field, index) => (
                    <AmountField
                        key={field.id}
                        amountField={{
                            field,
                            index,
                            formInstance,
                            fieldArrayInstance,
                        }}
                    />
                ))}
            </div>
            <button onClick={() => append(defaultAmountValue)} type="button">
                {addAmountIcon}
            </button>
            <Controls
                cancel={() => {
                    cancel();
                    reset();
                }}
            />
        </form>
    ) : null;
};