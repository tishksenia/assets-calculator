import { Currency } from 'shared/api/currency';

const map = {
    GEL: '₾',
    UAH: '₴',
    USD: '$',
    EUR: '€',
    RUB: '₽',
    GBP: '£',
    SEK: 'kr',
};

export const mapCurrency = (currency: Currency) => {
    return map[currency] || currency || '';
};
