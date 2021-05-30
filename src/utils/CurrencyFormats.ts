export const currencyFormat = (value: number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

export const numberFormat = (value: string) => Number(value.replace(',', '.'));
