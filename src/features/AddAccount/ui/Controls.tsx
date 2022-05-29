import { FC } from 'react';
import { Button } from 'shared';

interface Props {
    cancel: () => void;
}

export const Controls: FC<Props> = ({ cancel }) => {
    return (
        <div className="flex items-start">
            <Button className="mr-4">Add</Button>
            <Button onClick={cancel} className="bg-gray-600" type="button">
                Cancel
            </Button>
        </div>
    );
};
