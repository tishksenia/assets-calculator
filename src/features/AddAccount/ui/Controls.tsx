import { FC } from 'react';
import { Button } from 'shared';

interface Props {
    cancel: () => void;
}

export const Controls: FC<Props> = ({ cancel }) => {
    return (
        <div className="flex lg:items-start lg:flex-row flex-col items-stretch">
            <Button className="lg:mr-4 mb-2 lg:mb-0">Add</Button>
            <Button onClick={cancel} className="bg-gray-600" type="button">
                Cancel
            </Button>
        </div>
    );
};
