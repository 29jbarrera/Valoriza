export function format_price_amount(amount: number) {
    return amount.toFixed(2).replace('.', ',');
  }