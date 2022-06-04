import { FC, useMemo } from 'react';
import {
    Controller,
    FieldArrayWithId,
    UseFieldArrayReturn,
    UseFormReturn,
    useFormState,
} from 'react-hook-form';

import { mapCurrency, Currency, Input, Select } from 'shared';

import { currencyList, FormValues } from '../config';
import { cancelIcon } from './Icons';

interface Props {
    amountField: {
        index: number;
        field: FieldArrayWithId<FormValues, 'amounts', 'id'>;
        index: number;
        formInstance: UseFormReturn<FormValues>;
        fieldArrayInstance: UseFieldArrayReturn<FormValues, 'amounts', 'id'>;
    };
}

export const AmountField: FC<Props> = ({
    amountField: { field, index, formInstance, fieldArrayInstance },
}) => {
    const { control, register } = formInstance;
    const { remove } = fieldArrayInstance;
    const { errors } = useFormState({ control });
    const currencyOptions = useMemo(
        () =>
            currencyList.map((code) => ({
                text: mapCurrency(code as Currency),
                value: code,
            })),
        []
    );

    return (
        <div
            className="flex relative lg:flex-row flex-col justify-between mb-4"
            key={field.id}
        >
            <Input
                label="Amount"
                {...register(`amounts.${index}.amount`)}
                error={
                    errors &&
                    errors.amounts &&
                    errors?.amounts[index].amount?.message
                }
            />
            <div className="lg:w-5 w-0" />
            <div className="flex items-start">
                <Controller
                    render={({ field }) => (
                        <Select
                            label="Currency"
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            options={currencyOptions}
                        />
                    )}
                    control={control}
                    name={`amounts.${index}.currency`}
                />
                <button
                    onClick={() => remove(index)}
                    type="button"
                    className="flex items-end
                               opacity-40
                               absolute -right-10 bottom-1"
                >
                    {cancelIcon}
                </button>
            </div>
        </div>
    );
};
