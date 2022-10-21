import { div } from '../framework/dom-creators.js'
import { priceType } from '../types/cart'

export function cartItemSum({ value, currency = 'PLN' }: priceType) {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
