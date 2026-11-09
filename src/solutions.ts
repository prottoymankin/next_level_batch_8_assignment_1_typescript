const multiplyValue = (value: number, multiplier = 2): number => value * multiplier;

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === 'string') return value.trim().toLowerCase();

  if (typeof value === 'number') return value * 10;

  if (typeof value === 'boolean' && value) return 'Active';

  return 'Inactive'
};