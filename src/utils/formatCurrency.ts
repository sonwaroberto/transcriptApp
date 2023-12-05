export const formatAmount = (amount: number) => {
  const amountFor = Intl.NumberFormat('en-US');
  const newAmount = amountFor.format(amount);

  return newAmount;
};
export function formatCurrency(
  amount: number | string | undefined,
  type = 'CFA',
) {
  const number = Number(amount);
  const fType = type.toLowerCase();
  if (isNaN(number)) {
    return '';
  }

  const formatter = new Intl.NumberFormat(fType === 'de' ? 'de-DE' : 'fr', {
    style: 'currency',
    currency: fType === 'de' ? 'EUR' : 'XAF',
  });

  return formatter.format(number);
}
