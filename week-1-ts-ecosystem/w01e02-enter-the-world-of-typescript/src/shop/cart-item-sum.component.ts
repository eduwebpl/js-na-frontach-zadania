import { div } from '../framework/dom-creators'
import {CartItemSum} from "../type";

export const  cartItemSum = ({ value, currency = 'PLN' }:CartItemSum) =>{
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
