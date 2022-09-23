import { div } from '../framework/dom-creators'

export type CartItemPrice = {
  value: number;
  currency: string;
}

export type CartItemProperties = {
  name: string;
  amount: number;
  unit: string;
  price: CartItemPrice;
}

export function cartItem({ name, amount, unit, price }: CartItemProperties) {
  const $panelBlock = div('panel-block')
  const $name = div()
  $name.textContent = name
  const $amount = div('ml-auto')
  $amount.textContent = amount.toString()
  const $unit = div('tag')
  $unit.textContent = unit
  const $price = div('ml-4')
  $price.textContent = `${price.value} ${price.currency}`
  $panelBlock.append($name, $amount, $unit, $price)
  return $panelBlock
}
