import { div } from '../framework/dom-creators'

export type CartItemSumOptions = {
  value: number
  currency?: string
}

export function cartItemSum({ value, currency = 'PLN' }: CartItemSumOptions) {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
