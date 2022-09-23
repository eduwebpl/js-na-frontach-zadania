import { div } from '../framework/dom-creators.ts'

export function cartItemSum({ value, currency = 'PLN' }) {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
