export function format_price_amount(amount: number) {
  return amount.toFixed(2).replace('.', ',');
}

export function get_icon_boolean(value: boolean): string {
  return value
    ? 'text-green-500 pi-check-circle'
    : 'text-red-500 pi-times-circle';
}