import { mapCurrency } from '../mapCurrency';

describe('lib/mapCurrency tests', () => {
    test('Maps known currencies correctly', () => {
        expect(mapCurrency('USD')).toEqual('$');
        expect(mapCurrency('UAH')).toEqual('₴');
        expect(mapCurrency('USD')).toEqual('$');
        expect(mapCurrency('EUR')).toEqual('€');
        expect(mapCurrency('RUB')).toEqual('₽');
        expect(mapCurrency('GBP')).toEqual('£');
        expect(mapCurrency('SEK')).toEqual('kr');
    });

    test('Returns currency code if could not map', () => {
        expect(mapCurrency('NOK')).toEqual('NOK');
    });

    test('Returns empty string if value is not truthy', () => {
        expect(mapCurrency(null)).toEqual('');
        expect(mapCurrency(undefined)).toEqual('');
        expect(mapCurrency('')).toEqual('');
    });
});
