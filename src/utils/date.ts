export const date = new Date(Date.now()).toLocaleDateString('en-us', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const DateFormat = (hours = 0) => {
  const _date = new Date();
  const time = _date.setHours(_date.getHours() - hours);
  return new Date(time).getHours();
};
